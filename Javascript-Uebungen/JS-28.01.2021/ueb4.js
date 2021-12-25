//1

var color = "blue";

switch (color) {
    case "red":
    console.log("This is red.");
    break;
    case "blue":
    console.log("This is blue.");
    break;
    case "green":
    console.log("This is green.");
    break;
    case "yellow":
    console.log("This is yellow.");
    break;
    default:
    console.log("no color.");
    break;
}

//2 Create a switch statement that prints different comments depending on a grade.

var grade = 1;

switch (grade) {
    case 1:
    console.log("Hello");
    break;
    case 2:
    console.log("Hi");
    break;
    case 3:
    console.log("HMerhaba");
    break;
    }
    
//3 Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

var fruits = "pineapple";

switch (fruits) {
    case "banana":
    console.log("banana");
    break;
    case "orange":
    console.log("orange");
    break;
    case "strawberry":
    console.log("strawberry");
    break;
    case "pineapple":
    console.log("pineapple");
    break;
}

//4 If percentageComplete is below 30, print "Still a long way to go".
// If the percentageComplete is between 30 and 50, print "Slowly getting there".
// If percentageComplete is between 51 and 80, print "You can do it!".
// If percentageComplete is between 81 and 99, print "This is the last push!".
//If percentageComplete is 100, print "You're there. Well done!".

var percentage = 57;

switch (true) {
    case percentage < 30:
        console.log("Still a long was to go.");
        break;
}