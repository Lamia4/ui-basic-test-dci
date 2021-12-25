import express from "express";
import authenticationController from "../controllers/authentication.js";

const router = express.Router();

// noch ohne Middleware
router.post("/", authenticationController.loginByEmail);
router.post("/user/signIn", authenticationController.createToken); //TokenController einfügen

export default router;