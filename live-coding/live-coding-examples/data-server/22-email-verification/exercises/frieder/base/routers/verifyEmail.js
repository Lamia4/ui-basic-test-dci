import express from 'express';
import verificationEmail from '../middlewares/verificationEmail';

const router = express.Router();

router.get("/:userEmail/:emailVerificationToken", verificationEmail.verifyEmail);

export default router;