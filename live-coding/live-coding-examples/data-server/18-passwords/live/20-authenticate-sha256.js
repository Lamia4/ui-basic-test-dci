import fs from 'fs';
import sha256 from 'crypto-js/sha256.js';

let i = 2;
const fileUserData = process.argv[i++];
const userParam = process.argv[i++];
const passParam = process.argv[i++];

const users = JSON.parse(
	fs.readFileSync(fileUserData, 'utf-8') // lesen der Datei
); // Parsen des gelesenen JSONs um ein Objekt zu erhalten

//console.log(users);
//
//console.log(userParam);
//console.log(passParam);

//console.log(sha256(passParam).toString());

// Authentifizierung durch Vergleich 
// des gegebenen Passwortes (passParam)
// mit dem Passwort des angegebenen Nutzers (users.userParam.pass)

//console.log(users[userParam].pass);

const passParamHashed = sha256(passParam).toString();
if (passParamHashed == users[userParam].pass) {
	console.log("authentication success");
} else {
	console.log("authentication failed");
}
