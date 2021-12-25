import dotenv from "dotenv";
import mongodb from "mongodb";
dotenv.config();

const { MongoClient } = mongodb;

// Die Verbindung zu MongoDB stellen wir mittels MongoClient her und nutzen dafür die eigene URI aus der Environment
// only for debugging: console.log("connecting to:", process.env.MONGODB_URI);
const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: { authSource: "admin" }
});

const db = client.db();
export default db;
