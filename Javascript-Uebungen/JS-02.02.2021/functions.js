//1 Create a function that multiples a number by another number.

// function multiple (number1, number2) {
//     return number1*number2;
// }

// console.log (multiple(3, 5));

//2 Rework the syntax of the above function so that the function declaration is stored as a value.

// var isim = function (number1, number2) {
//     return number1*number2;
// }

// console.log (isim(2, 3));

//3 

// multiple = (number1, number2) => number1*number2;

// console.log (multiple(3, 5));

//4 Create functions (using all three declarations) to check the remainder of division given two numbers.


// function division (number1, number2) {
//     return number1%number2;
// }

// console.log(division(6,2));


// let isim2 = function (number1, number2) {
//     return number1%number2;
// }

// console.log(isim2(6,4));

// division = (number1,number2) => number1%number2;

// console.log(division(6,4));



//1 Write a function that accepts two numbers and validate that they are numbers.


var isNumber = typeof 2;

function name1(number1, number2) {
    if ((typeof number1) == isNumber && (typeof number2) == isNumber) {
        console.log("These are numbers.")
    } else {
        console.log("These are no numbers.")
    }
}

name1(2, 4);

function name2(number1, number2) {
    if (!isNaN(number1) && !isNaN(number2)) {
        console.log("These are numbers.")
    } else {
        console.log("These are no numbers.")
    }
}

name2(4, 7)

function name3(number1, number2) {
    if (Number.isInteger(number1) && Number.isInteger(number2)) {
        console.log("These are numbers.");
        for (let i = 1; i <= number2; i++) {
            console.log(number1 ** i);

        }
    } else {
        console.log("These are no numbers.")
    }
}

name3(3, 5)

// After that, the function should print y exponential values starting from x.

// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.



function name4(number1, number2) {
    var s = "";
    for (let i = 1; i <= number2; i++) {
        s += (number1 ** i) + "  ";

    }
    console.log(s)
}

name4(3, 2)

//2 Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".

// var fruit = "apple";

function printFavoriteFruit() {
    var fruit = "apple";
    fruit = "strawberry";
    console.log("My favorite fruit is: " + fruit);
    return fruit;
}

const fruit = printFavoriteFruit();

console.log(fruit);

//3 Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.


function exponent(number1, number2) {
    let result = number1 ** number2;
    return result;

}

console.log(exponent(2, 5))


//4 Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.

const result = exponent(4, 5);
console.log(result);