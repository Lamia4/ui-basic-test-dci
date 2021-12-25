import dotenv from "dotenv";
import mongodb from "mongodb";
dotenv.config();

const { MongoClient } = mongodb;

// Die Verbindung zu MongoDB stellen wir mittels MongoClient her und nutzen dafür die eigene URI aus der Environment
const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: { authSource: "admin" }
});

// Wir legen mit .db() die Datenbank fest...
const db = client.db(process.env.DATABASE);

// ...und exportieren diese anschließend für die weitere Verwendung
export default db;
