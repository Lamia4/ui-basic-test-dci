
class Tier
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    makeSound(sound)
    {
        return sound;
    }
}

const hund = new Tier("Fido", 2);
const hund2 = new Tier("Bello", 5);

hund.beine = 4;
console.log(hund.makeSound("wuff"));

hund.gassi = function()
{
    return "Ich möchte gassi gehen";
}

// console.log("Klasse", Tier);
console.log("hund", hund);
console.log("hund", hund.gassi());
console.log("hund2", hund2.gassi());
