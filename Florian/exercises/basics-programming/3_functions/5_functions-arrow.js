
// const beispielFunktion = function()
// {
//     console.log("Ich bin eine funktion");
// }

// function beispielFunktion()
// {
//     console.log("Ich bin eine funktion");
// }

// Eine kürzere, moderne methode um funktionen zu schreiben ist die so genannte arrow function:
const beispielFunktion = () =>
{
    console.log("Ich bin eine funktion");
}

beispielFunktion();

// console.log("=".repeat(50));

// bei einem simplen kommando innerhalb der funktion, kann man die klammern auch weglassen, und den code so angenehm verkürzen.
// const divider = () => console.log("=".repeat(50));
// seit kurzem, kann man sogar const weg lassen.
divider = () => console.log("=".repeat(50));

// function beispiel()
// {
//     console.log("Ich bin eine funktion");
// }

// beispiel = () =>
// {
//     console.log("Ich bin eine funktion");
// }

divider();

// EIne arrow function mit nur einem statement hat automatisch einen rückgabewert und benötigt dafür kein return.
returnText = () => "Hello World!";

// function returnText()
// {
//     return "Hello World!";
// }

returnNumber = () => 5 + 7;

console.log(returnText());
console.log(returnNumber());

divider();

// Einer arrow-function können wir genau wie einer normalen funktion werte übergeben.
showMessage = (userName) => console.log("Hallo, " + userName);

// Bei einer Arrow-Function mit nur einem parameter, können wir uns die klammern sparen.

//    funktionsname     parameter   code-block
//    showMessage =     userName => console.log("Hallo, " + userName);

// theoretisch das gleiche:
// function showMessage(username)
// {
//     console.log("Hallo, " + userName);
// }
showMessage("Max");
