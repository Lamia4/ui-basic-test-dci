//1
let a = 45;
let b = 100 ;

var check = (50 <= a && a <= 99) && (50 <= b && b <= 99) ;
console.log(check); 

//3
let c = 7;
let d = 8;
let e = 10;


//5

let x = 11;
let y = 11;
if (x + y < 80 && x + y > 50)
{
    console.log(65);
}
else{
    console.log(80);
}

//6

if ( x+y ==8 || x-y ==8)
{
    console.log(true);
}
else 
{
    console.log(false);
}

//7 Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

let statement = x == 15 || y == 15 || x+y == 15;

console.log(statement);

//8

let number1 = x % 7 == 0 || x % 11 == 0  || y % 7 == 0 || y % 11 == 0;
console.log(number1);

//9

let number2 = x+y;

if (x == y) {
    console.log(3*number2);
}
else
{
    console.log(number2);
}

//10

let number3 =  x-19;

if (x>19) {
    console.log(2*number3);
}
else {
    console.log(number3);
}

//11

let firstName = "Lamia";
let age = 33;

if (age<13) {
    console.log(firstName + " is a child.");
}
else if (age>=13 && age<20) 
     {
         console.log(firstName + " is a teenager.");
     }
     else if (age>=20 && age<30)
     {
        console.log(firstName + " is a young adult.");
     }
     else {
         console.log(firstName + " is an adult.");
     }


