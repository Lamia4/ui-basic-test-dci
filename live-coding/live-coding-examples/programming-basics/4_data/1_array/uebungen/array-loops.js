/*
6. No Duplicates! 
A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
- [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
- [1, 6, 6, 9, 9] ➞ [1, 6, 9]
- [2, 2, 2, 2, 2, 2] ➞ [2]
- [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]
*/
const numberArray1 = [1, 4, 3, 4, 7, 7, 7];
const numberArray2 = [1, 6, 6, 9, 9];
const numberArray3 = [2, 2, 2, 2, 2, 2];
const numberArray4 = [5, 10, 15, 20, 25];

// Frieders Lösung
function noDuplicates(inputArray)
{
    const newArray = [];

    for (let i = 0; i < inputArray.length; i++)
    {
        if(!newArray.includes(inputArray[i]))
        {
            newArray.push(inputArray[i]);
        }
    }

    return newArray;
}

console.log(noDuplicates(numberArray1));
console.log(noDuplicates(numberArray2));
console.log(noDuplicates(numberArray3));
console.log(noDuplicates(numberArray4));

console.log("=".repeat(50));

// Frederiks Lösung
function noDuplicates2(inputArray)
{
    const newArray = [];

    inputArray.sort();

    for (let i = 0; i < inputArray.length; i++)
    {
        if(inputArray[i] !== inputArray[i + 1])
        {
            newArray.push(inputArray[i]);
        }
    }

    return newArray;
}

console.log(noDuplicates2(numberArray1));
console.log(noDuplicates2(numberArray2));
console.log(noDuplicates2(numberArray3));
console.log(noDuplicates2(numberArray4));

console.log("=".repeat(50));

// DCI Lösung
function arrToSet(arr)
{
    for (i = 0; i < arr.length; i++)
    {
        if (arr[i] === arr[i + 1])
        {
            do
            { 
                arr.splice(i, 1); 
            }
            while (arr[i] === arr[i + 1]);
        }
    }
    return arr;
}

console.log(arrToSet(numberArray1));
console.log(arrToSet(numberArray2));
console.log(arrToSet(numberArray3));
console.log(arrToSet(numberArray4));

console.log("=".repeat(50));

/*
8. Factors. 
A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain: [3, 6, 12, 36]
-  3 is a factor of 6 (3 * 2 = 6)
-  6 is a factor of 12 (6 * 2 = 12)
- 12 is a factor of 36 (12 * 3 = 36)

Create a program that determines whether or not a given array is a factor chain. Examples:

- [1, 2, 4, 8, 16, 32] ➞ true
- [1, 1, 1, 1, 1, 1] ➞ true
- [2, 4, 6, 7, 12] ➞ false
- [10, 1] ➞ false
*/
const factorArray1 = [1, 2, 4, 8, 16, 32];
const factorArray2 = [1, 1, 1, 1, 1, 1];
const factorArray3 = [2, 4, 6, 7, 12];
const factorArray4 = [10, 1];
const factorArray5 = [10, 0];

// Frederiks Lösung
function isFactor(inputArray)
{
    if(inputArray[0] === 0)
    {
        return false;
    }

    for (let i = 1; i < inputArray.length; i++)
    {
        if(inputArray[i] % inputArray[i - 1] !== 0 || inputArray[i] === 0)
        {
            return false;
        }
    }

    return true;
}

console.log(isFactor(factorArray1));
console.log(isFactor(factorArray2));
console.log(isFactor(factorArray3));
console.log(isFactor(factorArray4));
console.log(isFactor(factorArray5));

console.log("=".repeat(50));

// DCI Lösung

/*
const beispielArray = [ 1, 2, 3 ];

| Iteration | Wert | Aktion                   | Ergebnis |
|-----------|------|--------------------------|----------|
| 0         | 1    | 0 === 3 - 1; 2 % 1 !== 0 | false    |
| 1         | 2    | 1 === 3 - 1; 3 % 2 !== 0 | false    |
| 2         | 3    | 2 === 3 - 1;             | true     |
*/
function isFactorChain(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (i === arr.length - 1)
        {
            return true;
        }
        else if (arr[i + 1] % arr[i] !== 0)
        {
            return false;
        }
    }
}

console.log(isFactorChain(factorArray1));
console.log(isFactorChain(factorArray2));
console.log(isFactorChain(factorArray3));
console.log(isFactorChain(factorArray4));
console.log(isFactorChain(factorArray5));

console.log("=".repeat(50));

