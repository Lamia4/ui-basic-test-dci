// Simple ternary-operator
// https://www.javascripttutorial.net/javascript-ternary-operator/
    //condition ? expression_1 : expression_2;
    const canDrive = age > 18 ? 'yes' : 'no';


    let testValue = 5;
    const ternatyTest = 4 <= testValue ? 'is higher' : 'is lower';
    // returns 'isHigher;

// multiple ternary-operators
    // Equals if ... else if ... else
    // reads:
    //   condition1 ? value1
    // : condition2 ? value2
    // : value2
    let speed = 90;
    let message = speed >= 120 ? 'too fast' : speed >= 80 ? 'fast' : 'ok';

// Simplified ternary-operator
    const testValue = 1;

    // Longer version
    const isTrue = testValue != 1 ? true : false;

    // Shorter version
    const isTrue = testValue != 1;
