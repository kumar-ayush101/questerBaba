import express from 'express';
import { getProfile } from '../controllers/getprofile.controller.js';
import { verifyToken } from '../controllers/VerifyToken.controller.js';

const router = express.Router();

router.get('/getProfile', verifyToken, getProfile);

export default router;
