// 2
function withinRange(num, obj)
{
    if(num >= obj.min && num <= obj.max)
    {
        return true;
    }

    return false;
}

const ergebnis = withinRange(8, { min: 4, max: 5 });
const ergebnis2 = withinRange(8, { min: 2, max: 9 });

console.log("within range: " + ergebnis);
console.log("within range: " + ergebnis2);

console.log("=".repeat(50));

// 5
const freeShippingPrice = 50;

function freeShipping(obj)
{
    const orderArray = Object.values(obj);
    let total = 0;

    for (let i = 0; i < orderArray.length; i ++)
    {
        total += orderArray[i];
    }
    
    return `Shipping is free: ${total > freeShippingPrice}`;
}

console.log(freeShipping({ "Sponge": 3.50, "Soap": 9.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }));