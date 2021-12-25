/**
 * Object.assign();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * Die Methode Object.assign(); kopiert properties von einem Objekt und fügt sie einem zielobjekt hinzu.
 * @param { object } Das Zielobjekt
 * @param { object } Das input Objekt
 * @returns { object } Das veränderte Zielobjekt
 */

 // Wir legen 2 objekte an, ein zielobjekt und ein anderes Objekt
const zielObject = { a: 1, b: 2 };
const anderesObject = { c: 3, d: 4 };

console.log("Original ZielObjekt:", zielObject);

// Wir nutzen Object.assign(); um beide objekte zu verbinden
const newObject = Object.assign(zielObject, anderesObject);

// Das zielObjekt, und unsere neue variable haben den gleichen inhalt
console.log("Neue kopie von zielObjekt:", newObject);
console.log("Verändertes zielObjekt:", zielObject);

// Wir legen noch ein objekt an
const nochEinObject = { a: 5, d: 2, e: "Sugar" };

// Wenn wir jetzt das neue objekt mit unserem zielobjekt verbinden, überschreiben wir vorhandene werte.
const newNochEinObject = Object.assign(newObject, nochEinObject);
console.log("zielObject:", zielObject);
console.log("newObject:", newObject);

console.log("=".repeat(50));

/**
 * Object.entries();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * Die Methode Object.entries(); gibt jedes keys und values paar der properties eines objektes als array zurück.
 * @param { object } Das objekt, dessen properties wir auslesen wollen
 * @returns { Array } Eine neue Array
 */
const objectEntries = Object.entries(zielObject);
console.log(objectEntries);

// [ 
//     [ 'a', 5 ], 
//     [ 'b', 2 ],
//     [ 'c', 3 ], 
//     [ 'd', 2 ], 
//     [ 'e', 8 ]
// ]

// .forEach((eintrag, i) => {})

// Wir können mit einem forEach loop alle keys und value ausgeben.
objectEntries.forEach(([ key, value ]) =>
{
    console.log(key, value);
});

console.log("=".repeat(50));

/**
 * Object.fromEntries();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 * Im gegenteil zu Object.entries(); erstellt die Methode Object.fromEntries(); auf basis von einer Array im gezeigten format mit keys und values ein neues Object.
 * @param { array } Die array zur erstellung des objektes
 * @returns { object }
 */
const testArray = 
[
//   key:  value:
    [ "a", true ], 
    [ "b", { test: 5 } ]
];

console.log("testArray:", testArray);

const newObjectFromEntries = Object.fromEntries(testArray);
console.log("newObjectFromEntries:", newObjectFromEntries);

console.log("=".repeat(50));

/**
 * Object.seal();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
 * @description
 * Die Methode Object.seal(); sorgt dafür das keine neuen properties mehr zu einem Objekt hinzufügt oder von einem objekt gelöscht werden können.
 * @param { object } 
 * @returns { object }
 */
const sealObject = 
{
    firstName: "Max",
    lastName: "Mustermann"
}

console.log(sealObject);

// Wir fügen "age" hinzu...
sealObject.age = 25;

// ... und geben das veränderte objekt aus
console.log(sealObject);

// wir "versiegeln" das objekt
Object.seal(sealObject);

// wir versuchen "country" hinzuzufügen
sealObject.country = "Germany";

// wir könnnen die werte immernoch ändern
sealObject.age = 18;

// wir sehen das "country" nicht übernommen wurde
console.log(sealObject);

/// wir versuchen "age" zu löschen ...
delete sealObject.age;

// ... und sehen das "age" immernoch da ist.
console.log(sealObject);

console.log("=".repeat(50));

/**
 * Object.isSealed();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
 * Die Methode Object.isSealed(); prüft ob ein object "sealed" ist, und gibt einen boolean zurück 
 * @param { object }
 * @returns { boolean }
 */
const sealTestObject = { name: "Sven" };

console.log("sealTestObject", Object.isSealed(sealTestObject));
console.log("sealObject", Object.isSealed(sealObject));

console.log("=".repeat(50));

/**
 * Object.freeze();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 * @description
 * Die Methode Object.freeze(); "friert" ein objekt ein, was bedeutet es kann nicht mehr verändert werden.
 */
const freezeObject =
{
    firstName: "James",
    lastName: "Bond"
}

console.log("freezeObject", freezeObject);

// Wir ändern den wet von lastName ...
freezeObject.lastName = "Steward";

// ... und sehen, das die änderung funktioniert hat:
console.log("freezeObject", freezeObject);

// Wir frieren das objekt ein ...
Object.freeze(freezeObject);

// Wir fügen "age" hinzu...
freezeObject.age = 25;

// ... und ändern den wert von lastName noch einmal:
freezeObject.lastName = "Dean";

// wir sehen, das der wert sich nicht verändert hat
console.log("freezeObject", freezeObject);

console.log("=".repeat(50));

/**
 * Object.isFrozen();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
 * Die Methode Object.isFrozen(); prüft ob ein object "frozen" ist, und gibt einen boolean zurück
 * @param { object }
 * @returns { boolean
 */
console.log("is freezeObject frozen?",Object.isFrozen(freezeObject));

// Unterschied zwischen Object.seal(); und Object.freeze();
// Vorhandene Eigenschaften in Objekten, die mit Object.seal(); versiegelt wurden, können geändert werden. Vorhandene properties in Objekten, die mit Object.freeze(); eingefroren wurden, werden unveränderlich gemacht.

console.log("=".repeat(50));

/**
 * Object.isExtensible();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
 * @description
 * Die Methode Object.isExtensible(); prüft ob ein objekt veränderbar ist, ob es also "frozen" oder "sealed" ist und gibt einen boolean zurück.
 * @param { object }
 * @returns { boolean }
 */
const extensibleObject =
{
    firstName: "Bilbo",
    lastName: "Baggins"
}
console.log("ist extensibleObject veränderbar?", Object.isExtensible(extensibleObject));
console.log("ist sealObject veränderbar?", Object.isExtensible(sealObject));
console.log("ist freezeObject veränderbar?", Object.isExtensible(freezeObject));

console.log("=".repeat(50));

/**
 * Object.defineProperty();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * @description
 * Die Methode Object.defineProperty(); erstellt oder verändert eine property in einem Objekt. 
 * @param { object } obj - Das Objekt das wir verändern wollen
 * @param { string } name - Name der property
 * @param { object } value - Der wert oder die werte den die property übernehmen soll
 * @returns { object }
 */
const user =
{
    firstName: "Max",
    lastName: "Mustermann",
    country: "Germany"
}

console.log(user);

// Wenn wir eine property ändern wollen, können wir dies direkt auf dem objekt machen.
Object.defineProperty(user, "country", { value: "Russia" });
console.log(user);

// Wenn wir eine property hinzufügen wollen, können wir einige optionen angeben:
// - enumerable = die property wird in der anzeige übernommen oder nicht
// - writable = die property ist überschreibbar/veränderbar oder nicht
Object.defineProperty(user, "userName",
{
    value: "TestUser1234",
    enumerable: true,
    writable: true
});

console.log(user);

user.userName = "NewTestUser";

console.log(user);
