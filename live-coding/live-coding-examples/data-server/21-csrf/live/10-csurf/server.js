import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import bodyParser from 'body-parser';
import express from 'express';
import expressHandlebars from 'express-handlebars';

const HTTP_PORT = 8080;

// create express app
var app = express()
app.listen(HTTP_PORT, () => console.log(`server listening on port ${HTTP_PORT}`));

// handlebars als Render-Engine
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

// setup route middlewares
//var csrfProtection = csrf({ cookie: true })
var csrfProtection = csrf(
	{ // Voreinstellungen stammen von csurf.
		cookie: {
			//key: '_csrf',
			//path: '/',
			//signed: false,
		g	//secure: false,
			//maxAge: null, // null => gültig für die gesamte Session
			//httpOnly: false, 
			sameSite: 'Lax', // false => "none"
			//domain: // default => current domain.
	  	} 
	}
);


// parse cookies
// we need this because "cookie" is true in csrfProtection
app.use(cookieParser())

app.get('/form', csrfProtection, function (req, res) {
	// pass the csrfToken to the view
	res.render('form', { csrfToken: req.csrfToken() })
})

var parseForm = bodyParser.urlencoded({ extended: false })
app.post('/process', parseForm, csrfProtection, function (req, res) {
  res.send('data is being processed')
})