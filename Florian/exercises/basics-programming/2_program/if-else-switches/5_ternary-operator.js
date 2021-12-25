let testBool = true;

// if(testBool)
// {
//     console.log("(Boolean) Dies ist wahr");
// }
// else
// {
//     console.log("(Boolean) Dies ist falsch");
// }

const ternaryCheck = 
testBool ? // if testBool
'(Boolean) Dies ist wahr' 
: // else
'(Boolean) Dies ist falsch';

console.log(ternaryCheck);

const speed =60;
/*
 * const ternaryCheck2 = 
 * IF       speed >= 120 ? 
 *          'Zu schnell' 
 * ELSE IF  : speed >= 80 ? 
 *          'Schnell' 
 * ELSE     : 
 *          'Geschwindigkeit ok';
*/
const ternaryCheck2 = speed >= 120 ? 'Zu schnell' : speed >= 80 ? 'Schnell' : 'Geschwindigkeit ok';

console.log(ternaryCheck2);

const testValue = 1;

// const isTrue = testValue != 1 ? true : false;
const isTrue = testValue != 1;

console.log(isTrue);
