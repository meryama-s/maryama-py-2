import { Router } from 'express';
import { UserService } from '../services/index.js';


const router = Router();


router.post('/signup', async (req, res) => {
try {
const { email, password, role } = req.body;
const user = await UserService.sigup({ email, password, role });
return res.status(201).json({ id: user._id, email: user.email, role: user.role });
} catch (err) {
return res.status(400).json({ message: err.message });
}
});


router.post('/login', async (req, res) => {
try {
const { email, password } = req.body;
const { token, user } = await UserService.login({ email, password });
return res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
} catch (err) {
return res.status(400).json({ message: err.message });
}
});


export default router;