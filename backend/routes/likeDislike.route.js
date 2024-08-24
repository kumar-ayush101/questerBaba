import express from 'express';
import { updateLikes, updateDislikes } from '../controllers/likeDislike.controller.js';

const router = express.Router();

router.post('/like/:postId', updateLikes);
router.post('/dislike/:postId', updateDislikes);

export default router;
