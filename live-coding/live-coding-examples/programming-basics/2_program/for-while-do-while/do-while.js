
// do/while
// Bei einem normalen while-loop wird erst geprüft, ob die kondition zutrifft oder nicht,
// und dann der code-block ausgeführt.

let counterWhile = 0;
while (counterWhile < 5)
{
    console.log("Der counter steht auf ... " + counterWhile);

    counterWhile++;
}

console.log("\n" + "=".repeat(50), "\n");

// der do/while-loop ist eine variante des while-loops, der erst den code-block ausführt und danach erst prüft ob die kondition zutrifft.
// Dieses beispiel wird mindestens einmal ausgeführt, auch wenn die kondition nicht zutrifft.
let counterDoWhile = 8;
do
{
    console.log("Der Counter steht auf ... " + counterDoWhile);

    counterDoWhile++;
}
while(counterDoWhile < 5);
