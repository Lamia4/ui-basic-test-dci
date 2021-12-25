import User from "./User.js";
import db from "../database/connection.js";

db.once("open", async function() {

    User.deleteUser("Galip");
})