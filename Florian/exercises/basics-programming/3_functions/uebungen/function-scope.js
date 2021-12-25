/**
 * 1. Print Exponential Values
 * - Write a function that accepts two numbers and validate that they are numbers.
 * 
 * After that, the function should print y exponential values starting from x.
 * - For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
 * - function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.
 */

 // 1.1.
function exponentialValues(x, y)
{
    if((typeof x !== "number") || (typeof y !== "number"))
    {
        console.log("Bitte nummern benutzen");
    }

    let exponentResult = 1;
    let values = "";

    for(let i = 0; i < y; i++)
    {
        exponentResult *= x;
        values += exponentResult + " ";
    }
    return values;
}

// 1.2.
const ergebnis = exponentialValues(3, 5);
console.log(ergebnis);

// 1.3.
const ergebnis2 = exponentialValues(2, 8);
console.log(ergebnis2);

console.log("=".repeat(50));

/**
 * 2. Fruits
 * - Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".
 */

// 2.
let fruit = "Orange";

/**
 * @function printFavoriteFruit
 * @description Prints our favorite fruits into the terminal
 */
function printFavoriteFruit()
{
    fruit = "Banana";
    console.log("My favorite fruit is: " + fruit);
}

const ergebnisFrucht = printFavoriteFruit();

console.log("=".repeat(50));

/**
 * 3. Multiply a number by itself
 * - Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
 * - Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.
 */

// 3.1.
function exponent(startNumber, exponentNumber)
{
    const result = startNumber ** exponentNumber;

    // console.log(result);
    return result;
}

const ergebnisNummer2 = exponent(2, 3);
console.log(ergebnisNummer2);

// 3.2
//console.log(result);
// Die variable wurde innerhalb des code-blocks der funktion (lokal) angelegt, und ist deswegen nicht ausserhalb (global) verfügbar.
