import dotenv from "dotenv";
import express from "express";
import sessions from "express-session";
import serveIndex from "serve-index";
import helmet from "helmet"; 

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

