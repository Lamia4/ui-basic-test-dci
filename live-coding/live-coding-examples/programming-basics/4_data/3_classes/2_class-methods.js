
class User
{
    #firstName;
    #lastName;
    fullName;

    constructor(firstName, lastName)
    {
        this.#firstName = firstName;
        this.#lastName = lastName;

        this.fullName = this.#createFullName();
    }

    // um auf unsere werte zuzugreifen, können wir in javascript zwar einfach auf die werte zugreifen, aber sauberer ist es methoden fürs editieren, und anzeigen von werten zu schreiben. JavaScript besitzt auch sogenannte "getter/setter".

    // Vorname ausgeben
    get firstName()
    {
        return this.#firstName;
    }

    // Vorname ändern
    set firstName(input)
    {
        this.#firstName = input;
    }

    // Vorname ausgeben
    getFirstName()
    {
        return this.#firstName;
    }

    // Vorname ändern
    setFirstName(input)
    {
        this.#firstName = input;
    }

    #createFullName()
    {
        return this.#firstName + " " + this.#lastName;
    }

    getFullName()
    {
        return this.fullName;
    }
}

const testNutzer = new User("Max", "Mustermann");

console.log(testNutzer)

testNutzer.firstName = "Katrin";
console.log(testNutzer.firstName);

testNutzer.setFirstName("Herbert");
console.log(testNutzer.getFirstName());

console.log(testNutzer.getFullName());

const testNutzer2 = new User("Lamia", "Elmas");
console.log(testNutzer2);

console.log("=".repeat(50));

/**
 * @class Fruit
 * @description
 * Basisklasse für Früchte
 * @example
 * const Apple = new Fruit("Apple", "Red", "Sweet");
 */
class Fruit
{
    /**
     * @constructor
     * @param { string } name
     * @param { string } color
     * @param { string } taste
     */
    constructor(name, color, taste)
    {
        this.name = name;
        this.color = color;
        this.taste = taste;
    }

    /**
     * @method getName();
     * @description Gibt den Namen der Frucht zurück.
     * @returns { string }
     */
    getName()
    {
        return this.name;
    }

    /**
     * @method setName();
     * @description Legt die Farbe der Frucht fest
     * @param { string } name 
     */
    setName(name)
    {
        this.name = name;
    }

    /**
     * @method getColor();
     * @description Gibt die Farbe der Frucht zurück.
     * @returns { string }
     */
    getColor()
    {
        return this.color;
    }

    /**
     * @method setColor();
     * @description Legt die Farbe der Frucht fest
     * @param {string } color 
     */
    setColor(color)
    {
        this.color = color;
    }

    /**
     * @method getTaste();
     * @description Gibt den Geschmack der Frucht zurück.
     * @returns { string }
     */
    getTaste()
    {
        return this.taste;
    }

    /**
     * @method setName();
     * @description Legt den Namen der Frucht fest
     * @param {string } taste 
     */
    setTaste(taste)
    {
        this.taste = taste;
    }

    /**
     * @method eat();
     * @description gibt einen string aus
     * @returns { string }
     */
    eat()
    {
        return `This ${ this.color } ${ this.name } is very ${ this.taste }`;
    }
}

const apple = new Fruit("Apple", "Red", "Sweet");
console.log(apple.eat()); // This Red Apple is very Sweet

apple.setColor("Green");

console.log(apple.eat()); // This Green Apple is very Sweet

const lemon = new Fruit("Lemon", "Yellow", "Sour");
console.log(lemon.eat()); // This Yellow Lemon is very Sour
