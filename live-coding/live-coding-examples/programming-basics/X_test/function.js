/**
 * arrow-function
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Functions/Pfeilfunktionen
 * @description
 * Eine arrow-function ist eine kompakte version der function.
 * bei einem einzelnen befehl ist kein block-körper oder return befehl nötig.
 * @example
 * const functionName = wert => return wert;
 * @example 
 * const functionName = wert => wert;
 * @example
 * const functionName = (wert1, wert2, ...) => {};
 * @example
 * // einfache anonyme funktion:
 * wert => {};
 */

// Wie wir funktionen meistens schreiben:
// function functionName()
// {

// }

// Wie wir funktionen auch schreiben können:
// const functionName = function()
// {

// }

// Die zweite variante lässt sich ganz einfach in eine arrow-function umwandeln, 
// wir müssen nur das wort "function" löschen, und nach den klammern einen pfeil einfügen. 
// const functionName = () =>
// {

// }

const helloString = inputString => console.log("Hallo,", inputString);

helloString("Christian");

const addFunction = (firstValue, secondValue) => firstValue + secondValue;

// Oder, mit code-block und return:
// const addFunction = (firstValue, secondValue) => 
// {
//     return firstValue + secondValue;
// }

// einfache, anonyme vergleichs-funktion
// (a, b) => a > b;

console.log(addFunction(5, 7));
