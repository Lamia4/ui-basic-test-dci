import express from 'express';
// import router from './src/routes/products.js'
// import router from './src/routes/users.js';
// import database from "./src/database/connection.mongoose.js";
import connection from "./src/lib/database.js";
import dotenv from "dotenv";
import productsRouter from "./src/routers/products.js";
import usersRouter from "./src/routers/users.js";
import errorHandling from "./src/middlewares/errorHandling.js";
import identificationHandling from "./src/middlewares/identificationHandling.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

dotenv.config();
connection();

const server = express();

// aca se define el puerto
server.set('port', process.env.PORT || 7000);
server.listen(8000, () => {console.log(`server is listening on port ${server.get('port')}`);});

server.use(express.urlencoded({ extended: true }));

server.use("/products", productsRouter);
server.use("/users", usersRouter);

server.use((request, response) => {
    response
        .status(404)
        .send("not found :-(");
});

// server.use(errorHandling);
// server.use(identificationHandling);

