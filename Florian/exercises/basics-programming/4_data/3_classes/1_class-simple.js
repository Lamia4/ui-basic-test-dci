/**
 * Klassen
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes
 * JavaScript klassen wurden 2015 eingeführt, und sind im gewissen sinne nur eine andere art Prototypen für objekte zu erstellen.
 * 
 * Was genau sind klassen?
 * Klassen sind in der Objektorientierten programmierung ein bauplan, wenn man eine reihe von ähnlichen objekten braucht.
 * Wenn wir zum beispiel eine klasse AUTO hätten, und das auto die eigenschaften farbe, marke und PS hätte, könnten wir mit eines konstruktors einer klasse immer wieder ein neues fahrzeug mit diesen eigenschaften erstellen. Im gegensatz zu objekten, wo wir das fahrzeug anlegen, und dann versuchen anderen fahrzeugen ähnliche properties zu geben.
 */

// Vergleich Objekte und Klassen
const car1 =
{
    brand: "Ford",
    model: "Kuga",
    color: "RubyRed",
    horsePower: 150
}

const car2 =
{
    brand: "Ford",
    model: "Mustang",
    color: "Black",
    horsePower: 280
}

console.log("Objekt 1", car1);
console.log("Objekt 2", car2);

/**
 * @class Car
 */
class Car
{
    brand;
    model;
    color;
    horsePower;

    /**
     * @constructor
     * @description
     * Die konstruktor-methode ist eine spezielle art methode, die benutzt wird um klassen zu initialilisieren, und existiert ein mal pro klasse.
     */
    constructor(brand, model, color = "Black", horsePower)
    {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.horsePower = horsePower || 500;
    }
}

const car3 = new Car("Bentey", "Contintental GT", "White", 680);
const car4 = new Car("Volkswagen", "Käfer", "Yellow", 55);
const car5 = new Car("Mercedes-Benz", "Motorwagen");

console.log(car3);
console.log(car4);
console.log(car5);
