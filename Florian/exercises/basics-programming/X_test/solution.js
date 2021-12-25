
// Loop Sequence
function geometricalSequence()
{
    // Zweierpotenzen ausgeben: 2⁰ bis 2⁸

    let solution = "";

    for (let i = 0; i <= 8; i++)
    {
        solution += `${ 2 ** i } `;
    }

    return solution;
}

console.log(geometricalSequence());


