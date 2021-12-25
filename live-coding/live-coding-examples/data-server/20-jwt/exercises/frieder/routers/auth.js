import express from 'express';

import authController from '../controllers/auth.js';
import token from '../middlewares/token.js';

const router = express.Router();

router.get('/login', authController.loginByEmail, token.signToken);

export default router;