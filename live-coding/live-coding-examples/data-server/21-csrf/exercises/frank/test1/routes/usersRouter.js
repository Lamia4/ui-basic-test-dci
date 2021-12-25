import express from "express";
import users from "../controllers/usersController.js";

const router = express.Router();

router.post("/", users.create);
router.get("/", users.readAll);
router.get("/:userId", users.readOne);
router.put("/:userId", users.update);
router.delete("/:userId", users.delete);

// Neue Endpoints für die Reading List
router.post("/:userId/readinglist", users.addArticleToReadingList);
router.patch("/:userId/readinglist/:articleId", users.markArticleAsRead);

export default router;
