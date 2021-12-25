// 2. Month Name
// Create a function called getMonthName, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument.
function getMonthName(monthNumber)
{
    const months =
    [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const currentMonth = monthNumber - 1;

    if(currentMonth <= 0 || currentMonth > 12)
    {
        return "Dies ist kein gültiger Monat";
    }
    else if(currentMonth > 0 && currentMonth <= 12)
    {
        return months[currentMonth];
    }
    else
    {
        throw new Error("Dies ist kein gültiger wert");
    }
}

// wenn wir keinen try/catch block haben, wird das programm nach dem fehler beendet.
// console.log(getMonthName("test"));

// Innerhalb des try/catch blockes, wird unser fehler aufgefangen, und das programm kann weiterlaufen
try
{
    console.log(getMonthName(2.6));
}
catch (error)
{
    console.error(error);
}

console.log("=".repeat(50));

// 5. Recursion
// The following code should get the sum of the array items, but it does not work. Fix it so that it will.
function sum(array)
{
    debugger;
    if(array.length === 1)
    {
        debugger;
        return array.pop();
    }

    let result = array.pop() + sum(array);
    return result;
}

console.log(sum([1, 2, 3]));
