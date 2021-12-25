const testArray =
[
    {
        name: "Max",
        innerList:
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
    }
];

const unserWert = testArray[0].innerList[1].size;

console.log(unserWert);

const neueArray = testArray.map((element, i) =>
{   
    let neuerInhalt = element.innerList.map((inner, i) =>
    {
        return inner.size;
    })
    
    return neuerInhalt;

});

console.log(neueArray.flat());
