// 1.
const determiner = 100;
// let message;

const x = (determiner >= 0) ? 'Greater or equal to 0' : 'Less than 0';
// oder: const x = (determiner <= 0) ? 'Less than 0' : 'Greater or equal to 0';

console.log(x);

// 2
let updater;

if(determiner >= 0)
{
    updater = 'Greater or equal to 0';
    const message = 'Positive integer';
    console.log(message);
}
else
{
    updater = 'Less than 0';
}

console.log(updater);

console.log(message);
// Wir können auf message nicht zugreifen, da es sich innerhalb des if-blocks befindet.

// 3
/**
 * Wir nutzen den Ternary Operator wenn wir Werte zu einer Variable,
 * anhand einer Kondition zuweisen wollen.
 */
const y = (x == 42) ? true : false;
console.log(y);
