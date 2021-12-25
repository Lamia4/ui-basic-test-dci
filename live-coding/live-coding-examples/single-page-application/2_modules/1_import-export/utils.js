// wir erstellen eine funktion um einen wert mal 2 zu nehmen
const getTimesTwo = (value) =>
{
    return value * 2;
}

// wir erstellen eine funktion um einen wert mal 4 zu nehmen
const getTimesFour = (value) =>
{
    return value * 4;
}

// wir erstellen eine funktion um etwas anzuzeigen
const buildPage = (obj) =>
{
    const appElement = document.getElementById("app");
    appElement.innerHTML = `
        <ul>
            <li>testwert 1: ${ obj.timesTwo }</li>
            <li>testwert 2: ${ obj.timesFour }</li>
        </ul>
    `;
}

// Wir exportieren mit sogenannten "named exports"
export {
    // Wir können unsere funktionen exportieren, indem wir ihren namen in das objekt schreiben.
    getTimesTwo,
    getTimesFour,
    // Auch beim export, können wir mit "as" den namen ändern
    buildPage as makePage
}
