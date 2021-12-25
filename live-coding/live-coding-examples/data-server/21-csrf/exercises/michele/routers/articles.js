import express from "express";
import articlesController from "../controllers/articles.js";

const router = express.Router();

router
    .post("/", articlesController.create)
    .get("/", articlesController.readAll)
    .get("/:articleId", articlesController.readOne)
    .put("/:articleId", articlesController.update)
    .delete("/:articleId", articlesController.delete)

export default router;