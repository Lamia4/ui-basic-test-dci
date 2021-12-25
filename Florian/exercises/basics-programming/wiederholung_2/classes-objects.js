// Unsere Klasse
class GalipsClass
{
    constructor()
    {
        this.name = "Galip";
        this.lastName = "Test";
    }

    berechnung()
    {
        return 5 + 5;
    }
}

// Wir erstellen eine instanz unserer klasse
const neueKlasse = new GalipsClass();

console.log(neueKlasse); // GalipsClass { name: 'Galip' }

console.log(neueKlasse.berechnung()); // 10

neueKlasse.size = 20;

// Wir fügen der instanz eine methode hinzu, 
// alle anderen instanzen und die klasse haben diese methode nicht:
neueKlasse.testFunktion = function()
{
    return this.size;
}

console.log(neueKlasse);
console.log(neueKlasse.testFunktion());

// Wir fügen ALLEN instanzen und der Klasse eine methode hinzu:
GalipsClass.prototype.getFirstName = function()
{
    return this.name;
}

console.log(neueKlasse.getFirstName());

// Wir fügen der Klasse eine statische methode hinzu:
GalipsClass.neueMethode = function()
{
    return GalipsClass.name;
}

// Statische methode:
Object.keys();

// Methode in der instanz:
const neueKlasse = new GalipsClass();
neueKlasse.testFunktion();
