import User from "../models/User.js";

export default {
    readAll: async function (req, res, next) {
        try {
            const users = await User.readAll();
            res.json(users);
        } catch (error) {
            next(error);
        }
    },

    readOne: async function (req, res, next) {
        try {
            const user = await User.readOne(req.params.userId);
            if (!user) return res.status(404).send();
            res.json(user);
        } catch (error) {
            next(error);
        }
    },

    create: async function (req, res, next) {
        try {
            const result = await User.register("name", "email", "password");
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
            res.json({ msg: "success" });
        } catch (error) {
            next(error);
        }
    },

    // Neue Controller Functions für die Reading List
    addArticleToReadingList: async function (req, res, next) {
        try {
            const result = await User.addArticleToReadingList(req.params.userId, req.body.articleId);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },

    markArticleAsRead: async function (req, res, next) {
        try {
            const result = await User.markArticleAsRead(req.params.userId, req.params.articleId);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },
};
