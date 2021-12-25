/**
 * @method JSON.parse();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
 * @description DIe methode .parse(); konvertiert einen string zu JSON, es ist wichtig, das dieser string die JSON syntax hat.
 * @param { string } - der JSON string den wir umwandeln wollen.
 * @returns { object } - das umgewandelte JavaScript Object
 */

// Wir erstellen eine beispielstring...
const jsonParseExample = '{ "isValid": true, "amount": 15, "name": "Max" }';

// ... und nutzen die methode JSON.parse(); um den string in ein objekt zu konvertieren:
const convertedJson = JSON.parse(jsonParseExample);

// jetzt können wir die daten aus dem json string verwenden
console.log(convertedJson); // { isValid: true, amount: 15, name: 'Max' }
console.log(convertedJson.isValid); // true
console.log(convertedJson.amount); // 15
console.log(convertedJson.name); // Max

console.log("=".repeat(100));

/**
 * @method JSON.stringify();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 * @description Die methode JSON.stringify(); konvertiert ein JavaScript objekt zu einem JSON kompatiblen string.
 * @param { object } value - Das JavaScript objekt das wir konvertieren wollen
 * @param { array } replacer - (optional) kann man eine array angeben, die auflistet welche elemente aus dem objekt übernommen werden sollen
 * @param { number } space - (optional) die anzahl von leerzeichen im string am anfang der parameter.
 * @returns { string } - der JSON kompatible string
 */

// Wir erstellen ein JavaScript objekt...
const objectExample =
{
    firstName: "Max",
    lastName: "Mustermann",
    age: 25,
    isAdmin: false
}

console.log(objectExample) // { firstName: 'Max', lastName: 'Mustermann', age: 25, isAdmin: false }

// ... und konvertieren es per .stringify(); zu einem JSON string
const convertedObject = JSON.stringify(objectExample);
console.log(convertedObject); // {"firstName":"Max","lastName":"Mustermann","age":25,"isAdmin":false}

// Erweitertes Beispiel
// in die array haben wir die daten gepackt, die wir ausgeben wollen
// als letztes haben wir eine zahl angegeben die angibt, mit wievielen leerzeichen wir einrücken wollen
// (wenn wir den spacer nutzen wollen, ohne den replacer angeben zu wollen, müssen wir den wert des replacers auf "null" setzen.)

//                        ohne replacer:     JSON.stringify(objectExample, null, 4);
const convertedObjectAdv = JSON.stringify(objectExample, [ "firstName", "age" ], 4);
console.log(convertedObjectAdv);

