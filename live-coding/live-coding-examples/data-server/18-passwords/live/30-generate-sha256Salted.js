import fs from 'fs';
import sha256 from 'crypto-js/sha256.js';
import { log } from 'console';

let i = 2;
const userParam = process.argv[i++];
const passParam = process.argv[i++];

//console.log(users);
//
//console.log(userParam);
//console.log(passParam);

//console.log(sha256(passParam).toString());

// Authentifizierung durch Vergleich 
// des gegebenen Passwortes (passParam)
// mit dem Passwort des angegebenen Nutzers (users.userParam.pass)

//console.log(users[userParam].pass);

const salt = Math.random();
const sha256Salted = sha256(passParam + salt).toString();

console.log("pass:", passParam);
console.log("salt:", salt);
console.log("sha256Salted", sha256Salted);

//const passParamHashed = sha256(passParam + salt).toString();
//if (passParamHashed == users[userParam].sha256Salted) {
//	console.log("authentication success");
//} else {
//	console.log("authentication failed");
//}
