import express from "express";
import authenticationController from "../controllers/authentication.js";
import { validateParams, validateBody } from '../middlewares/validation.js';

const router = express.Router();

router.get('/', authenticationController.loginByEmail);

export default router;