// Springt auf case 2:
const testValue = 2;

switch(testValue)
{
    case 1:
        console.log("testValue ist 1");
        break;
    case 2:
        console.log("testValue ist 2");
        break;
    default:
        console.log("testValue hat einen anderen wert");
}

// Springt auf den default switch (Weil "0" keine Zahl ist):
const testValue2 = "0";

switch(testValue2)
{
    case 0:
        console.log("off");
        break;
    case 1:
        console.log("on");
        break;
    default:
        console.log("Geht nicht");
}

const testValue3 = 4;

switch(testValue3)
{
    case 0: 
        console.log("off");
        break;
    case 1:
        console.log("on");
        break;
    default:
    case 3:
        console.log("Geht nicht");
}