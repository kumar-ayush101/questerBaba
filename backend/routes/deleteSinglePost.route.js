import express from 'express';
import { deleteSinglePost } from '../controllers/deleteSinglePost.controller.js';
import { verifyToken } from '../controllers/VerifyToken.controller.js';

const router = express.Router();

router.delete('/deleteSinglePost', verifyToken, deleteSinglePost);

export default router;
