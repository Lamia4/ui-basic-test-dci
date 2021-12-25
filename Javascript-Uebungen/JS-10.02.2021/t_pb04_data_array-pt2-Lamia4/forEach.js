// var arr =[2, 4, 10]

// function greaterNum(arr, num) {
//     let result = arr[0]
//    for greaterNum.forEach(let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//         return arr[i];

//     }

//    }

// }


// function greaterNum(arr, num) {
//     let result = arr[0]
//    for (const key in arr) {
//     if (key > num) {
//         let greatNumber = key;

//     }

//    }
//    return greatNumber

// }
// console.log (greaterNum(arr, 3));


//1
const arr = [3, 4, 5];
const num = 3;
const arrNew = [];
//for
function findGreatest(arr, num) {
    for (i of arr) {
        if (i > num) arrNew.push(i);
    }
    return arrNew;
}
console.log(findGreatest(arr, num));
//for of
function findGreatest1(arr, num) {
    for (const i in arr) {
        if (arr[i] > num) arrNew.push(arr[i]);
    }
    return arrNew;
}
findGreatest1(arr, num);


//Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument. 
//mit forEach
const arr2 = [3, 4, 5, 7, -4];
const num2 = 3;
const arr2New = [];
const arr3New = [];
arr.forEach(myFunction);

function myFunction(value) {
    if (value > num2) {
        arr2New.push(value);
    }
}
console.log(arr2New);
//mit arrow Function
arr2.forEach(myFunction = (value) => (value > num2) ? arr3New.push(value) : "Schade");
console.log(arr3New);

//Lösung von Yasir
// const myArr = [3, 4, 5, 2, 1];
// const num = 2;
// function findGreatest(einArray, einNummer) {
//     const neuArr = [];
//     einArray.forEach(myFunction);
//     function myFunction(value) {
//         if (value > num) {
//             neuArr.push(value);
//         }
//     }
//     return neuArr
// }
// const greatestNumberArray = findGreatest(myArr, num);
// console.log(myArr);
// console.log(greatestNumberArray);

//2 Create a function to find the longest word in a given string. 

// var Satz = "Hallo hier bin ich und ich lerne Programmierung.";

// Satz.forEach()

// const prompt = require("prompt-sync")();     // um einen Input zu bekommen
// var x = prompt("Bitte ersten Satz schreiben : ")
// function longestWordFinder(x){
//     const words = x.split(" ");
//     let longesteword = words[0];
//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length > longesteword.length ){
//             longesteword = words[i];
//         }
//     }
//     return longesteword;
// }
// console.log("The longest Word : " + longestWordFinder(x));

//3 

function reverseNumber(num) {
    const result = num.toString().split("").reverse().join(""); // toString hat die Value in ein String gemacht. split() hat die Value getrennt und eine Array gemacht. Und join() hat die Werte wieder zusammengefügt und ohne Array geschrieben.
    const result2 = Number.parseInt(result);
    return result2
}
console.log(reverseNumber(231459));

//4 Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string. 


// eine Lösung

var str = "Halloeghightjdtjsrhrhdgdrtoioio"; // ["H","a";"l","l","o"]

// function numberofVoels(str) {
//     const letters = str.split("");

//     var count = 0;
//     for (value of letters) {

//         if (value === "a" || value === "e" || value === "i" || value === "o" || value === "u") {
//             count ++; // oder count += 1;

//         }
//     }
//     return count;
// }

// console.log(numberofVoels(str));

// Lösung 2

function numberofVoels(str) {
    const letters = str.split("");
    const voels = ["a", "e", "i", "o", "u"]
    var count = 0;
    for (value of letters) {
        for (letter of voels) {
            if (value === letter) {
                count++;
            }
        }

    }
    return count;
}

console.log(numberofVoels(str));

function findVowels(arr) {
    const vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    const neuArr = arr.split(" ");
    for (value of vowels) {
        for (neu of neuArr) {
            if (neu.includes(value)) {
                counter++;
            }
        }
    }
    return counter
}

function findVowels2(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    const neuArr = str.split("");
    for (value of neuArr) {
        for (neu of vowels) {
            if (value.includes(neu)) {
                counter++;
            }
        }
    }
    return counter
}
console.log("4. Lösung ===========");
console.log(findVowels("this is a string"));
console.log(findVowels2("tihis is a stering"));

//5. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

var arrInteger = [1, 2, 3, 5, 6, 7, 8, 9, 10];

function findMissingInteger(arrInteger) {
    var arrI = [];
    for (value of arrInteger) {
        for (let i = 1; i <= 10; i++) {
            if (value != i) {
                var missingI = arrI.push(i);
            }
        }

    }
    return missingI;
}

console.log(findMissingInteger(arrInteger));

//Variante 2

function missingNums(arr) {
    const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let number = 0;
    for (value of numArr) {
        if (!arr.includes(value)) {
            number = value;
        }
    }
    return number
}
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));

//6. Create a function that takes in an array of numbers and returns the sum of its cubes. 

var arrCubes = [2, 3, 1];

function sumOfCubes(arrCubes) {
    var sum = 0;
    for (let i = 0; i < arrCubes.length; i++) {
        var drei = arrCubes[i] ** 3;
        sum += drei;

    }
    return sum;
}

console.log(sumOfCubes(arrCubes));

//7. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

var wordsString = "bu";
var wordsArray = ["or"];
var resultArr = [];

function findLetters(wordsString, wordsArray) {
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].startsWith(wordsString)) {
            resultArr.push(wordsArray[i]);
        }
    }
    return resultArr;
}



console.log(findLetters(wordsString, wordsArray));


//8 Create a function that finds all even numbers from 1 to the given number.

const prompt = require("prompt-sync")();


var x = prompt("Gib mir bitte eine Zahl: ");

var y = parseInt(x);
var numArr = [];

function evenNums(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {

            numArr.push(i)
        } 

    }
    
}
evenNums(y);
console.log(numArr);

//Bonus Create a function to sort a string into alphabetical order. **NB:** assume numbers, symbols and punctuation are not included in the string.

var z = prompt("Gib mir bitte ein Wort: ");

function sortString (str) {
    var str2 = str.toUpperCase().split("").sort().join("");
    return str2;
}

console.log(sortString(z));