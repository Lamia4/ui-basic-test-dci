
// Ein while-loop, loopt durch einen code-block, bis die kondition nicht mehr eintrifft.
let i = 0;
while(i < 10)
{
    console.log("i ist " + i);
    i++;
}

console.log("=".repeat(50));

// Wir können mehrere kondition in einem while-loop checken,
// oder uns anhand von einem boolean selbst auf dem loop werfen.

let isRunning = true;
let counter = 0;
while(isRunning && counter < 5)
{
    console.log("Running: " + counter);

    if(counter === 2)
    {
        isRunning = false;
    }

    counter++;
}

console.log("=".repeat(50));

// Videospiele nutzen while-loops mit einem von "true" für den "Update-Loop";
// der jede "Frame" ausgeführt wird.
// Bei einem Spiel mit 60FPS (Frames-Per-Second) wird dieser while-loop also 60 mal die sekunde ausgeführt.
// Im gegensatz zu einem infinite loop, kann ein while loop unterbrochen werden.
// while(true)
// {
    // Update:
    // Spielerposition
    // Gegnerposition
    // Munition
    // Punkte
// }
