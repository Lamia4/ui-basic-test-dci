//1  Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.

// var arr2 = [];
// function Sum (arr) {
//     var sum = 0;
//     var prod = 1;
//     for (let i = 0; i< arr.length; i++) {
//       sum += arr[i];
//       prod *= arr[i];

//     }
//     arr2.push(sum, prod)
//     return arr2;
// }


// console.log(Sum([2,5,4]));


//Lösung Cüneyt

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [];
// function sumOfNumbers(array) {
// let sum = 0;
// let product = 1;
// for (let i = 0; i < arr1.length; i += 1) {
// sum += arr1[i];
// product *= arr1[i];
// arr2.push(sum, product);
// }
// return arr2.join(","), `Sum: ${sum}, Product: ${product} and New Array: ${arr2}`

// }
// console.log(sumOfNumbers(arr1)); //Sum: 15, Product: 120 and New Array: 1,1,3,2,6,6,10,24,15,120 

//2 Create an array filled with your friends' and family's names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:

// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"

let arrNames = ["Zeynep", "Yasir", "Galip"]


arrNames.forEach((value) =>
    console.log("Hello " + value)
);

//Lösung Yasir

let dieNamen = ["Maria", "Mike", "Paul", "Doven"];

function helloFrien(arr) {
    arr.forEach(myHelloFunct);

    function myHelloFunct(value, index, array) {
        array[index] = "Hello " + value + "!";
    }
}
helloFrien(dieNamen);
console.log(dieNamen);

//3 City Names. Create an array of city names. Loop through the array and add the city names to a string. Examples:
// [Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome".

var cityNames = ["Berlin", "Istanbul", "Seoul"];

function makeString(arrayCity) {
    let newString = "";
    let a = cityNames.toString();
    console.log('"' + a + '"');
}

makeString(cityNames);

//4 Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

function addInteger(arrayNumbers) {
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] % 2 == 0) {
            arrayNumbers[i] = arrayNumbers[i] + 1;

        } else {
            arrayNumbers[i] = arrayNumbers[i] - 1;
        };
    }
    return arrayNumbers;
}


console.log(addInteger([3, 5, 2]));

//5 Create a program that capitalizes the first letter of each element in an array of names. Examples:
// ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]

// ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]

// ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

function capitilizeFirst(arrayN) {
    for (let i = 0; i < arrayN.length; i++) {
        arrayN[i] = arrayN[i].charAt(0).toUpperCase() + arrayN[i].toLowerCase().slice(1);
    }
    return arrayN;
}

console.log(capitilizeFirst(["matt", "sara", "lara"]));

//6 A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]

// [1, 6, 6, 9, 9] ➞ [1, 6, 9]

// [2, 2, 2, 2, 2, 2] ➞ [2]

// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

let duplicateArr = [1, 4, 4, 7, 7, 7];

function noDuplicates(arr) {
    let resultArr = [];
    arr.forEach(value => {
        if (!resultArr.includes(value)) {
            resultArr.push(value);
        }
    });
    return resultArr;
};


console.log(noDuplicates(duplicateArr));

//andere Variante mit new Set

var galip = Array.from(new Set(duplicateArr));

//andere Variante mit new Set
var galip2 = [...new Set(duplicateArr)];

console.log(galip);
console.log(galip2);


//Lösung Cüneyt
// let arr7 = [1, 4, 4, 7, 7, 7];
// arr7 = [1, 6, 6, 9, 9];
// arr7 = [2, 2, 2, 2, 2, 2];
// function removeDuplicates(...array) {
//   return array.filter((a, b) => array.indexOf(a) === b)
// };
// console.log(removeDuplicates(...arr7)); // [2]
// //OR
// function removeDuplicates2(...array) {
//   let x = {};
//   array.forEach(function(i) {
//     if(!x[i]) {
//       x[i] = true
//     }
//   })
//   return Object.keys(x)
// }; 
// console.log(removeDuplicates2(...arr7));

//7 Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array. Examples:
// ("example", 3) ➞ ["example", "example", "example"]

function repeat(item, times) {
    var arr3 = [];
    for (let i = 1; i <= times; i++) {
        arr3 = arr3.concat(item);

    }
    return arr3;
}

console.log(repeat("Zeynep", 4));

//8 A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain: [3, 6, 12, 36]
// 3 is a factor of 6 (3 * 2 = 6)
// 6 is a factor of 12 (6 * 2 = 12)
// 12 is a factor of 36 (12 * 3 = 36)
// Create a program that determines whether or not a given array is a factor chain. Examples:

// [1, 2, 4, 8, 16, 32] ➞ true
// [1, 1, 1, 1, 1, 1] ➞ true
// [2, 4, 6, 7, 12] ➞ false
// [10, 1] ➞ false

function factorChain(arr4) {
    for (let i = 1; i <= arr4.length -1; i++) {
        if (arr4[i] % arr4[i - 1] !== 0) {
            return false;
    
    }
    
}
            return true;
}



console.log(factorChain([1, 2, 4, 8, 16, 32]));
console.log(factorChain([2, 4, 6, 7, 12]));
console.log(factorChain([10, 1]));
console.log(factorChain([10, 0]));

//Lösung Cüneyt

// let arr8 = [1, 2, 3]; //false
// arr8 = [1, 2, 4, 8, 16, 32]; //true
// function factorChain(...arr) { 
//   for (var i = 0; i < arr.length - 1; i++) {
//     if (arr[i+1] % arr[i] != 0) {
//       return false;            
//     }
//   }
//   return true;
// } console.log(factorChain(...arr8));