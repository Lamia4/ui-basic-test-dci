const testArray =
[
    {
        name: "Max",
        liste: 
        [
            {
                size: 200
            },
            {
                size: 150
            },
            {
                size: 50
            }
        ]
    },
    {
        name: "James"
    },
    {
        name: "Julia"
    }
];

testArray.forEach((eintrag, i) =>
{
    debugger;
    console.log(eintrag.name); // index 0: Max, index 1: James, index 2: Julia
});

testArray[0].liste.forEach((eintrag, i) =>
{
    debugger;
    console.log(eintrag.size);
});

/*
[ 1, 2, 3 ]
[ true, true, false ]
[ "a", "n", "j" ]
[ {}, {}, {} ]
*/

class Car
{
    constructor()
    {
        
    }
}

const cars = [ new Car(), new Car(), new Car() ];

const filteredCars = cars.filter();

filteredCars.forEach((car, i) =>
{

});

cars.filter().forEach(filteredCars => {});
