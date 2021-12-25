
/**
 * Rekursion ist eine funktion die sich selber aufruft.
 * 
 * function funktionsName(x)
 * {
 *      Eine sektion zum abbrechen der funktion, wenn etwas schief geht.
 *      if(x < 0) return;
 * 
 *      Eine sektion zum beenden der funktion ohne fehler ("Base Case")
 *      if(x === 0) return 1;
 * 
 *      Sektion für die rekursion, in der wir die funktion selbst wieder aufrufen
 *      return funktionsName(x - 1);
 * }
 */

// Ein bekanntes beispiel für rekursion ist das faktorial

// Diese berechnung soll die nummer immer wieder mit sich selbst multiplizieren, minus 1.
// 4 = 4 * 3 * 2 * 1 = 24

function factorial(num)
{
    if(num < 0)
    {
        return;
    }

    if(num === 0)
    {
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(4));

console.log("=".repeat(50));


function countDown(number)
{
    if(number === 0)
    {
        return;
    }

    console.log(number);
    countDown(number - 1);
}

// countDown(5);
