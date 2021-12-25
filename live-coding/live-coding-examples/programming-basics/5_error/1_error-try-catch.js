
/**
 * Try/Catch
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 */

// try
// {
//     // Versuche den code-block auszuführen...
//     nichtExistierendeFunktion();
// }
// catch(error)
// {
//     // .. im falle eines fehlers, breche ab und führe diesen code block aus, ansonsten ignoriere ihn.

//     // Kompletter Fehler
//     console.log(error);

//     // Fehlernachricht
//     // console.log(error.message); // nichtExistierendeFunktion is not defined

//     // Fehlernamen
//     // console.log(error.name); // ReferenceError

//     // Fehlerinformation, mit zeilenangabe und quellenangabe
//     console.log(error.stack); // ... komplette fehlerinformation
// }

// Beispiel
// try
// {
//     console.log("vor dem fehler");
//     nichtExistierendeFunktion();
//     console.log("nach dem fehler");
// }
// catch (error)
// {
//     console.log(error.message);
// }

// Eigene Fehlernachricht
// try
// {
//     nichtExistierendeFunktion();
// }
// catch
// {
//     // Error - Allgemeiner Fehler.
//     // ReferenceError - Eine Referenz konnte nicht gefunden werden.
//     // SyntaxError - Der code hat einen syntaktischen fehler.
//     // TypeError - Mit dem angegeben datentypen kann nicht gearbeitet werden.
//     const error = new Error("Wir haben einen fehler!");

//     console.log(error.message);
// }

// Mit finally können wir nach dem fehler auch einen code-block ausführen
// let value = 5;

// try
// {
//     // Versuche den code block auszuführen.
//     value = countValue(10);
// }
// catch (error)
// {
//     // Gib uns den fehler aus
//     console.log(error.message); // countValue is not defined
// }
// finally
// {
//     // Nach dem fehler-block (ob geworfen oder nicht), führe diesen code block aus
//     value = 10; (Beispiel, nicht unbedingt eine zuweisung)
// }

// console.log(value); // 10

// WEnn javascript einen fehler findet, wirft es normalerweise einen fehler aus,
// und stoppt das programm. Diese situation können wir aber auch selber auslösen,
// wenn wir einen fehler manuell auswerfen

console.log("Vor dem fehler");

// Einen fehler auswerfen
throw new Error("Dies ist ein fehler");

console.log("Nach dem fehler");
