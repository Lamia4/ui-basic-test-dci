/* Challenge1 Task1: 
Complete the shape-area.js module. Your module must declare and export two functions with the following signatures: 
- circleArea(radiusLength).
- squareArea(sideLength).
You may create these as either named functions or anonymous function expressions.
*/

const PI = Math.PI;

function circleArea(radiusLength)
{
    console.log(radiusLength);
}

function squareArea(sideLength)
{
    console.log(sideLength);
}

// Define and export circleArea() and squareArea() below
module.exports.areaFunctions = {circleArea, squareArea};