import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config();

mongoose.connect(
	process.env.MONGODB_URI + process.env.DATABASE,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
		auth: { authSource: "admin" },
		autoCreate: false // prevent automatic creation of collections
	}
);

// https://mongoosejs.com/docs/api.html#mongoose_Mongoose-set
mongoose.set('debug', true);
mongoose.set('strict', 'throw'); // throw error on addition of attributes to collections
mongoose.set('strictQuery', 'throw'); // possibly obsolete in current versions of mongod

const init = async function () {
	const db = mongoose.connection;
	db.loggerLevel = 5;
	db.on("error", console.error);
	db.once('open', (err) => {
		console.log("mongoose: opened database connection to "
			+ process.env.MONGODB_URI
			+ process.env.DATABASE
		);
		console.log("mongoose: loggerLevel:", db.loggerLevel);
	});
}

export default { init };
