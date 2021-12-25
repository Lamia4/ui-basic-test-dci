//1. kürzeste Variante

myArr = [6, 4, 20, 25, 19, 22, 7, 9, 30, 33];

function findSmallest() {
    return Math.min(...myArr);
}

console.log(findSmallest(myArr));

// andere Möglichkeit iterate function



function findSmallest2() {
    var kleinsteNummer = myArr[0];
    for (let i = 1; i < myArr.length; i++) {
        if (kleinsteNummer >= myArr[i]) {
            kleinsteNummer = myArr[i];
        }
    }
    return kleinsteNummer;
}
console.log("unsere Lösung:")
console.log(findSmallest2(myArr));

// apply () function


function findSmallest3() {
    return Math.min.apply(2, myArr);


    //es ist egal, ob da null steht oder ob da irgendetwas anderes steht. es muss da irgendwas stehen, weil es sich normalerweise auf mehrere argumente bezieht das apply. ein apply() kann auch eine array als argument nehmen. das gegenstück dazu wäre call ()
}

console.log(findSmallest3(myArr));


function findSmallest4() {
    return
}

// recursive function

var factorial = function (number) {
    if (number === 0) { // terminal case
        return 1;
    } else { // block to execute
        return (number * factorial(number - 1));
    }
};
console.log(factorial(6))


// 2 verschiedene (ähnliche) Arten von Funktionen:

// iterate function

// for loop, while, do.. while
// array methodes forEach, map, filter, reduce

// recursive function
//base case 
// recursion




var person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}
var result = person.fullName.apply(person1, ["Oslo", "Norway"]);
console.log(result);



//2. Aufgabe: Function erstellen ohne Remainder und ohne %



function remainder (a, b) {
   
    console.log(a-Math.floor(a/b)*b);
}

remainder(11,3);