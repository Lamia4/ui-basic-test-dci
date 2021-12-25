import dotenv from "dotenv";
import express from "express";
import expressHandlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';

import database from "./database/connection.mongoose.js";

import errorHandler from "./middlewares/errorHandler.js";

import articlesRouter from "./routers/articles.js";
import usersRouter from "./routers/users.js";
import authenticationRouter from "./routers/authentication.js";

dotenv.config();

database.init();

const server = express();
server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

// handlebars als Render-Engine
server.engine('handlebars', expressHandlebars());
server.set('view engine', 'handlebars');

//cors 
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === "OPTIONS") { //cors preflight request method
        return res.status(200).send();
    }
    next();
});

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.use("/articles", articlesRouter);
server.use("/users", usersRouter);
server.use("/authentication", authenticationRouter);

server.use(errorHandler);
