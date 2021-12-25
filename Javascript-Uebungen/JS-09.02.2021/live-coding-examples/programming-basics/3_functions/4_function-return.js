// Wenn wir in einer funktion etwas auswerten, können wir das ergebnis der funktion ausgeben, dies ist ein sogenanntes "Return-Statement".

const number1 = 2;
const number2 = 5;

function exampleFunction(firstInput, secondInput)
{
    const ergebnis = firstInput + secondInput;

    return ergebnis;
}

const funktionsErgebnis = exampleFunction(number1, number2);

console.log(funktionsErgebnis);

console.log("=".repeat(50));

// Beispiel mit einem if-statement
function checkAge(age)
{
    const adultAge = 18;

    if(age >= adultAge)
    {
        return true;
    }
    else
    {
        return false;
    }
}

const myAge = 17;
const message = "Bist du schon volljährig? " + (checkAge(myAge) ? 'Ja!': 'Nein!');
console.log(message);

console.log("=".repeat(50));

// wir können eine funktion mit einem leeren return statement auch direkt unterbrechen:
const tokensLeft = 1;

function playGame(tokens)
{
    if(tokens === 0)
    {
        return;
    }
    
    console.log("Ich darf spielen...");
}

playGame(tokensLeft);

