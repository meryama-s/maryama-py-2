import { Router } from 'express';
const router = Router();

// Routes for authentication
router.post('/register', (req, res) => {
  res.send('Register route working!');
});

router.post('/login', (req, res) => {
  res.send('Login route working!');
});

export default router;
