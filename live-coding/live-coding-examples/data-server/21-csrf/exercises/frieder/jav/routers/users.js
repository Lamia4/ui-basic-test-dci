import express from "express";
import unless from 'express-unless';

import { validateParams, validateBody } from '../middlewares/validation.js';
import token from '../middlewares/token.js';

import usersController from "../controllers/users.js";

import userIdSchema from '../validation/userId.js';
import userPutSchema from '../validation/user.put.js';
import userPostSchema from '../validation/user.post.js';

const router = express.Router();

//middleware excluded path 
token.verifyToken.unless = unless;
router.use(token.verifyToken.unless({ path: [ { url: "/", method: "POST" } ], useOriginalUrl: false })); // Beispiel - nur in Pfad / in Kombination mit Methode POST ausgeschlossen

router.use('/:userId', validateParams(userIdSchema));

router.post("/", validateBody(userPostSchema), usersController.create); // parameter dieser Callbacks muss sind (req, res, next)
router.get("/", usersController.readAll);
router.get("/:userId", usersController.readOne);
router.put("/:userId", validateBody(userPutSchema), usersController.update);
router.delete("/:userId", usersController.delete);

// Neue Endpoints für die Reading List
router.post("/:userId/readinglist", usersController.addArticleToReadingList);
router.patch("/:userId/readinglist/:articleId", usersController.markArticleAsRead);

export default router;
