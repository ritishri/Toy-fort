import express from 'express';
import { adminLogin } from '../controllers/adminController.js';
import { verifyAdmin } from '../middleware/auth.js';

const router = express.Router();

router.post('/login', adminLogin);

// Example: protected admin route

router.get('/check-auth', verifyAdmin, (req, res) => {
  res.sendStatus(200);
});

router.get('/dashboard', verifyAdmin, (req, res) => {
  res.status(200).json({ message: 'Welcome to the admin dashboard' });
});

export default router;
