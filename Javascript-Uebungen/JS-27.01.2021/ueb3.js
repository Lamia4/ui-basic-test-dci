//1 Store Mark's and John's mass and height in variables.

let heightMark = 80;
let massMark = 1.80;

let heightJohn = 67;
let massJohn = 1.70;

//2 Calculate both their BMIs and store their BMIs in variables.

let bmiMark = massMark / (heightMark*2);
let bmiJohn = massJohn / (heightJohn*2);
console.log(bmiMark);

//3 Create a boolean variable containing information about whether Mark has a higher BMI than John.

statement = bmiMark >  bmiJohn;
console.log(statement);


//4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

if (bmiMark > bmiJohn) {
    console.log("BMI von Mark ist größer als von John.");
}
else if (bmiJohn > bmiMark) {
    console.log("BMI von John ist größer.");
}
else {
    console.log("BMI ist gleich.");
}


//5 Create an if statement which prints the name and BMI of the person with the highest BMI.



switch (false) {
    case 5 >= 4:
      console.log("yessssssssss");
      break;
    case 4 >= 5:
      console.log("Noooooooooooooo");
      break;
    default:
      console.log("Noone");
  }


  //andere Aufgabe read me on the block

  const determiner = 100;
  const x = (determiner >= 0) ? 'Greater or equal to 0' : 'Less than 0';
  console.log(x);

//aufgabe 2

let updater;

if (determiner >= 0)
{
    updater = 'Greater or equal to 0';
    const message = 'Positive integer';
    console.log(message);
}
else
{
    updater = 'Less than 0';
}

console.log(updater);