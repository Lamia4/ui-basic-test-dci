
// Um daten und werte an eine funktion zu übergeben, können wir diese festlegen und dann mit dem funktionsaufruf übergeben.
// Dabei erstellen wir eine lokale variable, die dann den übergebenen wert beinhaltet.

function showMessage(text)
{
    console.log(text);
}

// Beim funktionsaufruf fügen wir den gewollten wert ein.
showMessage("Dies ist eine Nachricht");
showMessage("Dies ist eine Nachricht für Frieder");
showMessage("Dies ist eine Nachricht für Max");
showMessage("Dies ist eine Nachricht für Sven");
showMessage("Dies ist eine Nachricht für Michele");

console.log("=".repeat(50));

// Wir können beliebig viele werte an eine funktion übergeben:
function chatMessage(user, message)
{
    console.log(user + ": " + message);
}

let user = "Max";
let message = "Hallo, wie geht es dir heute?!";

chatMessage(user, message);

user = "Frank";
message = "Ach, mir geht es heute prima!";

chatMessage(user, message);

console.log("=".repeat(50));

// Auf die übergeben werte können wir zugreifen, und sie auch ändern.
function chatMessage2(user, message)
{
    user = "===> " + user;
    console.log(user + ": " + message);
}

chatMessage2(user, message);

console.log("=".repeat(50));

// Mit sogenannten default values können wir werte festlegen, die für variablen genutzt werden, bei denen wir keinen wert übergeben.
function chatMessage3(user, message = "Der user hat nichts geschrieben")
{
    // theoretisch: message = message || "Der user hat nichts geschrieben";
    console.log(user + ": " + message);
}

chatMessage3(user);
chatMessage3(user, "Der user hat etwas geschrieben");

console.log("=".repeat(50));

// Eine funktion kann sich auch selber, rekursiv, innerhalb des code-blocks aufrufen:
function countDown(number)
{
    if(number === 0)
    {
        return;
    }

    console.log(number);

    countDown(number - 1);
}

let number = 5;

countDown(number);

console.log("=".repeat(50));

function countUp(number, max)
{
    if(number === max + 1)
    {
        return;
    }

    console.log(number);
    countUp(number + 1, max);
}

countUp(1, 5);