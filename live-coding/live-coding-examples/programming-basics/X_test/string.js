const testString = "Hallo Welt";

/**
 * @method .substring();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring
 * @description
 * .substring(); gibt einen teil des original strings zurück, den wir spezfisch von anfang bis ende definieren können.
 * @example
 * String.substring(anfang, ende);
 */
const neuerString = testString.substring(0, 5);

console.log(neuerString);
console.log(testString);

/**
 * @method .substr();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/substr
 * @description
 * .substr(); gibt uns einen teil des original strings zurück bei dem wir den anfang und die länge definieren können.
 * @example
 * String.substr(anfang, länge);
 */
const neuerString2 = testString.substr(0, 3);
const neuerString3 = testString.substr(2, 1);

console.log(neuerString2);
console.log(neuerString3);
