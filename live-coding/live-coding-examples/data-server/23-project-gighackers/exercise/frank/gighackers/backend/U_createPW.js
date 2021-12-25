const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
dotenv.config();

const Args = process.argv;

if(Args.length < 3){
    console.error("Passwort vergessen!");
    process.exit(1);
}
cryptPW = bcrypt.hashSync(Args[2] + process.env.PEPPER, 10);

console.log(`"${Args[2]}" = "${cryptPW}"`);
console.log("check:",bcrypt.compareSync(Args[2] +process.env.PEPPER, cryptPW));
