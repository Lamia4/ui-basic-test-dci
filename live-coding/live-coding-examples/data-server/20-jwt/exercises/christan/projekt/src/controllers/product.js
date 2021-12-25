export default {
    create: async function (req, res, next) {
        try {
            res.json({ msg: "create product success" });
        } catch (error) {
            next(error);
        }
    },

    update: async function (req, res, next) {
        try {
            res.json({ msg: "update product success" });
        } catch (error) {
            next(error);
        }
    },

    delete: async function (req, res, next) {
        try {
            res.json({ msg: "delete product success" });
        } catch (error) {
            next(error);
        }
    },
};