import express from "express";
import usersController from "../controllers/users.js";


const router = express.Router();


router
    .get("/", usersController.readAll)
    .get("/:userId", usersController.readOne)
    .put("/:userId", usersController.update)
    .delete("/:userId", usersController.delete);

router
    .post("/:userId/readinglist", usersController.addArticleToReadingList)
    .patch("/:userId/readinglist/:articleId", usersController.markArticleAsRead);


export default router;