import sha256 from 'crypto-js/sha256.js';

for(let i = 0; i <= 999; i++) {
    const hashValue = sha256(''+i).toString();
    console.log(i, hashValue);
}