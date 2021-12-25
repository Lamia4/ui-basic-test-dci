// numbers with exponent notation (e = amount of numbers)
    const testValue = 5e4;
    // returns 50000

// Combining strings and numbers
    const testValue = 4 + "3";
    // returns 43;

    const testValue = 4 + +"3";
    // returns 7;

// Number precision (JavaScript numbers are accurate up to 15 digits)
    const testValue1 = 999999999999999;   
    // returns         999999999999999
    const testValue2 = 9999999999999999; 
    // returns         10000000000000000

// converting Strings to numbers
    const testValue1 = '25';
    parseInt(testValue1);
    // returns 25

    const testValue2 = '2.5';
    parseInt(testValue2);
    // returns 2

    parseFloat(testValue2);
    // returns 2.5
