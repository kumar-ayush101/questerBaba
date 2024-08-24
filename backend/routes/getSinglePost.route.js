import express from 'express';
import { getSinglePost } from '../controllers/getSinglePost.controller.js';
import { verifyToken } from '../controllers/VerifyToken.controller.js';

const router = express.Router();

router.get('/getSinglePost', verifyToken, getSinglePost);

export default router;
