// Nicht empfohlen:
// const jsonFile = require("./beispiel.json");

// console.log(jsonFile);
// console.log(jsonFile.liste);

/**
 * Eine bessere mehtode ist, wenn wir per file-system library die datei lesen, denn dann haben wir die wahl:
 * - wollen wir die datei konvertieren?
 * - wollen wir dass das program stoppt bis die datei geladen wird?
 * - wollen wir dass das programm weiter läuft, während die datei geladen wird?
 */

// wir importierten die bibliothek "fs" (file-system):
const fs = require("fs");

/**
 * @method fs.readFileSync();
 * @description die methode .readFileSync(); liest eine datei ein, und wartet mit der weitetren ausführung des programmes, bis die datei gelesen wurde.
 * @param { string } path - der pfad zur datei die wir lesen wollen
 * @returns { buffer } der inhalt der datei in bytes
 */
console.log("position", 1);

// wir lesen die datei ein:
const jsonFile = fs.readFileSync('./beispiel.json');
console.log("position", 2);

// Der komplette dateiinhalt wird in den speicher des computers geladen, das bedeutet das bei größeren dateien das lesen länger dauern kann, und das programm für eine merkbare zeit nicht weiter arbeitet. DIe gelesenen dateien können wir als eine ansammlung von bytes in der konsole sehen:
console.log(jsonFile); // <Buffer 7b 0a 20 20 20 20 22 ...

// wir konvertieren den dateiinhalt zu einem JavaScript objekt
const jsonData = JSON.parse(jsonFile);
console.log(jsonData); // { name: 'Max', nummer: 5, istValide: true, liste: [ { name: 'ich' } ] }
console.log(jsonData.name); // Max
console.log("position", 3);

console.log("1 " + "=".repeat(100));

/**
 * @method fs.readFile();
 * @description Im gegensatz zur methode .readFileSync(); blockiert die methode .readFile(); das programm nicht, sondern arbeitet sofort weiter, während es weiterhin im hintergrund an der auslesung der datei arbeitet. Die callback funktion der methode wird dann ausgeführt, wenn die datei fertig geladen wurde.
 * @param { string } path - der pfad zur datei
 * @callback function wird ausgeführt wenn die datei fertig geladen wurde.
 * @param { object } error - der fehler der geworfen wird, wenn die datei nicht geladen werden kann
 * @param { buffer } data - der inhalt der datei in bytes
 */

 // um zu überprüfen, welcher teil des codes ausgeführt wird, erstellen ein paar console.log(); in unserem code:

console.log("position", 1);

// fang an die datei zu laden
fs.readFile("./beispiel.json", function(error, data)
{
    console.log(data)
    console.log("position", 2);
    console.log(JSON.parse(data));

    // fertig mit dem datei laden
});

console.log("position", 3);

// wir sehen dass das programm weiter arbeitet, während es die datei einliest, dies ermöglicht zum beispiel das anzeigen eines ladebalkens, der vorm einlesen der datei auf true gesetzt, und nach ausführen des callbacks auf false gesetzt wird.

console.log("2 " + "=".repeat(100));

// unsere datei ist erst zu diesem zeitpunkt eingeladen.

// Da die methode uns einen inhalt zurpck gibt, auch wenn die datei fehler beinhaltet, sollten wir in solchen fällen try/catch benutzen.

fs.readFile('./beispiel.json', function(error, data)
{
    if(error) return;
    
    let newData;

    // prüft ob die daten ankamen
    if(data)
    {
        try
        {
            newData = JSON.parse(data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    console.log(newData);
});

console.log("2 " + "=".repeat(100));

// Andere möglichkeit für try/catch
let fileContents;
try
{
    fileContents = JSON.parse(fs.readFileSync('./d/beispiel_kaputt.json'));
}
catch (err)
{
    console.log(err)
}
console.log("beispiel:", fileContents);
