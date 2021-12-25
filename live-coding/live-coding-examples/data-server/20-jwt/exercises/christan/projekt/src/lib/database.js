//archivo ayuda a conectar con la base de datos
import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    // auth: { authSource: "admin" }
});
const connectDB =  async ()  =>{ 
    const db = await mongoose.connection;
    db.on("error", console.error);
    console.log("geklapp");
};

export default connectDB;
