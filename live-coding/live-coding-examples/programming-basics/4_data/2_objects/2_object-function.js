// In Objekten können wir alle möglichen werte speichern, auch methoden, 
// in denen wir mit dem keyword "this" auf die werte innerhalb des object-blocks zugreifen können.
const user =
{
    firstName: "Max",
    lastName: "Mustermann",
    age: 25,
    country: "Germany",
    isAdmin: false,
    fullName()
    {
        return this.firstName + " " + this.lastName;
    },
    isAdult(adultAge)
    {
        return this.age > adultAge;
    }
}


// Innerhalb einer funktion steht "this" für den sogenannten "besitzer" des schlüssels den wir auslesen wollen.
// this.firstName ist also ein schlüssel des objektes, auf das wir zugreifen wollen.

// wir können jetzt auf die funktion zugreifen, wenn wir sie, wie die anderen werte, einfach aufrufen.
console.log(user.fullName());
console.log(user.isAdult(18));

// const fullName = function()
// {
//     return "test";
// }