

class Tier 
{

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    makeSound(sound) 
    {
        return sound;
    }
}

const hund = new Tier("Frido", 2);

hund.beine = 4;
