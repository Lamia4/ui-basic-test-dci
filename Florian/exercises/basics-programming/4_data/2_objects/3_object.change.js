// erstellen wir einen neuen user um seine daten zu ändern:

const user = 
{
    firstName: "Max",
    lastName: "Mustermann"
}

console.log(user);

console.log("=".repeat(50));

// werte innerhalb eines objektes können wir ganz einfach ändern:

user.firstName = "Henry";

// Natürlich kann der schlüsselname auch woanders herkommen, zum beispiel aus einer variable:
const roleState = "isAdmin";

user[roleState] = true;

console.log(user);

console.log("=".repeat(50));

// wir können genau auf die gleiche weise auch neue werte zu einem objekt hinzufügen:
user.age = 25;
user.userName = "MusterUser1234";

console.log(user);

// Wie man sieht sind age und userName jetzt teil von user.

console.log("=".repeat(50));

// löschen können wir werte mit dem delete keyword, dieses existiert spezifisch für objekte.
delete user.age;
console.log(user);

console.log("=".repeat(50));

// wenn wir ein objekt in eine variable legen, erstellen wir keine kopie, 
// sondern arbeiten direkt mit dem objekt - dies nennt man "mutable".
const currentUser = user;
currentUser.firstName = "James";

// wenn wir also jetzt currentUser ausgeben, ist dort der firstName James.
console.log(currentUser);

// Bei user aber auch.
console.log(user);

// Mit dem spread operator können wir die inhalte unserer objektes in ein neues objekt schieben, und überschreiben so nicht unser original.
const newUser =
{
    ...user
}

console.log(newUser);
newUser.firstName = "Sven";

console.log(newUser.firstName);
console.log(user.firstName);
