import express from "express";
import authentication from "../controllers/authenticationController.js";

const router = express.Router();

router.post('/login', authentication.login);
router.use(authentication.authentication);
router.get('/logout', authentication.logout);

export default router;