import fs from 'fs';
import sha256 from 'crypto-js/sha256.js';

let i = 2;
const fileUserData = process.argv[i++];
const userParam = process.argv[i++];
const passParam = process.argv[i++];

const users = JSON.parse(
    fs.readFileSync(fileUserData, 'utf-8'));

//console.log(users);
//console.log(sha256(passParam).toString());
//console.log(passParam);

const passParamHashed = sha256(passParam).toString();
if (passParamHashed == users[userParam].pass) {
    console.log("authenticated");
} else {
    console.log("äh nein");
}