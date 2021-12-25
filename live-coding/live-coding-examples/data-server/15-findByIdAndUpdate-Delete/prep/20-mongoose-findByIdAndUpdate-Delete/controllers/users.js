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
            console.log("body:", req.body);
            // https://mongoosejs.com/docs/api/model.html#model_Model.findOneAndUpdate
            const result = await User.findByIdAndUpdate(
                req.params.userId,
                req.body,
                {
                    new: true, // => the updated object will be returned
                    runValidators: true // => enables validation against the object's schema
                }
            );
            res.json(result);
        } catch (error) {
            next(error);
        }
    },

    delete: async function (req, res, next) {
        try {
            // https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndDelete
            const result = await User.findByIdAndDelete(req.params.userId);
            res.json(result);
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
