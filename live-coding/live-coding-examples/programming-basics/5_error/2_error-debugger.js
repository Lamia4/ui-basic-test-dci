
// Das debugger; statement setzt einen manuellen breakpoint in unserem code.
// debugger;

// let testNummer = 1;
// let testString = "Hallo Welt!";

// debugger;

// console.log("wir sind hier");
// testNummer = 5;

// debugger;

// console.log("wir sind jetzt hier");
// testNummer = 9;

// debugger;

const fruits = [ "Banana", "Cherry", "Orange", "Apple", "Strayberry" ];

// Wie sieht die array "fruits" eigentlich aus?
debugger;

class FruitBasket
{
    constructor(fruits, owner)
    {
        this.fruits = fruits;

        // Was ist this?
        // Welche parameter übergeben wir an den constructor?
        debugger;
    }

    cycleFruits()
    {
        // Was ist this?
        debugger;

        this.fruits.forEach((fruit, i) =>
        {
            // Welche frucht ist gerade selektiert?
            // An welchem index sind wir gerade?
            debugger;

            if(fruit === "Orange")
            {
                const tempString = "I want an " + fruit;

                // ist tempString angelegt?
                debugger;

                console.log(tempString);
            }
        });
    }
}

const fruitBasket = new FruitBasket(fruits);

fruitBasket.cycleFruits();
