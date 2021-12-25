
const divider = (inputString) => console.log("\n" + inputString + " " + "=".repeat(50)) 

const stringArray = [ "A", "B", "C" ];
const incompleteArray = [ "A", , "C" ];

divider("for");

/**
 * for
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for
 * @description
 * for erstellt einen loop anhand von 3 statements
 * - startposition
 * - kondition
 * - iterator
 * und führt jeden durchlauf den inhalt des code-blocks aus.
 * @example
 * for(let i = 0; i < [ array ].length; i++) {}
 */
for (let i = 0; i < stringArray.length; i++)
{
    console.log(stringArray[i]);
}

for (let i = 0; i < incompleteArray.length; i++) {
    console.log(incompleteArray[i]);
}

divider("for/in");

/**
 * for/in
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for...in
 * @description
 * Das for/in statement arbeitet in jedem loop mit dem aktuellen index der array.
 * For/in überspringt leere werte.
 * @example
 * for(let i in [ array ]) {}
 */
for(index in stringArray)
{
    console.log("stingArray[]:", stringArray[index], "- index: " + index);
}

for(index in incompleteArray)
{
    console.log("incompleteArray[]:", incompleteArray[index], "- index: " + index);
}

divider("for/of");

/**
 * for/of
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for...of
 * @description
 * Das for/of statement arbeitet in jedem loop direkt mit dem aktuellen wert.
 * Bei einem leeren wert gibt es undefined zurück.
 * @example
 * for(value of [ array ]) {}
 */
for(element of stringArray)
{
    console.log("stringArray[]: ", element);
}

for(element of incompleteArray)
{
    console.log("incompleteArray[]: ", element);
}

divider(".forEach();");

/**
 * @method .forEach();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * @description
 * .forEach(); führt für jeden wert in einer Array eine funktion durch und überspringt leere elemente.
 * @example
 * [ array ].forEach(function(value, i) {]});
 * @returns { undefined }
 */
stringArray.forEach((element, i) =>
{
    console.log("stringArray[]: ", element, i);
});

incompleteArray.forEach((element, i) =>
{
    console.log("incompleteArray[]: ", element, i);
});
