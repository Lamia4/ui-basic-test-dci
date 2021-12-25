import sessions from "express-session";

const ARGS = process.argv;
const HTMLPAGESDIR = '/' + ARGS[1].substr(1,ARGS[1].lastIndexOf('/')) + 'htmlPages';
var session;

function login(req, res, next){

    //  *** Call User-Model ..
    if(req.body.username === `${process.env.s_USER}` && 
       req.body.password === `${process.env.s_PASS}`){

        session=req.session;
        session.userid=req.body.username;

        console.log(
            new Date().toLocaleString('de-DE'),
            "  LOGIN:",    
            "User:",session.userid,
            "IP:",req.header('x-clientip') || req.connection.remoteAddress); 

        res.redirect('/');
    }
    else{
        console.log(
            new Date().toLocaleString('de-DE'),
            "  LOGIN FAILURE",    
            "User:",req.body.username,
            "IP:",req.header('x-clientip') || req.connection.remoteAddress); 
        throw new Error('Invalid username or password');
    }
};

function authentication(req, res, next){
    
    session=req.session;
    
    if(session.userid){

        console.log(
            new Date().toLocaleString('de-DE'),
            // "Session-Id:",session.id,
            "  User:",session.userid,
            "IP:",req.header('x-clientip') || req.connection.remoteAddress, 
            "Path:", req.url);
        //console.log('expires in: ' + (session.cookie.maxAge / 1000 / 60).toFixed(2))
        next();

    }else{
        res.sendFile('login.html',{ root: HTMLPAGESDIR });
    }
};

function logout(req, res, next){

    console.log(
        new Date().toLocaleString('de-DE'),
        "  LOGOUT:",    
        "User:",session.userid,
        "IP:",req.header('x-clientip') || req.connection.remoteAddress); 

    req.session.destroy();
    res.redirect('/');
};

export default {
	login,
	authentication,
	logout
};