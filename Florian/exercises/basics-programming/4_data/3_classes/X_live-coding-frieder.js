//Klassen sind Baupläne von Objekten, um diese wieder zu verwenden
class Car
{
     /**
     * Statische Attribute/Methoden gelten für die Klasse selbst
     * Statische Attribute/Methoden werden ohne Instanzierung einer Klasse aufgerufen und sind über eine erzeugte Instanz nicht aufrufbar.
	 * Beispiel Object.assign();
     */
    static #manufacturerNumber = 0; // counter
    #instancedManufacturerNumber;
    // deklation mit zuweisung, da die verwendung von drive() => #setm()/setKmGobal() zum fehler führt. undefinied += wert
    kmGlobal = 0; // Beispiel, wenn global
    #km = 0; // Wert, den wir kontrolliert verändern wollen, aber vor Manipulation schützen müssen. private
             // private km = 0;
    /**
     * Der Konstructor ist essentiell notwendig, um das Objekt zu erstellen/instanzieren.
     */
    constructor(number)
    {
        if(!isNaN(Math.abs(number)))
        {
           this.kmGlobal = number;
           this.#km = number;
        }
        this.#instancedManufacturerNumber = ++Car.#manufacturerNumber;
    }
    /**
     * public action method
     * @param {number} number zurückgelegte Strecke
     */
    drive(number)
    {
        if(!isNaN(Math.abs(number)))
        {
            number = Math.abs(number);
            this.#setKm(number);
            this.setKmGlobal(number);
        }
    }
    getManufacturerNumber()
    {
        return this.#instancedManufacturerNumber;
    }
    // setter Method private
    #setKm(number)
    {
        this.#km += number;
    }
    // setter Method public
    setKmGlobal(number)
    {
        this.kmGlobal += number;
    }
    /**
     * public getter method immer public
     * for private attribute
     */
    getKm()
    {
        return 'car ' + this.getManufacturerNumber() + ' Km: ' + this.#km;
    }
    /**
     * public getter method
     */
    getKmGlobal()
    {
        return this.kmGlobal;
    }
}
const car = new Car(50);
const objekt = {};
console.log('car1', car);
console.log(objekt);
const car2 = new Car(75);
console.log('car2', car2);
car.drive(-5);
console.log(car2.getKm());
console.log(typeof objekt);
console.log(typeof car);
//Zum Typenververgleich zwischen Objekten nutzen wir instanceOf
console.log(objekt instanceof Car); // object === Car false
console.log(car instanceof Car);    // car === Car    true
console.log('='.repeat(50));
console.log(car.getKm())
car.drive(50);
console.log(car.getKmGlobal());
console.log(car.getKm());
console.log('='.repeat(10), 'Manipulation Atrribut global', '='.repeat(10));
// Manipulation Attribut global;
car.kmGlobal = 5;
console.log('kmGlobal = 5', car.kmGlobal);
car.setKmGlobal(-3);
console.log('setKmGlobal(-3)',car.getKmGlobal());
console.log('='.repeat(5), 'Manipulationsversuch Atrribut private', '='.repeat(6));
// Manipulationsversuch global auf private
console.log('Syntax-Fehler, da der Zugriffsversuch von ausserhalb der Klasse stattfindet')
//console.log(car.#km);
//console.log(car.#setKm());
