import sha256 from "crypto-js/sha256.js";

const MAX = 999;

for (let i = 0; i < MAX; i++) {
  console.log(i, sha256("" + i).toString());
}
