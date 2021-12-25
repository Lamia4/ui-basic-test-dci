
const randomNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 1;

function guessingGame()
{
    const numberToGuess = randomNumber;
    let counter = 1;

    let guess = parseInt(prompt("Guess a number from 1-10"));

    while ((guess !== numberToGuess) && (counter < 3))
    {
        guess = parseInt(prompt("Wrong. Try again!"));
        counter++;
    }

    if((guess === numberToGuess) && (counter <= 3))
    {
        alert(`Success, the number was ${ numberToGuess }! Attempts: ${ counter }`);
    }
    else
    {
        alert(`Sorry, you failed. The correct number was ${ numberToGuess }`);
    }
}

guessingGame();
