import express from 'express';
import { verifyToken } from '../controllers/VerifyToken.controller.js';

const router = express.Router();

router.get('/user', verifyToken, (req, res) => {
  const userId = req.user.id; 
  res.json({ userId });
});

export default router;
