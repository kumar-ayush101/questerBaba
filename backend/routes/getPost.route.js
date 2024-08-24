import express from 'express';
import { getTest } from '../controllers/get.controller.js';
import { verifyToken } from '../controllers/VerifyToken.controller.js';

const router = express.Router();

router.get('/getPost', verifyToken, getTest);

export default router;
