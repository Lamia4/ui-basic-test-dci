import express from 'express';
import serveIndex from 'serve-index';

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}!`);
});

app.use(express.static('public'));

app.use('/public_index', //url für den Browser
    express.static('public'), //Ordner im Code express
    serveIndex ('public', {'icons': true} ) //Ordner im Code serveindex
    );