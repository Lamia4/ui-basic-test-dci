
// Eine variable die wir innerhalb einer funktion anlegen, nennt sich "Lokale variable" und ist nur in dessen code block nutzbar.
function showMessage()
{
    const message = "Ich bin eine lokale variable";
    
    console.log(message);
}

showMessage();

console.log("=".repeat(50));

// Eine funktion kann auf externe variablen zugreifen.
let userName = "Max";

function welcomeMessage()
{
    let message = "Willkommen, " + userName;
    
    console.log(message);
}

welcomeMessage();

console.log("=".repeat(50));

// Eine funktion kann auf externe variablen nicht nur zugreifen, sondern diese auch verändern.
console.log("username: " + userName);

function WelcomeMessage2()
{
    userName = "James";

    let message = "Willkommen, " + userName;
    
    console.log(message);
}

WelcomeMessage2();

console.log("username: " + userName);

console.log("=".repeat(50));

// Innerhalb von funktionen können wir die gleichen variablennamen nutzen, wie ausserhalb, da wir innerhalb der funktion so eine lokale variable erstellen.
let value = 5;
console.log("Value: ", value);

function changeValue()
{
    let value = 10;
    console.log("Value: ", value);
}

changeValue();

console.log("Value: ", value);
