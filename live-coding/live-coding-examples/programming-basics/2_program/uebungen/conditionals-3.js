// 1
let aleezaGame1 = 89;
let aleezaGame2 = 120;
let aleezaGame3 = 103;
let lisGame1 = 116;
let lisGame2 = 94;
let lisGame3 = 123;

// 1a
console.log('\n===== AUFGABE 1a =====');

let aleezaTeamAverage = Math.round((aleezaGame1 + aleezaGame2 + aleezaGame3) / 3);
let lisTeamAverage = Math.round((lisGame1 + lisGame2 + lisGame3) / 3);

console.log(`Aleeza's team: ${ aleezaTeamAverage }`);
console.log(`Lis Team: ${ lisTeamAverage }`);

// 1b
console.log('\n===== AUFGABE 1b =====');

if(lisTeamAverage > aleezaTeamAverage)
{
    console.log('Lis Team gewinnt mit ' + lisTeamAverage + ' Punkten!');
}
else if(aleezaTeamAverage > lisTeamAverage)
{
    console.log('Aleeza\'s Team gewinnt mit ' + aleezaTeamAverage + ' Punkten!');
}
else if(aleezaTeamAverage === lisTeamAverage)
{
    console.log('Beide Teams haben gleich viele Punkte');
}
else
{
    console.log('Bitte sorg dafür das die team-score in nummern angelegt ist');
}

// 1c
console.log('\n===== AUFGABE 1c =====');

aleezaGame1 = 100;
aleezaGame2 = 110;
aleezaGame3 = 150;

let aleezaTeamNewAverage = Math.round((aleezaGame1 + aleezaGame2 + aleezaGame3) / 3);
console.log(`Aleeza's team: ${ aleezaTeamNewAverage }`);

if(lisTeamAverage > aleezaTeamNewAverage)
{
    console.log('Lis Team gewinnt mit ' + lisTeamAverage + ' Punkten!');
}
else if(aleezaTeamNewAverage > lisTeamAverage)
{
    console.log('Aleeza\'s Team gewinnt mit ' + aleezaTeamNewAverage + ' Punkten!');
}
else if(aleezaTeamNewAverage === lisTeamAverage)
{
    console.log('Beide Teams haben gleich viele Punkte');
}
else
{
    console.log('Bitte sorg dafür das die team-score in nummern angelegt ist');
}

// 1d
console.log('\n===== AUFGABE 1d =====');

let maryGame1 = 97;
let maryGame2 = 134;
let maryGame3 = 105;

let maryTeamAverage = Math.round((maryGame1 + maryGame2 + maryGame3) / 3);
console.log(`Mary's team: ${ maryTeamAverage }`);

// lis      mary    aleeza
// aleeza   lis     mary
// mary     aleeza  lis

if((lisTeamAverage > aleezaTeamNewAverage) && (lisTeamAverage > maryTeamAverage))
{
    console.log('Lis Team gewinnt mit ' + lisTeamAverage + ' Punkten!');
}
else if((aleezaTeamNewAverage > lisTeamAverage) && (aleezaTeamNewAverage > maryTeamAverage))
{
    console.log('Aleeza\'s Team gewinnt mit ' + aleezaTeamNewAverage + ' Punkten!');
}
else if((maryTeamAverage > aleezaTeamNewAverage) && (maryTeamAverage > lisTeamAverage))
{
    console.log('mary\'s Team gewinnt mit ' + maryTeamAverage + ' Punkten!');
}
else if((maryTeamAverage === aleezaTeamNewAverage) && (maryTeamAverage !== lisTeamAverage))
{
    console.log('Mary und Aleeza\'s Teams haben gleichstand!');
}
else if((maryTeamAverage === lisTeamAverage) && (maryTeamAverage !== aleezaTeamNewAverage))
{
    console.log('Mary und Lis Teams haben gleichstand!');
}
else if((aleezaTeamNewAverage === lisTeamAverage) && (aleezaTeamNewAverage !== maryTeamAverage))
{
    console.log('Lis und Aleeza\'s Team haben gleichstand!');
}
else if((maryTeamAverage === aleezaTeamNewAverage) && (maryTeamAverage === lisTeamAverage))
{
    console.log('Alle Teams haben gleichstand!');
}

// 1e
console.log('\n===== AUFGABE 1e =====');

maryGame1 = 85;
maryGame2 = 105;
maryGame3 = 180;

let maryTeamNewAverage = Math.round((maryGame1 + maryGame2 + maryGame3) / 3);
console.log(`Mary's team: ${ maryTeamNewAverage }`);


if((lisTeamAverage > aleezaTeamNewAverage) && (lisTeamAverage > maryTeamNewAverage))
{
    console.log('Lis Team gewinnt mit ' + lisTeamAverage + ' Punkten!');
}
else if((aleezaTeamNewAverage > lisTeamAverage) && (aleezaTeamNewAverage > maryTeamNewAverage))
{
    console.log('Aleeza\'s Team gewinnt mit ' + aleezaTeamNewAverage + ' Punkten!');
}
else if((maryTeamNewAverage > aleezaTeamNewAverage) && (maryTeamNewAverage > lisTeamAverage))
{
    console.log('mary\'s Team gewinnt mit ' + maryTeamNewAverage + ' Punkten!');
}
else if((maryTeamNewAverage === aleezaTeamNewAverage) && (maryTeamNewAverage !== lisTeamAverage))
{
    console.log('Mary und Aleeza\'s Teams haben gleichstand!');
}
else if((maryTeamNewAverage === lisTeamAverage) && (maryTeamNewAverage !== aleezaTeamNewAverage))
{
    console.log('Mary und Lis Teams haben gleichstand!');
}
else if((aleezaTeamNewAverage === lisTeamAverage) && (aleezaTeamNewAverage !== maryTeamNewAverage))
{
    console.log('Lis und Aleeza\'s Team haben gleichstand!');
}
else if((maryTeamNewAverage === aleezaTeamNewAverage) && (maryTeamNewAverage === lisTeamAverage))
{
    console.log('Alle Teams haben gleichstand!');
}

// DRY CODE: Dont Repeat Yourself - Wiederhole dich nicht
// WET CODE: Write Everything Twice - Du wiederholst dich

// Für Frieder und Christian (.toFixed()):
const num = 12.12945;
const newNumber = num.toFixed(2);
// console.log(newNumber);
// 12.13
