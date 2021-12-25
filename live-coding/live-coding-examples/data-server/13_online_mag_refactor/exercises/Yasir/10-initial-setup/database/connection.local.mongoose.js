import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config();

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
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
await db.once('open', async (err) => { console.log('opened database connection')});

export default db;
