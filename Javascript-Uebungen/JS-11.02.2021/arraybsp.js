//1  Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

const prompt = require("prompt-sync")();
/*

var x = prompt("Gib mir mehrere Wörter: ");


var y = x.split(" ")


console.log(y);
var arr4 = []

function isFourLetters (yasir) {
    for (word of yasir) {
        if (word.length == 4) {
            arr4.push(word);
            
        }
       
    }
    return arr4;
}

andere Schreibweise

console.log(isFourLetters(y));

function isFourLetters (yasir) {
    for (word of yasir) {
        if (word.length == 4) {
            arr4.push(word);
            
        }
       
    }
}

isFourLetters(y);
console.log(arr4);
*/

//2 Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
/*
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function monthName(num) {
    for (let i = 0; i < month.length; i++) {

        if (num - 1 == i) {
            console.log(month[i]);
        }
    }
}

monthName(6);
*/

//3 Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

// For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
// The given integer will always be equal to or greater than 1.
// Include the given number (the number in the parameters).

// var num = prompt ("Gib mir bitte eine Zahl: ");
// var arrNum = [];


// function amplify (numRandom) {

//     for (let i = 1; i <= numRandom; i++) {
//         if (i%4 == 0){
//             arrNum.push(i*10);
//         } else {
//             arrNum.push(i);
//         }

//         };
//         return arrNum;
//     }

// console.log(amplify(num));


//Variante Zeynep

/*
let myAmplifyNum = [];
function amplify(givenNumber){
    for (let i=1; i<=givenNumber; i++){
        if(i%4==0){
         myAmplifyNum.push(i*10);  
        }
        if(i%4!=0){
            myAmplifyNum.push(i);
        }
    }
    return myAmplifyNum;
}
console.log(amplify(25));
*/

//4 One is not like the others... Create a function that takes an array of numbers and return the number that's unique.

//Lösung Michele

function uniqueMichele(numArray) {
    numArray = numArray.sort();
    let resultArray = []
    for (let i = 0; i < numArray.length; i++) {
        if(numArray[i] !== numArray[i-1] && numArray[i] !== numArray[i+1]) {
            resultArray.push(numArray[i])
        };
        
    }
    return resultArray;
}


console.log(uniqueMichele[3, 3, 3, 7, 8, 3]);



let array = [3,3,6,3,3,3];

function unique(randomArray){
    for(let i=1; i<=randomArray.length; i++){
        for(let value of randomArray){
            if(randomArray[i]!= value){
                return value;
            }
        }
    }
}
console.log(unique(array));


//Lösung Frederik

function uniqueFrederik(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        const currentElement = inputArray[i];
        if(inputArray.indexOf(currentElement) === inputArray.lastIndexOf(currentElement)) {
            return currentElement;
        }
        
    }
}

console.log(uniqueFrederik([3,3,3,7,3]));

//5 Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
var alphabets = [];

function generateAlphabets() {

    var start = 'a'.charCodeAt(0);
    var last = 'z'.charCodeAt(0);
    for (var i = start; i <= last; ++i) {
        alphabets.push(String.fromCharCode(i));
    }

    return alphabets.join('');
}

// for (values of str2) {
//     for (let i = 1; i < values.length; i++) {
//         if (values[i]);

//     }
//     ;

// }

generateAlphabets();
var y = alphabets;
console.log(y);

var z = "abc";



function wordRank(words) {
    var words2 = words.toLowerCase();
    var wordsArray = words2.split('');
    var sum = 0;
    for (let k = 0; k < wordsArray.length; k++) {
        for (let j = 1; j < y.length; j++) {
            if (wordsArray[k] == y[j]) {
                return j;
            };
           sum += j;
           return sum;
           
        }
       
    }
    
}

// for (values of zArray) {
//     for (let i = 1; i < values.length; i++) {
//         for (let j = 0; j < zArray.length; j++) {
//             if ();

//         }

//     }
// }


console.log(wordRank(z));


function wordRankFrederik (inputString) {
    const words = inputString.split (" ");
    const ranking = [];
    const rankingLetters = ["a","b", "c", "d", "e", "f", "g"];
    for (let i = 0; i < wordsF.length; i++) {
        const word = words[i];
        const letters = word.split("");
        const score = 0;
        for (let j = 0; j < letters.length; j++) {
            const currentScore = rankingLetters.indexOf(letters[j].toLowerCase())+1;
           score += currentScore;
            
        }
        ranking.push(score);
        
    }
    return words[ranking.indexOf((Math.max(...ranking)).replace(".", "").replace(",", ""))]; // um das Komma und Punkt wegzumachen
}

wordRank("The qick brown fox")

//Lösung Julia

function wordRank(str)
{
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArr = alphabet.split('');
    let score = 0;
    const scoreArr = [];
    str = str.split('').filter(letter => letter.match(/[a-z]|\s/i)).join(''); //filter str and place only letters and spaces
    const strArr = str.split(' ');
    for (let word of strArr)
    {
        score = 0;
        for (i = 0; i < word.length; i++)
        {
            score += alphabetArr.indexOf(word[i].toLowerCase()) + 1;
        }
        scoreArr.push(score);
    }
    return strArr[scoreArr.indexOf(Math.max(...scoreArr))];
}
console.log('Word Ranking: ', wordRank("Check back tomorrow, man!"));

//6 create a function that takes a string 



function hackerSpeak(inputString) {
    return inputString
    .toLowerCase()
    .replaceAll("a", 4)
    .replaceAll("e", 3)
    .replaceAll("i", 1)
    .replaceAll("o", 0)
    .replaceAll("s", 5);
    ;
}
console.log((hackerSpeack("javascript is cool")))


//Lösung Zeynep

let myString ="Guide us to the Straight Way";
function hackerSpeak(){ 
    let newA = myString.toLowerCase().replaceAll("a", 4);
    let newE = newA.toLowerCase().replaceAll("e", 3);
    let newI = newE.toLowerCase().replaceAll("i", 1);
    let newO = newI.toLowerCase().replaceAll("o", 0);
    let newS = newO.toLowerCase().replaceAll("s", 5);
   return newS;
}
console.log(hackerSpeak(myString));