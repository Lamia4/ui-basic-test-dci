const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const database = require("./lib/database.js");
const errorHandling = require("./middleware/errorHandling.js");
const eventsRouter = require("./router/events.js");
const authRouter = require("./router/auth.js");

dotenv.config();

database.init();

const server = express();
server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

/*
const password = async () => {
    const bcrypt = require("bcrypt");
    const password = "1234"
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password + process.env.PEPPER, salt)
    console.log(hash);
}
 password();
*/

server.use("/api/events", eventsRouter);
server.use("/api/auth", authRouter);
server.use("/api", (req, res) => res.status(404).send());

server.use(errorHandling);
