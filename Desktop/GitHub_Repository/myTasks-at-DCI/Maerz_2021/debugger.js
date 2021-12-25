
/*

let testNummer = 1;
let testString = "Hallo";

debugger; //man kann selbst den breakpoint setzen zum debuggen

console.log("Wir sind hier");

testNummer = 5;

debugger;

console.log("Wir sind jetzt hier");

testNummer = 9;

debugger;

*/

const fruits = [ "banana", "cherry", "orange"];

debugger;

class FruitBasket
{
    constructor(fruits, owner)
    {
        this.fruits = fruits;
        // Was ist this?
        // Welche Parameter übergeben wir dem instructor?
        debugger;
    }
    cycleFruits ()
    {
        debugger;

        this.fruits.forEach((fruit, i) =>
        {
            //Welche Frucht ist selektiert?
            // an welchem Index sind wir gerade?
            // wie sieht die array "fruits" eigentlich aus?
            debugger;
            if (fruit === "orange")
            {

            const tempString = "I want an " + fruit;

            // ist tempString angelegt
            debugger;
            console.log(tempString);

            }
        })
    }
}

const fruitBasket = new FruitBasket(fruits);

fruitBasket.cycleFruits();