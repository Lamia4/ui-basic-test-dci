const tokenHandler = require("../lib/token.js");
const UserModel = require("../model/User.js");

module.exports = {
    login: async (req, res, next) => {

        try {
            const user = await UserModel.login({
                username: req.body.username,
                password: req.body.password,
            });

            const token = tokenHandler.create(user);

            res.cookie("token", token, {
                maxAge: process.env.TOKEN_EXP * 1000,
                httpOnly: true,
            });

            res.json(user);
        } catch (error) {
            res.status(401).send();
            next(error);
        }
    }
};
