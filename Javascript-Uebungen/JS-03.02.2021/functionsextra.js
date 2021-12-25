//1 Write a function, greetWorld(). Your function should have no parameters and return the string 'Hello, World!'.

function greetWorld() {
    return "Hello, World!";
}

console.log(greetWorld());

//2 The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

function canIVote(age) {
    switch (true) {
        case age >= 18:
            console.log(true);
            break;
        default:
            console.log(false);
            break;

    }
}

canIVote(19);

//3 Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.

function agreeOrDisagree(str1, str2) {
    if (str1 == str2) {
        console.log('You agree!')
    } else {
        console.log('You disagree!');
    }
}

agreeOrDisagree("Hi", "Hi");

//4 Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

function lifePhase(age) {
    if (age <= 0 || age > 140) {
        console.log("This is not a valid age!")
    } else if (age <= 3) {
        console.log("baby");
    } else if (age > 3 && age <= 12) {
        console.log("child");
    } else if (age > 12 && age <= 19) {
        console.log("teen");
    } else if (age > 19 && age <= 64) {
        console.log("adult");
    } else if (age > 64 && age <= 140) {
        console.log("senior citizen");
    } else if (age > 3 && age <= 12) {
        console.log("child");
    }
}

lifePhase(20);

//5 Write a function, finalGrade(). It should:

// take three arguments of type number
// find the average of those three numbers
// return the letter grade (as a string) that the average corresponds to
// return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100



function finalGrade(number1, number2, number3) {
    if (Number.isInteger(number1, number2, number3)) {
        var average = (number1 + number2 + number3) / 3;
        if (average >= 0 && average <= 59) {
            console.log('F');
        } else if (average >= 60 && average < 70) {
            console.log('D')
        } else if (average >= 70 && average < 80) {
            console.log('C')
        } else if (average >= 80 && average < 90) {
            console.log('B')
        } else if (average >= 90 && average < 100) {
            console.log('A')
        }
    } else {
        console.log("Yasir ist der Beste.")
    }
}

finalGrade("hi", 60, 6);
finalGrade(80, 60, 60);

//6 Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’

function reportingForDuty(rank, lastName) {
    return `${rank} ${lastName} reporting for duty!`;
}

console.log(reportingForDuty("Rank 2", "Wilhelm"));

//7 Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

// Write a function, calculateWeight(). It should:

// have two parameters: earthWeight and planet
// expect earthWeight to be a number
// expect planet to be a string
// return a number representing what that Earth-weight would equate to on the planet passed in.




function calculateWeight(earthWeight, planet) {
    switch (planet) {
        case 'Mercury':
            console.log(earthWeight);
            break;
        case 'Venus':
            console.log(earthWeight);
            break;
        case 'Mars':
            console.log(earthWeight);
            break;
        case 'Jupiter':
            console.log(earthWeight);
            break;
        case 'Saturn':
            console.log(earthWeight);
            break;
        default:
            console.log("Invalid Planet Entry");
            break;
    }

}

calculateWeight(0.378, 'Mercury');

//8 It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.

function truthyOrFalsy(x) {
    if (x = "truthy") {
        console.log("truthy");
    } else if (x = "falsy") {
        console.log("falsy");
    }
}

truthyOrFalsy("truthy");

//9 A person’s number of imaginary friends are always 33% of their total friends.

// Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.

// Since friends can only come in whole numbers, be sure to round your result before returning it.

// The JavaScript Math.round() function will come in handy. Check out the documentation here to figure out how it works.

function numImaginaryFriends(totalfriends) {
    var imaginaryfriends = Math.round(totalfriends * 33 / 100);
    return imaginaryfriends;
}

// numImaginaryFriends = (totalfriends) => return Math.round(totalfriends*33/100);

console.log(numImaginaryFriends(50))

//10 Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

// If the year is in the future, you should return a string in the following format: You will be [calculated age] in the year [year passed in]
// If the year is before they were born, you should return a string in the following format: The year [year passed in] was [calculated number of years] years before you were born
// If the year is in the past but not before the person was born, you should return a string in the following format: You were [calculated age] in the year [year passed in]

function howOld(age, year) {
    var thisyear = new Date();
    var birthday = thisyear.getFullYear() - age;
    if (year > thisyear.getFullYear()) {
        var newAge = year - birthday;
        console.log(`You will be ${newAge} in the year ${year}.`);
    }
}

howOld (33, 2025);

//11 Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

function tipCalculator (quality, total) {
    if (quality = "bad") {
        console.log("5% tip");
    } else if (quality = "ok") {
        console.log("15% tip");
    } else if (quality = "good") {
        console.log("20% tip");
    } else if (quality = "excellent") {
        console.log("30% tip");
    } else {
        console.log("18% tip");
    }
}

tipCalculator("good");

//12 Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

function toEmoticon (str) {
    switch (str) {
        case "shrug":
            console.log('|_{"}_|');
            break;
    }
}

//Array Aufgabe 

// Create a function which takes an array of number arr and returns inverted array.
// invertArray([1, 2, 3, 4, 5])) ➞ [-1, -2, -3, -4, -5]

// invertArray([1, -2, 3, -4, 5] ➞ [-1, 2, -3, 4, -5]

// invertArray([]) ➞ []

arr = [0,1,2,3]

function invertArray(arr){
    var abc = [];
      for (let i=0; i < arr.length; i++){
          if(arr[i] == 0) {
          abc.push(arr[i]);
          
      } else {
        abc.push(arr[i]*(-1));
      }
      }
          return abc;
      
  }

  console.log(invertArray(arr))

  