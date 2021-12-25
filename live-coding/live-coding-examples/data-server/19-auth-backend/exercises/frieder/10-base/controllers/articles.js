import Article from "../models/Article.js";
import User from "../models/User.js";

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
            if (!req.body.authorId) {
                return res.status(422).send("authorId missing");
            }

            if (!await User.exists(req.body.authorId)) { // Test ob es den als Autor angegebenen Nutzer überhaupt gibt
                return res.status(404).send("user specified as author not found - userId: " + req.body.authorId);
            }

            const result = await Article.write(
                req.body.authorId,
                req.body.title,
                req.body.teaser,
                req.body.text
            )
            res.json(result);
        } catch (error) {
            next(error);
        }
    },

    update: async function (req, res, next) {
        try {
            res.json({ msg: "success" });
        } catch (error) {
            next(error);
        }
    },

    delete: async function (req, res, next) {
        try {
            const result = await Article.deleteById(req.params.articleId);
            res.send("Article deleted and users.readingLists updated accordingly");
        } catch (error) {
            next(error);
        }
    },
};
