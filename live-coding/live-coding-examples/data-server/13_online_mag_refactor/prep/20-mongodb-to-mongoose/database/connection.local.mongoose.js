import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config();

mongoose.set('useFindAndModify', false);
// das führt dazu, dass mongoose.findOneAndUpdate()
// nicht mehr mongodb.findAndModify() nutzt,
// sondern mongodb.findOneAndUpdate().

mongoose.connect(
	process.env.MONGODB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		auth: { authSource: "admin" }
	}
);

const db = mongoose.connection;

db.on('error', (err) => { console.error('connection error:', err) });
db.once('open', (err) => { console.log('mongoose: opened connection to mongodb') });
db.once('close', (err) => { console.log('mongoose: closed connection to mongodb') });

export default db;
