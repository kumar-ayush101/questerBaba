import express from 'express';
import { postTest } from '../controllers/post.controller.js';
import { verifyToken } from '../controllers/VerifyToken.controller.js';

const router = express.Router();

router.post('/createPost', verifyToken, postTest);

export default router;
