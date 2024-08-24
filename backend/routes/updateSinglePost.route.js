import express from 'express';
import { updateSinglePost } from '../controllers/updateSinglePost.controller.js';
import { verifyToken } from '../controllers/VerifyToken.controller.js';

const router = express.Router();

router.put('/updateSinglePost', verifyToken, updateSinglePost);

export default router;
