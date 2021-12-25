import express from "express";
import articles from "../controllers/articlesController.js";

const router = express.Router();

router.post("/", articles.create);
router.get("/", articles.readAll);
router.get("/:articleId", articles.readOne);
router.put("/:articleId", articles.update);
router.delete("/:articleId", articles.delete);

export default router;
