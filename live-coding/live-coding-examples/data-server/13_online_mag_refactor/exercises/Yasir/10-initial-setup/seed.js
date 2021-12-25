import faker from 'faker';
import db from './database/connection.local.mongoose.js';
db;
import mongoose from 'mongoose';
import User from './models/User.js';
import Article from './models/Article.js';

// Mit faker.js (http://marak.github.io/faker.js/, https://www.npmjs.com/package/faker)
// lassen sich verschiedenste Daten generieren. Wir können bspw. einen User erstellen, indem wir uns Name und E-Mail-Adresse von faker erzeugen lassen.

// Der Seed ist für faker der "Startpunkt", ab dem die Zufallsdaten generiert werden. Setzen wir diesen Wert (beliebige Zahl), 
// bekommen wir immer die gleichen Daten heraus.
faker.seed(12345);

async function generateData () {
    await User.deleteMany({});

    for (let i = 0; i < 30; i++) {
        const user = new User();

        let hexID = faker.datatype.hexaDecimal(24).substring(2);
        let id = mongoose.Types.ObjectId(hexID);
        user._id = id;

        user.name = faker.name.findName();
        user.email = faker.internet.email();
        await user.save();
    }
    
    await Article.deleteMany({});

    for (let i = 0; i < 20; i++) {
        const article = new Article();

        let hexID = faker.datatype.hexaDecimal(24).substring(2);
        let id = mongoose.Types.ObjectId(hexID);
        article._id = id;
        
        article.title = faker.lorem.word();
        article.teaser = faker.lorem.sentence();
        article.text = faker.lorem.text();

        await article.save();
    }
}

// Da wir eine async function erstellt haben, müssen wir hier auf das Promise warten.
// Tritt kein Fehler auf, beenden wir den Prozess mit process.exit(0).
// Andernfalls lassen wir uns den Fehler ausgeben und stoppen den Prozess mit einem Fehler (process.exit(1)).
await generateData()
    .then(() => {
        console.log("generated data");
        db.close();
    })
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
