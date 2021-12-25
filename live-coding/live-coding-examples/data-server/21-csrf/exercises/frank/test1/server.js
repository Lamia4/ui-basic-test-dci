import dotenv from "dotenv";
import express from "express";
import sessions from "express-session";
import serveIndex from "serve-index";
import helmet from "helmet"; 

// ------------------------------------------------[ CSURF ]---------
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressHandlebars from 'express-handlebars';
import csrf from 'csurf';
// ------------------------------------------------------------------

import authentication from "./routes/authenticationRouter.js";
//import users from "./routes/usersRouter.js";
//import articles from "./routes/articlesRouter.js";
import errorHandling from "./middleware/errorHandling.js";

dotenv.config({ path: "./server.env" });
const server = express();

server.set('trust proxy', true);

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));  

const PORT = process.env.s_PORT;
const SERVER = process.env.s_SERVER;
const ARGS = process.argv;
const PUBLICDIR = '/' + ARGS[1].substr(1,ARGS[1].lastIndexOf('/')) + 'public' ;

// ------------------------------------------------[ CSURF ]---------
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

var parseForm = bodyParser.urlencoded({ extended: false })
 
// parse cookies
// we need this because "cookie" is true in csrfProtection
server.use(cookieParser())
 
server.get('/form', csrfProtection, function (req, res) {
  // pass the csrfToken to the view
  res.render('form', { csrfToken: req.csrfToken() })
})
 
server.post('/process', parseForm, csrfProtection, function (req, res) {
  res.send('data is being processed')
})
// ------------------------------------------------------------------

// ** Cookie-Identifikation express-session
server.use(sessions({

    name: `${process.env.s_COOKIE}`,
    secret: `${process.env.s_SECRET}`,
    resave: false,
    saveUninitialized: true,
    rolling: true, 
    cookie: { 
      maxAge: 1000 * 60 * 5, 
      httpOnly: true, 
      sameSite: 'lax',
    },
    //cookie: { httpOnly: true, sameSite: 'lax', rolling: true },
}));

server.listen(PORT, () => console.log(`${SERVER} is listening on Port ${PORT}`));

// ========================================================================

server.use( authentication );
// server.use( "/user", users );
// server.use( "/article", articles );

// ========================================================================
// Static Server 
// -----------------------------------------------------------------

server.use( "/", express.static(PUBLICDIR),
                 serveIndex(PUBLICDIR, { icons: true,
                                         template: './htmlPages/template.html'
                                       }));

server.use( errorHandling );

