

class GalipsClass 
{
    constructor ()
    {
        this.name = "Galip";
    }

    berechnung()
    {
        return 5+5;
    }
}

const neueKlasse = new GalipdClass();

console.log(neueKlasse); // {name : 'Galip'}

console.log(neueKlasse.berechnung());

neueKlasse.testFunktion() = function () // nur für die klasse wird eine methode hinzugefügt
{
    return this.size;
}

GalipsClass.prototype.getFirstName = function ()  //für neueKlasse eine function hinzufügen, also nur für die bzw. alle instanzen
{
    return this.name;
}


GalipsClass.neueMethode = function()
{
    return GalipsClass.name;
}
