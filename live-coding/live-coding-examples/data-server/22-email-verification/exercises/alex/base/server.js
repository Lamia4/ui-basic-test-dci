import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import database from "./lib/db.mongoose.js";
import errorHandling from "./middlewares/errorHandling.js";
import articlesRouter from "./routers/articles.js";
import authenticationRouter from "./routers/authentication.js";
import usersRouter from "./routers/users.js";
import checkAuth from "./middlewares/checkAuth.js";
import csrf from 'csurf'; // CSRF-Protection
import expressHandlebars from 'express-handlebars'; // zum serverseitigen Rendern des Formulars

dotenv.config();

database.init();

const server = express();
server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

// handlebars als Render-Engine
server.engine('handlebars', expressHandlebars());
server.set('view engine', 'handlebars');

// setup route middlewares
//var csrfProtection = csrf({ cookie: true })
var csrfProtection = csrf(
	{ // Voreinstellungen stammen von csurf.
		cookie: {
			//key: '_csrf',
			//path: '/',
			//signed: false,
			//secure: false,
			//maxAge: null, // null => gültig für die gesamte Session
			//httpOnly: false, 
			sameSite: 'Lax', // false => "none"
			//domain: // default => current domain.
	  	} 
	}
);


server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.use("/articles", checkAuth, articlesRouter);
server.use("/users", usersRouter);
server.use("/authentication", authenticationRouter);

server.use(errorHandling);
