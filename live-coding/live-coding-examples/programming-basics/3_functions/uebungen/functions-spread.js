/*
Bonus: Create a function in average.js which accepts any amount of numbers and returns their mean average.
e.g
console.log(average(0)) ---> 0
console.log(average(1, 2)) ---> 1.5
console.log(average(1, 3, 6, 10)) ---> 5
console.log(average(12, 14, 16)) ---> 14
*/

function average(...args)
{
    console.log(args);
    let sum = 0;
  
    for (let i = 0; i < args.length; i++)
    {
        sum += args[i];
    }

    return sum / args.length;
};

console.log(average(0));
console.log(average(1, 2));
console.log(average(1, 3, 6, 10));
console.log(average(12, 14, 16));