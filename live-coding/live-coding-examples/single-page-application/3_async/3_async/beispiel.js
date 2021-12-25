// Aus
Promise.resolve("Hallo Welt");

// wird
async function greet()
{
    return "Hallo Welt";
}

// Async/Await
const einePromise = () => Promise.resolve("Eine Promise");
const nochEinePromise = (wert) => Promise.resolve(wert);

async function testFunktion()
{
    console.log(2, "In der Funktion");

    const res = await einePromise();
    const res2 = await nochEinePromise(res);

    console.log(3, res, res2);
}

console.log(1,"Vor der Funktion");
testFunktion();
console.log(4, "Nach der Funktion");