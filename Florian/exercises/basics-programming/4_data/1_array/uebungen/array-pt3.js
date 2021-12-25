/**
 * 4. One is not like the others...
 * Create a function that takes an array of numbers and return the number that's unique.
 * 
 * Examples:
 * - unique([3, 3, 3, 7, 3, 3]) > 7
 * - unique([0, 0, 0.77, 0 , 0]) > 0.77
 * - unique([0, 1, 1, 1, 1, 1, 1, 1]) > 0
 */

function uniqueMichele(inputArray)
{
    inputArray = inputArray.sort();

    let result;

    for(let i = 0; i < inputArray.length; i++)
    {
        if(inputArray[i] !== inputArray[i-1] && inputArray[i] !== inputArray[i+1])
        {
            newArray = inputArray[i];
        }
    }

    return newArray;
}

console.log("unique: " + uniqueMichele([3, 3, 3, 7, 3, 3]));
console.log("unique: " + uniqueMichele([0, 0, 0.77, 0 , 0]));
console.log("unique: " + uniqueMichele([0, 1, 1, 1, 1, 1, 1, 1]));

console.log("=".repeat(50));

function unique(inputArray)
{
    for(let i = 0; i < inputArray.length; i++)
    {
        const currentElement = inputArray[i];

        if(inputArray.indexOf(currentElement) === inputArray.lastIndexOf(currentElement))
        {
            return currentElement;
        }
    }
}

console.log("unique: " + unique([3, 3, 3, 7, 3, 3]));
console.log("unique: " + unique([0, 0, 0.77, 0 , 0]));
console.log("unique: " + unique([0, 1, 1, 1, 1, 1, 1, 1]));

console.log("=".repeat(50));

/**
 * 5. Word Ranking
 * Create a function that takes a string of words and returns the highest scoring word. 
 * Each letter of a word scores points according to it's position in the alphabet: 
 * a = 1, b = 2, c = 3, etc.
 * 
 * - The returned string should only contain alphabetic characters(a-z).
 * - Preserve case in the returned string (see 4th example above).
 * 
 * Examples:
 * - wordRank("The quick brown fox.") ➞ "brown"
 * - wordRank("Nancy is very pretty.") ➞ "pretty"
 * - wordRank("Check back tomorrow, man!") ➞ "tomorrow"
 * - wordRank("Today is Wednesday.") ➞ "Wednesday"
 */
function wordRank(inputString)
{
    const words = inputString.split(" ");
    const ranking = [];

    const rankingLetters =
    [
        "a", "b", "c", "d", "e", 
        "f", "g", "h", "i", "j", 
        "k", "l", "m", "n", "o", 
        "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y",
        "z"
    ];

    for(let i = 0; i < words.length; i++)
    {
        let word = words[i];

        const letters = word.split("");
        let score = 0;
        
        for(let j = 0; j < letters.length; j++)
        {
            const currentScore = rankingLetters.indexOf(letters[j].toLowerCase()) + 1;
            score += currentScore;
        }

        ranking.push(score);
    }

    return words[ranking.indexOf(Math.max(...ranking))].replace('.', '').replace(',', '');
}

console.log(wordRank("The quick brown fox."));
console.log(wordRank("Nancy is very pretty."));
console.log(wordRank("Check back tomorrow, man!"));
console.log(wordRank("Today is Wednesday."));

/**
 * 6. c4n y0u r34d th15?
 * Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
 *  NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 
 * 'o's with 0, and 's's with 5.
 * 
 * Examples:
 * - hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
 * - hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
 * - hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
 */
function hackerSpeak(inputString)
{
    return inputString
        .toLowerCase()
        .replaceAll("a", 4)
        .replaceAll("e", 3)
        .replaceAll("i", 1)
        .replaceAll("o", 0)
        .replaceAll("s", 5);
}

console.log(hackerSpeak("javascript is cool"));
