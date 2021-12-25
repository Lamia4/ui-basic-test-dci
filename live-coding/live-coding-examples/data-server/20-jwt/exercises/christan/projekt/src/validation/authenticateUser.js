import bcrypt from 'bcrypt';//instalar
// import dotenv from 'dotenv';
import fs from 'fs';
// dotenv.config();

const authenticateUser = () => {    
    const pepper = process.env.PEPPER;
    let i = 2;
    const fileUserData = process.argv[i++];
    const userParam = process.argv[i++];
    const passParam = process.argv[i++];

    const users = JSON.parse(
        fs.readFileSync(fileUserData, 'utf-8') // lesen der Datei
    );

    //console.log(users);

    //console.log(userParam);
    //console.log(passParam);

    const salt = users[userParam].salt

    //console.log("pass:", passParam);
    //console.log("salt:", salt);
    //console.log("pepper:", pepper);

    //const passParamHashed = sha256(passParam + salt + pepper).toString();


    // generiere neues/encriptado Passwort:
    const SALT_ROUNDS = 12;
    const newBcrypt = bcrypt.hashSync(passParam, SALT_ROUNDS);
    //console.log("newBcrypt", newBcrypt);

    //process.exit();

    const isAuthenticated = bcrypt.compareSync(passParam, users[userParam].bcrypt);
    if (isAuthenticated) {
        console.log("authentication success");
    } else {
        console.log("authentication failed");
    }
};

export default authenticateUser;