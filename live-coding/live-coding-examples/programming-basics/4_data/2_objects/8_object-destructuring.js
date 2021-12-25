/**
 * Destructuring
 * @description
 * Destructuring bedeutet das wir elemente aus Arrays und Objekten extrahieren, also herausnehmen können.
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Destrukturierende_Zuweisung
 * @see https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f
 * @example
 * [ value, value, ... ] = [ value, value, ... ];
 * @example
 * { key, key, ... } = { key, key, ... };
 */

// Logik:
// const { a : b, c, d = 'e' } = object;
// same as variables:
// const a => b = object.a
// const c = object.c
// const d = 'e'

// Wir erstellen eine array mit werten
const rgb = [ 255, 128, 200 ];

// red, green, blue
const [ red, green, blue ] = rgb;
console.log("red:", red);
console.log("green:", green);
console.log("blue;", blue);
console.log(rgb);

console.log("=".repeat(50));

// Objekte

const userObject =
{
    firstName: "Max",
    lastName: "Mustermann"
}

// wenn wir auf der linken seite die namen der schlüssel matchen, erstellen wir damit neue variablen.
const { firstName, lastName } = userObject;
console.log(firstName, lastName);

console.log("=".repeat(50));

const fruitObject =
{
    fruit: "apple",
    color: "red"
}

// Wenn wir auf der linken seite werte zuweisen, erstellen wir variablen mit default werten.
const { fruit, color, taste = "sweet" } = fruitObject;

console.log("fruit:", fruit);
console.log("color:", color);
console.log("taste:", taste);

console.log(fruitObject);

console.log("=".repeat(50));

const carObject = 
{
    brand: "Ford",
    model: "Kuga",
    year: 2019,
    wheels:
    [
        "FrontLeft",
        "FrontRight",
        "RearLeft",
        "RearRight"
    ]
}
// Wenn wir auf elemente in einer array zugreifen wollen, benennen wir die einzelnen indexpositionen mit variablennamen.
const { brand, model, year, wheels, wheels: [ frt, frontRight, rearLeft, rearRight ] } = carObject;

console.log(brand);
console.log(model);
console.log(year);
console.log("frt:", frt);
console.log(frontRight);
console.log(rearLeft);
console.log(rearRight);

console.log(wheels);

console.log("=".repeat(50));

const countryObject =
{
    city: "Berlin",
    name: "Germany"
};

// wenn wir die vorhandenen variablen mit anders benannten variablen überschreiben wollen, geben wir den veränderten namen einfach auf der rechten seite an.
const { name: countryName, city, continent = "europe" } = countryObject;

console.log(countryName);

console.log("=".repeat(50));

let consoleName = "PlayStation";
let consoleBrand = "Sony";
let consoleYear = 2020;

console.log("Name:", consoleName);
console.log("Brand:",consoleBrand);
console.log("Year:", consoleYear);

const consoleObject =
{
    consoleName: "Xbox",
    consoleBrand: "Microsoft"
};

// Wenn wir unsere deklaration in klammern setzen, können wir die vorhandenen variablen mit den neuen werten aus dem objekt ersetzen.
({ consoleName, consoleBrand } = consoleObject);

console.log("Name:", consoleName);
console.log("Brand:",consoleBrand);
console.log("Year:", consoleYear);
