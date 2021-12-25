import express from "express";

import token from '../middlewares/token.js';
import { validateParams, validateBody } from '../middlewares/validation.js';

import authenticationController from "../controllers/authentication.js";

const router = express.Router();

router.get('/login', authenticationController.loginByEmail, token.signToken);

export default router;