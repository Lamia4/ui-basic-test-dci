//1 Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.



function sumAll(number1) {
    var sum = 0;
    for (let i = 1; i <= number1; i++) {
        sum += i;


    }
    return sum;
}

console.log(sumAll(4))

// wenn number 1 = 4, dann 1+2+3+4

//2 Create a function that takes in three numbers and returns the sum of its cubes.

function sumOfCubes(number1, number2, number3) {
    var sum = 0;
    sum = number1 ** 3 + number2 ** 3 + number3 ** 3;
    return sum;
}

console.log(sumOfCubes(1, 5, 9))


//3 Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

//lösung 1
function question2(str2, str) {
    var ergebnis = str2.startsWith(str);
    return ergebnis;
}

//lösung 2
// function question2 (str2, str) {
//     return str2.startsWith(str);
// }

console.log(question2("Hello world", "I"))


//4 Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.


function question(number1) {
    switch (true) {
        case number1 <= 0:
            console.log(true);
            break;
        default:
            console.log(false);
            break;
    }
}

question(3)

//5 Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

function question3(str1, str2) {
    var count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] == str2) {
            count += 1;

        }
    }
    return count;
}

console.log(question3("Lamia", "a"));

//6 Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.

function question4(number1, number2) {
    var exponent = number1 ** number2;
    return exponent;
}

console.log(question4(2, 4));

//7 Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

function dogAge(age) {
    var result = age * 7;
    console.log(`Your dog is ${result} years old in dog years.`);
}

dogAge(4);

//8 You just won a lifetime supply of your favourite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

function lifetime(age, amount) {
    var restage = 100 - age;
    var restamount = restage * (365 + 1 / 4) * amount;
    return restamount;
}

console.log(lifetime(25, 2));

//9 Create a function that takes a string and returns true if Waldo is found, and false if he's not.

function find(str3) {
    var found = str3.includes("Waldo");
    switch (true) {
        case found:
            console.log(true);
            break;
        default:
            console.log(false);
            break;
    }
}

find("hi Waldo");
find("hi Anna");

//10 Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.

function slicecalculation(slices, recipients, slicesEach) {
    var result1 = recipients * slicesEach;
    switch (true) {
        case result1 == slices:
            console.log(true);
            break;
        default:
            console.log(false);
            break;
    }
};

slicecalculation(15, 5, 3);
slicecalculation(12, 3, 5);

//11 Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.

// function checkString(stringX, stringO) {
//     for (let i = 0; i < stringX.length; i++) {

//         if (stringX[i] == "x") {
//             var countX = 0;
//             countX += 1;

//         }
//     }
//     for (let i = 0; i < stringO.length; i++) {
//         if (stringO[i] == "o") {
//             var countO = 0;
//             countO += 1;
//         }


//     }
//     switch (true) {
//         case countX == countO:
//             console.log(true);
//             break;
//         default:
//             console.log(false);
//             break;
//     }
// };



function checkString(stringX, stringO) {



    for (let i = 0; j = 0; i < stringX.length, j < stringO.length, i++, j++) {
        var countX = 0;
        var countO = 0;
        stringX[i] == "x";
        stringO[i] == "o"
        countX += 1;
        countO += 1;


        if (countX == countO) {
      
        console.log(true);
    } else {
        console.log(false);
    }
};
}
checkString("xavier", "No");