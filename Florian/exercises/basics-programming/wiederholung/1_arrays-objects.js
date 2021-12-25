
const arr = [...Array(1000000).keys()];



let forSum = 0;
console.time("for");

for (let i = 0; i < arr.length; i++)
{
    forSum += 0.5;
}

console.timeEnd("for");
console.log(forSum);



let forOfSum = 0;
console.time("for...of");

for(let value of arr)
{
    forOfSum += 0.5;
}

console.timeEnd("for...of");
console.log(forOfSum);



let forEachSum = 0;
console.time("forEach");

arr.forEach(value =>
{
    forEachSum += 0.5;
});

console.timeEnd("forEach");
console.log(forEachSum);
