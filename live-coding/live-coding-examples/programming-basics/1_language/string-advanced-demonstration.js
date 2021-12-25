// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Escaping
    // Escaping new line
    "This is a \n multiline String";

    // Escaping Tabulator
    "This\tis\ta\tString";

// Template literals
    // https://css-tricks.com/template-literals/
    // simple math
    `I would like to have a table for ${ 3 * 2 } persons`;

    // expression induction
    const personName = "Max";
    `Hello, my name is ${ personName }`;

    // multiple lines
    // plus style
    const testString = 'Lorem ipsum dolor sit amet,' + 
    ' consectetur adipiscing elit,' + 
    ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    // backslash style
    const testString = 'Lorem ipsum dolor sit amet, \
    consectetur adipiscing elit, \
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    const testString = `Lorem ipsum dolor sit amet,
    consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

// String functions
    // length
    'This is a String'.length;

    // getting a certain character (chatAt style) (starting at 0)
    'This is a String'.charAt(2);

    // Array style
    'This is a String'[3];

    // to lowercase
    'This is a String'.toLowerCase();

    // to uppercase
    'This is a String'.toUpperCase();

    // includes
    'This is a String'.includes('String');

    // replace
    'This is a String'.replace('String', 'Sentence');

    // trim
    ' This is a String     '.trim();

    // substring // 
    'This is a String'.substring(4);
    'This is a String'.substring(0, 4);