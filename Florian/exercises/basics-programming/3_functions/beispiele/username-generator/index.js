const fs = require('fs');
const path = require('path');

// Benutzernamen-Generator
// Beispiel: ShinySunflower55555 oder FlyingAutomobile34567 oder BeautifulCheesecake44567

// getValues - Eine funktion um die werte aus der JSON datei zu ziehen.
function getValues()
{
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

    return json;
}

// createRandomNumber - Eine funktion um die nummer hinter dem benutzernamen zu generieren.
function createRandomNumber(minNumber, maxNumber)
{
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

// capitalizeString - Eine funktion mit der wir den ersten buchstaben des jeweiligen wortes groß schreiben.
function capitalizeString(word)
{
    if(word === undefined || word.length === 0)
    {
        return "Default";
    }

    const wordStart = word.charAt(0).toUpperCase();
    const wordRest = word.substring(1).toLowerCase();

    return wordStart + wordRest;
}

// createRandomUserName - Eine funktion mit der wir den benutzernamen generieren und auf die ergebnisse der anderen funktionen zugreifen.
function createRandomUserName(maxNumber = 0)
{
    const words = getValues();
    
    const adj = words.adjs[Math.floor(Math.random() * (words.adjs.length - 1))];
    const noun = words.nouns[Math.floor(Math.random() * (words.nouns.length - 1))];
    const number = createRandomNumber(10000, maxNumber);

    return `${ capitalizeString(adj) }${ capitalizeString(noun) }${ maxNumber !== 0 ? number : '' }`;
}

// username - eine variable in der wir den benuzernamen speichern und dann per console.log ausgeben.

// exportieren der funktion um sie in einer anderen datei zu nutzen.
exports.createUsername = (maxNumber) =>
{
    return createRandomUserName(maxNumber);
}
