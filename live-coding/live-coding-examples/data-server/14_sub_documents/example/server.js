import dotenv from "dotenv";
dotenv.config();
import express from "express";
import database from "./lib/database.js";
import articlesRouter from "./routers/articles.js";
import usersRouter from "./routers/users.js";
import errorHandling from "./middlewares/errorHandling.js";

database.init();

const server = express();
server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/articles", articlesRouter);
server.use("/users", usersRouter);

server.use(errorHandling);
