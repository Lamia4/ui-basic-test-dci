import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import database from "./database/connection.mongoose.js";
import errorHandling from "./middlewares/errorHandling.js";
import articlesRouter from "./routers/articles.js";
import authenticationRouter from "./routers/authentication.js";
import usersRouter from "./routers/users.js";
import checkAuth from "./middlewares/checkAuth.js";
import expressHandlebars from 'express-handlebars';


dotenv.config();

database.init();

const server = express();
server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));


server.engine('handlebars', expressHandlebars());
server.set('view engine', 'handlebars');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.use("/articles", checkAuth, articlesRouter);
server.use("/users", usersRouter);
server.use("/authentication", authenticationRouter);

server.use(errorHandling);
