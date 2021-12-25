import express from "express";
import authController from "../controllers/auth.js";

const router = express.Router();

router
    .post("/signup", authController.signUp)
    .post("/signin", authController.signIn);

export default router;


