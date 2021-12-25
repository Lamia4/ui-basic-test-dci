// Math is a package of different mathematical functions

// Rounding up
    Math.ceil(2.5);
    // returns 3

// Rounding down
    Math.floor(2.5);
    // returns 2

// Random numbers
    // Random number from 0 - 1
    Math.random();
    // returns (for example): 0.7510908764123096

    // Random number from 0 - 10 (if zero is the starting number, the highest number must be 1 higher than the max)
    Math.floor(Math.random() * 11);

    // This can also be written as:
    Math.floor(Math.random() * 10) + 1;
    // returns (for example): 5

    // Random number from x to y
    const max = 100;
    const min = 50;
    Math.floor(Math.random() * (max - min + 1) ) + min;
