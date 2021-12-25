//1 Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

var isDog = "Freddy";

switch (isDog) {
    case "Freddy":
        console.log("pat,pat");
        break;
    default:
        console.log("find me a dog to pat!");
        break;

}

//2 Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

var speedCheck = 50;
var x = 30;

switch (true) {
    case x > speedCheck:
        console.log ("you're going too fast!");
        break;
    case x < speedCheck:
        console.log ("You're driving below the speed limit, Oma.");
        break;
    case x == speedCheck:
        console.log ("Your speed limit is perfect!");
        break;
}

//3 Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

var age = 23;
var y = 16

switch (true) {
    case age < y:
        console.log ("serve butter beer");
        break;
    default:
        console.log ("serve beer");
        break;
}

//4 Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

var isStudent = 5;
var z = 12;

switch (true) {
    case isStudent == 5:
        console.log ("Ticket costs €5,00.");
        break;
    case isStudent < z:
        console.log ("Ticket costs €12,00.");
        break;
}


//5 Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".

//6 Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.

// 30
// 939
// 40.9