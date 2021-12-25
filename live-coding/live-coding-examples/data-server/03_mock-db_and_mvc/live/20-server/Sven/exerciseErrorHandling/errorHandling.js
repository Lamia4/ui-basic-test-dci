import express from 'express';
import { JSONFile, Low } from 'lowdb';

const app = express();
app.use(express.json());

const adapter = new JSONFile('db.json');
const db = new Low(adapter);

await db.read();

app.listen(3000, () => {
	console.log('listening on port 3000');
});

//Route erstellen um alle Einträge der DB auszulesen
const dataNews = db.data.news;
app.get('/news/all', async (req, res) => {
    res.status("200").json(dataNews);
});
//console.log(JSON.stringify(dataNews));

//middleware einrichten
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import logger from "./middleware/logger.js";
app.use(logger);

// //deutsch als language einrichten
app.use((req, res, next) => {
    res.locals = {
        language: "de",
    };
    next();
});

//Headers ausgeben lassen und deutsch als fav. Sprache senden
  app.get("/news/user", (req, res) => {
      console.log(req.headers);
      res.set("content-language", "de");
      res.json(res.locals);
      console.log(res.locals);
  });

 //Eintrag anhand der Sprache anzeigen lassen
 app.get("/news/user/:lang", (req, res) => {
    // const lang = req.params.lang;
    // const localLang = res.locals.language;
    const dataNews = db.data.news;
    for (let i = 0; i < dataNews.length; i++) {
        const element = dataNews[i];
        res.status("200").json(dataNews[i]++);
    }
    // const dataNewsDe = dataNews[0].de;
    // const dataNewsEn = dataNews[0].en;

    // if (lang === localLang) {
    //     res.json(dataNewsDe);
    // } else {
    //     res.json(dataNewsEn);
    // }
    // res.status("200").json(dataNews[i]);
    // console.log(dataNews.de);
    
 });

 //Sprache auswählen
//Einträge anhand der Sprache anzeigen lassen

//ID auswählen
//Eintrag zur ID


