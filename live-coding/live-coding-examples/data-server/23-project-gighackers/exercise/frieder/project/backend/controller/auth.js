const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
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
    },
    resetPassword: async (req, res, next) => {
        try {
            const user = await UserModel.findByUsername(req.body.username);
            const isValid = req.body.answer === user.answer;
            if(isValid) {
                const SaltRounds = 14;
                const generatedPassword = (await bcrypt.hash(user.answer, 0)).replace( /[$/]+/g, '');
                const generatedPasswordHashed = await bcrypt.hash(generatedPassword + process.env.PEPPER, SaltRounds)
                await UserModel.resetPassword(user.username, generatedPasswordHashed);
                
                //send new password to user
                const token = tokenHandler.create({ value: generatedPassword }, 60);
                res.cookie("reset", token, {
                    maxAge: 60 * 1000,
                    httpOnly: true,
                });
                res.status(201).send();
            }

        } catch (error) {
            res.status(500).send();
            next(error);
        }
    }
};
