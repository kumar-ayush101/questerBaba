import express from 'express';
import createPostRouter from './createPost.route.js';
import getPostRouter from './getPost.route.js';
import getSinglePostRouter from './getSinglePost.route.js';
import deleteSinglePostRouter from './deleteSinglePost.route.js';
import updateSinglePostRouter from './updateSinglePost.route.js';
import signingInRouter from './SigningIn.route.js';
import loginRouter from './login.route.js';
import getProfileRouter from './getProfile.route.js';
import userRouter from './user.route.js';
import likeDislikeRouter from './likeDislike.route.js';




const router = express.Router();

router.use('/', createPostRouter);
router.use('/', getPostRouter);
router.use('/', getSinglePostRouter);
router.use('/', deleteSinglePostRouter);
router.use('/', updateSinglePostRouter);
router.use('/', signingInRouter);
router.use('/', loginRouter);
router.use('/', getProfileRouter);
router.use('/', userRouter);
router.use('/', likeDislikeRouter);

export default router;
