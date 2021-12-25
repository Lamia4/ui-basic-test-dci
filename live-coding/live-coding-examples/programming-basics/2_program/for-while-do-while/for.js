
let counter = 5;

// Simpler for-loop mit Iteration, zeigt 5 mal text an
for(let i = 0; i < counter; i++)
{
    console.log("Hallo Welt", i);
}

// statement 1: let i = 0;      = wird einmal ausgeführt, bevor der block ausgeführt wird und legt den anfang der iteration fest.
// statement 2: i < counter;    = definiert die kondition zum ausführen des code-blocks.
// statement 3: i++;            = wird nach jedem durchlauf des code-blocks ausgeführt;

// Logik:
// wo fängt der zähler an? 0
// ist die kondition eingetroffen um zu wiederholen? i ist weniger als 5;
// wurde der code block ausgeführt? wenn ja, erhöhe i um 1, und wiederhole;

/**
 * | Iteration | Variable | Kondition      | Aktion                  |
 * |-----------|----------|----------------|-------------------------|
 * | 1         | i = 0    | 0 < 5 == true  | console.log(...); i = 1 |
 * | 2         | i = 1    | 1 < 5 == true  | console.log(...); i = 2 |
 * | 3         | i = 2    | 2 < 5 == true  | console.log(...); i = 3 |
 * | ...       | ...      | ...            | ...                     |
 * | 6         | i = 5    | 5 < 5 == false | break;                  |
 */

console.log("=".repeat(50));

// Simpler for-loop mit iteration in für uns leserlicher nummerierung:
for(let i = 0; i < counter; i++)
{
    console.log("Loop " + (i + 1));
}

console.log("=".repeat(50));

// Wir können einen for-loop auch unterbrechen:
counter = 20;
const breakpoint = 11;

for(let i = 0; i < counter; i++)
{
    if(i == 4)
    {
        // mit continue; können wir iterationen überspringen;
        continue;
    }
    
    if(i == breakpoint)
    {
        console.log("Der counter wurde unterbrochen");

        // mit break; können wir, genau wie in switches, einen loop unterbrechen.
        break;
    }

    console.log(i);
}

console.log("=".repeat(50));

// wir können mehrere for-loops ineinander verschachteln, um zum beispiel eine tablelle zu füllen.
let rows = 3;
let columns = 5;

for(let i = 0; i < rows; i++)
{
    for(let j = 0; j < columns; j++)
    {
        console.log(`row: ${ i } | column: ${ j }`);
    }
}

console.log("=".repeat(50));

// Ein unendlicher loop wird so lange laufen bis der speicher voll ist, deswegen sollte er nicht ausgeführt werden!!!
// for(let i = 1; i > 0; i++)
// {
//      console.log("Bis zur unendlichkeit, und noch viel weiter!");   
// }
