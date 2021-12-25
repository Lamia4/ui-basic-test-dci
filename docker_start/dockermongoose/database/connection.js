import mongoose from "mongoose";

const HOST = "127.0.0.1";
const PORT = "27018";

const USER = "root";
const PASSWORD = "example";

const DATABASE = "test";

mongoose.set('useFindAndModify', false); 

mongoose.connect(
	`mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`, 
	{
		useNewUrlParser: true, 
		useUnifiedTopology: true,
		auth: { authSource: "admin" }
	}
);

const db = mongoose.connection;

db.on("error", (err) => { console.error("connection error", err)});

export default db;