import User from "../models/User.js";
//import jwt = from "jsonwebtoken"; // for Bek's solution

export default {
    /* solution by Bek with "JWT" Javascript Web Token
    login: async (req, res, next) => {
        if (await User.login(req.body.name, req.body.password)) {
            const jwToken = jwt.sign({ name: req.body.name }, process.env.SECRET)
            res.cookie("cookieJwToken", jwToken, { httpOnly: true })
            res.send("authentication success")
        } else {
            res.send("authentication failure")
        }
    },
    /**/
    loginByEmail: async function (req, res, next) {
        console.log("authController.loginByEmail");
        try {
            const result = await User.loginByEmail(
                req.body.email,
                req.body.password
            );
            res.json(result);
        } catch (error) {
            res.status(401).send("Unauthorized - authentication failure");
            next(error);
        }
    },
    //Token Create einfügen
    createToken: async function (req, res, next) {
        console.log("createToken");
        const payload = {
            name: req.body.name, 
            email: req.body.email, 
            password: req.body.password
        };
        const secret = "jddohfidhvkjdbfjhfioufoiehfjebfjheoize";
    
        const options = {
            algorithm: "HS256",
            expiresIn: "300s",
        };

        if(await User.login (req.body.name, req.body.password)) {
            const token = jwt.sign(payload, secret, options);
        } else {
            console.log("Authentication failure");
        }
    },
}