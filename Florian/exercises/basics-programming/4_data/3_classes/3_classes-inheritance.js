
class Animal
{
    constructor(name, species)
    {
        this.name = name;
        this.species = species;
    }

    eat()
    {
        console.log(`${ this.name } is a ${ this.species } and is eating...`)
    }

    sleep()
    {
        console.log(`${ this.name } is sleeping`); 
    }
}

class Bird extends Animal
{
    constructor(name, species, canFly)
    {
        super(name, species); // benötigen wir um die keys der elternklasse zu erhalten.

        this.canFly = canFly;
    }

    fly()
    {
        console.log(`${ this.name } ${ this.canFly ? 'can fly' : 'can not fly' }`);
    }

    sleep()
    {
        super.sleep();
        console.log(`${ this.name } is dreaming...`);
    }
}

// const rudy = new Bird("Rudy", "Parrot", true);
// console.log(rudy);

// rudy.eat(); // Rudy is a Parrot and is eating...
// rudy.fly(); // Rudy can fly
// rudy.sleep(); // Rudy is sleeping // Rudy is dreaming...

module.exports = Animal;
