import User from "../models/User.js";

export default {
    signUp: async function (req, res, next) {
        try {

            const result = await User.register(
                req.body.name,
                req.body.email,
                req.body.password
            );

            res.json(result);

        } catch (error) {
            next(error);
        }
    },

    signIn: async function (req, res, next) {
        try {
            const token = await User.loginByEmail(
                req.body.email,
                req.body.password
            );

            res.cookie("token", token, {
                expires: new Date(
                    Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
                ),
                // Cookies, die "HTTP only" sind, können ausschließlich vom Browser erreicht werden.
                // Ein Skript, das auf der Seite läuft, hat keinen Zugriff auf solche Cookies. Das ist eine Sicherheitsmaßnahme gegen XSS.
                httpOnly: true,
                // Möglich wäre hier noch die explizite Angabe der Domain, wenn bspw. Subdomains mit einbezogen werden sollen.
                // Standardmäßig wird die Domain auf die des Servers gesetzt. In unserer lokalen Umgebung ist das "localhost".
            });

            res.jwtToken = token;
            res.redirect('/form');

        } catch (error) {
            // unterschieden ob schon vorhanden, oder was anderes schief läuft
            next(error);
        }
    },
};
