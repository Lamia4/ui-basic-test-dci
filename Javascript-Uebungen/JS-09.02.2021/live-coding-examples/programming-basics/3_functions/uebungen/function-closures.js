/* 
    1. Addition
    Write a function add that uses a closure that performs addition on arguments in two separate function calls.

    add(3)(4);
    // returns 7
*/

function add(wert1)
{
    return function(wert2)
    {
        return wert1 + wert2;
    }
}

               // sum(4)
console.log(add(3)(4));

const addFunction = add(3);

console.log(addFunction(4));
console.log(addFunction(6));

console.log("=".repeat(50));

/*
    2. Multiply
    - Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.
*/

function multiplier(num1)
{
    return function output(num2)
    {
        console.log("num1: " + num1, "\nnum2: " + num2);
        return num1 * num2;
    }
}

const aufgabe2 = multiplier(5);
console.log(aufgabe2(3));

console.log("=".repeat(50));

function retire(currentAge, retirementAge)
{
    return function(salary)
    {
        if (currentAge >= retirementAge)
        {
            return "You're already retired";
        }
        else
        {
            return ((retirementAge - currentAge) * 12) * ((salary * 5) / 100);
        }
    }
}

console.log(retire(45, 65)(2000));
