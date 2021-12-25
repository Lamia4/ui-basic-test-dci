import fs from 'fs';
import sha256 from 'crypto-js/sha256.js'

const users = JSON.parse(
	fs.readFileSync('./data/pw.json', 'utf-8')
);

//console.log(users);
let i = 0
for( ; i <= 999; i++)
   if(sha256(''+i).toString() === users['bob'].sha256) break

console.log('i=',i,'=',sha256(''+i).toString());
console.log('bob=',i,'=',users['bob'].sha256);


/*
for(let i = 0; i <= 999; i++ )
    console.log(i,'=',sha256(''+i).toString());
*/