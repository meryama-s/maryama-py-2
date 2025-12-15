const express = require("express");
const router = express.Router();

// home page
router.get("/", (req, res) => {
  res.send("Welcome to the Homepage");
});

// about page
router.get("/about", (req, res) => {
  res.send("About Us Page");
});

module.exports = router;
