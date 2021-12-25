

//3 Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

var array = [2, 4, 3, 5]

var filterEvenNumbers = array.filter(num => {
    return num % 2 === 0;
})

console.log(filterEvenNumbers);


// Variante Function

// var array2 = [];

// function filterEvenNumbers (arrayRandom) {
//     for (let i = 0; i < arrayRandom.length; i++) {
//         if (arrayRandom[i]%2 == 0){
//             array2.push(arrayRandom[i]);
//         };

//     }
//     return array2;
// }

// console.log(filterEvenNumbers(array));

//4 Given an array, create a function which filters array based on a search query.

// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

let friends = ["Zeynep", "Rigina", "Lamia"];


function filterFriends(inputArray, letters) {

    const ergebnis = inputArray.filter(names => {
        return names.includes(letters);
    });
    return ergebnis;
};

console.log(filterFriends(friends, "gi"));

//5 Write a function called sum that uses the reduce method to sum up an array of numbers.

// Examples:

// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20

arraySum = [1, 2, 3];

function sumNum(array) {
    var arrayResult = array.reduce((accumulator, num) => {
        return accumulator + num
    }) 
    return arrayResult;
}

console.log(sumNum(arraySum));


//6 Given an array of numbers, find the square root of each element in the array.

function squareRoot(arr)
{
    return arr.map(number => Math.sqrt(number));
}
console.log(squareRoot([4,16,36]));


//andere Aufgabe

const resultSum = arr.reduce((acc,value) => {
    return acc += 1;
}, 0);

//wenn man die Länge haben möchte;