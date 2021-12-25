//1 Write a program to add up the numbers 1 to 20.

// let i = 1;
// let j = 1;

// while (i<20) {
//     i++;
//     j += i;
//     console.log (j);
// };

//2 There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.


// do {
//     console.log (`There are  ${i} bottle of beer on the wall.`);
//     i++;
// }
// while (i <= 5);

// for (i=0; i<=5; i++) 
// {
//     if (i == 1) {
//         console.log (`There is ${i} bottle of beer on the wall.`)
//     }
//     else if (i > 1) {
//         k= i+1;
//         console.log(`There are ${i} bottles on the wall.`)
//     }
// };
    
//3 The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

// for (let i=0; i <= 20; i++) {
//     if (i%2 == 0) {
//         console.log (`${i} is even.`);
//     } else {
//         console.log (`${i} is odd.`);
//     }
// }

// i = 0;

// while (i<= 20) {
//     if (i%2 == 0) {
//         console.log (`${i} is even.`);
//     } else {
//         console.log (`${i} is odd.`);
//     };
//     i++;
// } 

//4 Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// for (i=0; i <= 10; i++) {
//     console.log (`${i}*9 = ${i*9}`);
// }

// for (i=0; i <= 10; i++) {
//     console.log (i + "*9 = " + i*9);
// }

//5 Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// for (let i=1; i <= 100; i++) {
//     if (i%3 == 0 && i%5 == 0) {
//         console.log (i + " FizzBuzz");
//     } else if (i%5 == 0) {
//         console.log (i + " Buzz");
//     } else if (i%3 == 0 ) {
//         console.log(i + " Fizz");
//     }
// }

//6 Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.

// let sum = 0;

// for (let i=1; i < 1000; i++) {
//     if (i%3 == 0 && i%5 == 0) {
//         console.log (sum = sum + i);
//     }
// }

// while (i < 1000) {
//     if (i % 5 == 0 && i % 3 == 0 ) {
//         sum += i;
//     }
//     i++;
// }
// console.log(sum);

//7 Write programs that produce the following outputs:
// 100 200 300 400 500 600 700 800 900 1000

//0 2 4 6 8 10

// 3 6 9 12 15

// 9 8 7 6 5 4 3 2 1 0

// 1 1 1 2 2 2 3 3 3 4 4 4

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4



//8 isPalindrome. Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

// var wort = "wawwa";
// var s = "";
// var i = wort.length;
// while (i > 0) {
// s += wort.substring(i-1, i);
// i--;
// }
// console.log(s);
// if (s === wort) {
// console.log("It is a palindrome")
// } else {
// console.log("nein");
// } 

/*
// ikinci yol
function reverseString(str) {
// Step 1. Use the split() method to return a new array
var splitString = str.split(""); // var splitString = "hello".split("");
// ["h", "e", "l", "l", "o"] => ARRAY

// Step 2. Use the reverse() method to reverse the new created array
var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
// ["o", "l", "l", "e", "h"]

// Step 3. Use the join() method to join all elements of the array into a string
var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
// "olleh"

//Step 4. Return the reversed string
return joinArray; // "olleh"
}

console.log(reverseString("hello"));

*/

// ücüncü
function reverseString2(str) {
    return str.split("").reverse().join("");
    }
    console.log(reverseString2("wort")); 