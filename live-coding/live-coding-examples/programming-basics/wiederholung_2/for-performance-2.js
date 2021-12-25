const arr = [ ...Array(1000000).keys() ];

console.time(".forEach();");
arr.forEach(value => {});
console.timeEnd(".forEach();");

console.time(".map();");
arr.map(value => {});
console.timeEnd(".map();");