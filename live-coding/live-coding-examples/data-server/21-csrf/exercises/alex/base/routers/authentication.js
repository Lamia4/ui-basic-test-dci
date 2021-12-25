import express from "express";
import authenticationController from "../controllers/authentication.js";

const router = express.Router();

// noch ohne Middleware
router.post("/", authenticationController.loginByEmail);

export default router;
