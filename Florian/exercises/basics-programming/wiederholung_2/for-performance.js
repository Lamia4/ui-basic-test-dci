const arr = [...Array(1000000).keys()];

// for
let forSum = 0;
console.time("for"); // einleitung der zeitmessung

for (let i = 0; i < arr.length; i++)
{
    forSum += 1;
}

console.timeEnd("for"); // ende der zeitmessung

// for...of
let forOfSum = 0;
console.time("for...of");

for(let value of arr)
{
    forOfSum += 1;
}

console.timeEnd("for...of");

// .forEach();
let forEachSum = 0;
console.time(".forEach();");

arr.forEach(value =>
{
    forEachSum += 1;
})

console.timeEnd(".forEach();");

/*
leer:

500:
for:            0.104ms
for...of:       0.044ms
.forEach();:    0.028ms

1000:
for:            0.103ms
for...of:       0.076ms
.forEach();:    0.037ms

10000:
for:            0.351ms
for...of:       1.471ms
.forEach();:    0.384ms

100000:
for:            2.239ms
for...of:       5.240ms
.forEach();:    1.948ms

1000000:
for:             2.612ms
for...of:       23.535ms
.forEach();:    15.667ms
*/