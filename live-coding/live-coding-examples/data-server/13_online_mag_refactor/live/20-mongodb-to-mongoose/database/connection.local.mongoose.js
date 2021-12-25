import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config();

mongoose.set('useFindAndModify', false);
// das führt dazu, dass mongoose.findOneAndUpdate()
// nicht mehr mongodb.findAndModify() nutzt,
// sondern mongodb.findOneAndUpdate().

mongoose.connect(
	process.env.MONGODB_URI + process.env.DATABASE,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		auth: { authSource: "admin" },
		autoCreate: false // prevent automatic creation of collections		
	}
);

const db = mongoose.connection;
//const db = mongoose.db({loggerLevel: 5});
// https://mongoosejs.com/docs/api.html#mongoose_Mongoose-set
mongoose.set('debug', true);
//mongoose.set('autoCreate', false);
mongoose.set('strict', 'throw'); // throw error on addition of attributes to collections
mongoose.set('strictQuery', 'throw'); // possibly obsolete in current versions of mongod
db.loggerLevel = 5;

db.on('error', (err) => { console.error('connection error:', err) });
await db.once('open', (err) => { console.log("opened database connection", "loggerLevel:", db.loggerLevel)});

export default db;
