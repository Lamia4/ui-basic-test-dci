import express from "express";
import articlesController from "../controllers/articles.js";

const router = express.Router();

router.post("/", articlesController.create);
router.get("/", articlesController.readAll);
router.get("/:articleId", articlesController.readOne);
router.put("/:articleId", articlesController.update);
router.delete("/:articleId", articlesController.delete);

export default router;
