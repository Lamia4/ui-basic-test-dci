import Article from "../models/Article.js";

export default {
    readAll: async function (req, res, next) {
        try {
            res.json(await Article.readAll());
        } catch (error) {
            next(error);
        }
    },

    readOne: async function (req, res, next) {
        try {
            const article = await Article.readOne(req.params.articleId);
            if (!article) return res.status(404).send();
            res.json(article);
        } catch (error) {
            next(error);
        }
    },

    create: async function (req, res, next) {
        try {
            res.json({ msg: "success" });
        } catch (error) {
            next(error);
        }
    },

    update: async function (req, res, next) {
        console.log(req.params.articleId);
        console.log(req.body);
        try {
            const id = req.params.articleId;
            const changedArticle = req.body;
            res.json(
                await Article.updateById(id, changedArticle)
            );
        } catch (error) {
            next(error);
        }
    },

    delete: async function (req, res, next) {
        try {
            res.json(
                await Article.deleteById(req.params.articleId)
            );
        } catch (error) {
            next(error);
        }
    },
};
