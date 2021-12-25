// Imports
import dotenv from "dotenv";
import express from "express";
import unless from 'express-unless';
import cookieParser from "cookie-parser";
import exphbs from "express-handlebars";
import csrf from "csurf";


import database from "./database/mongooseConnect.js";
import errorHandling from "./middlewares/errorHandling.js";
import articlesRouter from "./routers/articles.js";
import usersRouter from "./routers/users.js";
import authRouter from "./routers/auth.js";
import auth from "./middlewares/auth.js";


//
const server = express();
const csrfProtection = csrf({ cookie: true })
csrfProtection.unless = unless;
/*const csrfProtection = csrf(
    { 
        cookie: {
            //key: '_csrf',
            //path: '/',
            //signed: false,
            //secure: false,  // unverschlüsseltes http
            //maxAge: null,   // null --> gültig für gesamte session
            //httpOnly: false,
            sameSite: 'strict',    // bedeutet none, Cookie wird immer gesendet
            //domain: // default --> current domain
        } 
    }
)*/

dotenv.config();
database.init();

server.engine('handlebars', exphbs());
server.set('view engine', 'handlebars');

// Middlewares

server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


// Routes
server.use("/auth", authRouter);

server.get("/form", csrfProtection, (req, res, next) => {
    const csrfToken = req.csrfToken();
    res.header({"csrf-token": csrfToken})

    res.json({
        "jwt-token": res.jwtToken,
        "csrf-token": csrfToken
    })

})

server.use(csrfProtection.unless({ path: [ { uri: '/', method: 'GET' } ] }))
// hier auch die erstellung des csrf-tokens direkt einhängen? Weniger Prozedur wenn es als Header gesetzt wird?

server.use("/articles", auth.protect, articlesRouter);
server.use("/users", auth.protect, usersRouter);


// Middlewares
server.use(errorHandling);

// Listen
server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));