import User from "./User.js";
import db from "../database/connection.js";

db.once("open", () => {

    User.updateUser("Zeynep","z1@gmail.de")
})