import sha256 from 'crypto-js/sha256.js';

for (let i = 0; i <= 999; i++)
{
    console.log(i, sha256(""+i).toString());
}
