import User from "./User.js";
import db from "../database/connection.js";

db.once("open", () => {

    User.create("Zeynep", "zeynep@gmail.com");
    User.create("Galip", "galip@gmail.com");
    User.create("Lamia", "lamia@gmail.com");
    User.create("Yasir", "yasir@gmail.com" )
})