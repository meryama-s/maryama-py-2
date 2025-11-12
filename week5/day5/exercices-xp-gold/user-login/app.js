// app.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;

//secret key for JWT
const JWT_SECRET = "mysecretkey123"; 

//middleware
app.use(express.json());

// In-memory "database"
let users = [];

// routes

// register
app.post("/api/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // check input
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" });
    }

    // Check if user already exists
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create and save user
    const newUser = { id: users.length + 1, username, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error registering user:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// login
app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // find user
    const user = users.find((u) => u.username === username);
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // generate JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

//profile 
app.get("/api/profile", authenticateToken, (req, res) => {
  res.json({
    message: "Profile data retrieved successfully",
    user: req.user,
  });
});

// middleware
// Verify JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied, no token provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = user; // attach decoded user info
    next();
  });
}

//start
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
