import express from 'express';
import { SigningIn } from '../controllers/SigningIn.controller.js';

const router = express.Router();

router.post('/SigningIn', SigningIn);

export default router;
