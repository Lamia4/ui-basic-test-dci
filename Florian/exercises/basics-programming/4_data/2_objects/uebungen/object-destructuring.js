// 1.
let [ fruit, vegatable, ...food ] =
[
    "banana",
    "cucumber",
    "bread",
    "cakes",
    "pizza"
];

console.log(fruit, vegatable, ...food);

//2.
const { Fran, Fred, Harley, Marty } =
{
    Fran: "witch",
    Fred: "Feuerstein",
    Harley: "Quinn",
    Marty: "McFly"
};
  
console.log(Fran, Fred, Harley, Marty);

//3.
const objectBand =
{
    name: "Knasterbart",
    greatestHit: "Ich trinke also bin ich",
    nationality: "De",
    genre: "FolkRock"
};
  
const Band = (object) =>
{
    let { name, greatestHit, nationality, genre } = object;
    return `${ name } is a ${ nationality } ${ genre } band. The greatest hits is: ${ greatestHit }.`;
};
console.log(Band(objectBand));

