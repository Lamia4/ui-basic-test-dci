import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

import database from './database/connection.mongoose.js';
import errorHandler from './middlewares/errorHandler.js';
import usersRouter from './routers/users.js';
import authRouter from './routers/auth.js';

dotenv.config();

const server = express();

database.init();
server.listen(process.env.PORT, () => console.log(`server is listening on port: ${process.env.PORT}`));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser())

server.use('/auth', authRouter);
server.use("/users", usersRouter);

server.use(errorHandler);