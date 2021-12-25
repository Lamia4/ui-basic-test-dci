// Eine simple funktion
// function showMessage()
// {
//     console.log("Hello World");
// }

// alternativ:
// const showMessage = function()
// {
//     console.log("Hello World");
// }

showMessage = function()
{
    console.log("Hello World");
}

// Damit der code ausgeführt wird, müssen wir die funktion aufrufen, dies ist ein sogenanntent "Function call", andernfalls wird der code-block innerhalb der funktion nicht ausgeführt.
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();

console.log("=".repeat(50));

// Eine funktion kann sich auch selber starten, das nennt man rekursive funktion, dies können wir erreichen, indem wir hinter die funktion klammern setzen.
const recursiveFunction = function()
{
    console.log("Ich habe mich selber aufgerufen");
}();
