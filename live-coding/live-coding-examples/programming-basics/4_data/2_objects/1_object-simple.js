/**
 * Ein Objekt in JavaScript ist eine sammliung von werten, die bearbeitet und ausgegeben werden können
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

 // Als beispiel stellen wir uns mal ein auto vor, ein auto hat werte wie 
// - Hersteller, Name, Farbe, Gewicht, Pferdestärke
const manufacturer = "Ford";
const model = "Kuga";
const color = "RubyRed";
const weight = 1760;
const horsePower = 150;

// Diese Werte können wir ausgeben:
console.log(model);

console.log("=".repeat(50));

// Allerdings können wir mit geschwungenen klammern auch objekte anlegen, in die wir unsere werte einfügen:
// Wir geben immer einen namen (der sogenannte schlüssel, oder key) und einen wert, der sogenannnten "property" an, wie in JSON (JavaScript Object Notation):
const car =
{
    manufacturer: "Ford",
    model: "Kuga",
    color: "RubyRed",
    weight: 1760,
    horsePower: 150,
    isDiesel: false,
    doors: [
        "FrontLeft",
        "FrontRight",
        "RearLeft",
        "RearRight",
        "Trunk"
    ],
    wheels: 
    {
        amount: 4,
        size: 18
    }
}

// wir können uns das objekt ausgeben und sehen die verschiedenen informationen aufgelistet in der konsole:
console.log(car);

// Auf die werte innerhalb des objekts können wir jetzt ganz einfach zugreifen:
// Entweder, ähnlich wie bei Arrays, mit eckigen klammern und dem namen der information:
console.log(car.doors[4]);

const suchString = "weight";
console.log(car[suchString]);

console.log(car.wheels["amount"]);

// Oder wie bei methoden, mit dem namen direkt hinter einem punkt, autocomplete zeigt es uns sogar an:
console.log(car.wheels.amount);

const car2 =
{
    manufacturer: "DMC",
    model: "Delorean",
    color: "SpaceGray",
    weight: 1500,
    horsePower: 120,
    isDiesel: false,
    doors: [
        "FrontLeft",
        "FrontRight",
        "RearLeft",
        "RearRight"
    ],
    wheels: 
    {
        amount: 4,
        size: 16
    }
}

console.log("=".repeat(50));

console.log(car.model);
console.log(car2.model);

console.log("=".repeat(50));

// Ein anderes beispiel wäre zum Beispiel ein Benutzer, oder User.
const user = 
{
    firstName: "Max",
    lastName: "Mustermann",
    age: 25,
    country: "Germany",
    isAdmin: false
}

console.log(user);

// um die vorhandenen keys eines objektes aufzulisten, 
// können wir das Keys keyword von Object nutzen, dies gibt uns eine array mit den keys aus.
console.log(Object.keys(user));

// genau auf die selbe weise können wir auch die werte auslesen, mit values.
console.log(Object.values(user));

// undefinierte properties geben undefined zurück
console.log(user.keys);

// Wir können werte innerhalb unserer array mit den dem datentyp zugehörigen methoden behandeln.
console.log(user.firstName.toLowerCase());