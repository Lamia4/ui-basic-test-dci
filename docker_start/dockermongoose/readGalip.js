import User from "./model/User.js";
import db from "./database/connection.js";

db.once("open", () => {

    User.read("galip@gmail.com");
})


// db.once("open", async function read () {

//     const Galip = { email: "galip@gmail.com"};

//     const foundedUser = await User.find(Galip).exec();

//     console.log(foundedUser);
// })




