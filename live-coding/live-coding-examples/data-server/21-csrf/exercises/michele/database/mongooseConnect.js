import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const init = async () => {
	const db = await mongoose.connect(
		process.env.MONGODB_URI,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		}
	);
	console.log("Connected to MongoDB");
	//!! error handling hinzufügen
	//db.on("error", console.error); 

	return db;
}


export default { init };
