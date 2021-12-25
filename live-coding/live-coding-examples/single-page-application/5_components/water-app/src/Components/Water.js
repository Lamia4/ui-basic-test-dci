// Unser Komponent wird, wenn er verändert wird, die aktuelle tmperatur auslesen und ausgeben ob das wasser flüssig ist, oder nicht;

// ZU allererst importieren wir react, und holen uns daraus das modul useState, das wir für unsere states benötigen

// Referenz: https://reactjs.org/docs/hooks-reference.html#usestate
import React, { useState } from 'react';

// useState ist ein hook, den wir innerhalb eines komponenten aufrufen können, um einen state zu definieren, wenn die seite neu gerendert wird, bleibt der inhalt des states erhalten.

function Water()
{
    // Wir schreiben 2 useState hooks, um unsere states zu deklarieren, einmal für die temperatur des wassers und einmal für den zustand.
    const [ temperature, setTemperature ] = useState(10);
    // Was haben wir hier geschrieben:
    // - "temperature" = der erste wert im dekonstruktor, ist die variable, die den benötigten wert beinhaltet.
    // "setTemperature" = der zweite wert im dekonsturtor, ist die funktion, der wir den wert übergeben
    const [ condition, setCondition ] = useState("flüssig");

    // Wir schreiben eine handlerfunktion zum ändern der temperatur
    const handleTemperatureChange = () =>
    {
        // Hier schreiben wir jetzt die funktionsinhalte die wir benötigen um die temperatur zu ändern
        const newTemperature = Math.floor(Math.random() * 21) - 10;

        // Wir übergeben die neue temperatur an den state "temperature"
        setTemperature(newTemperature);

        /*
        if(newTemperature > 0)
        {
            setCondition("flüssig");
        }
        else
        {
            setCondition("fest");
        }
        */

        // Wir verändern den wert von "condition" basierend auf der neuen temperatur
        setCondition(newTemperature > 0 ? "flüssig" : "fest");
    }

    return(
        <>
            {/* Wir erstellen eine div in der wir die informationen über das wasser anzeigen */}
            <div>
                <p>Aktuelle Temperatur: { temperature }</p>
                <p>Das Wasser ist: { condition }</p>
            </div>

            {/* Jetzt erstellen wir einen button, der die temperturfunktion aufruft, die wir gleich schreiben */}
            <button onClick={ handleTemperatureChange }>Zufallstemperatur berechnen</button>
        </>
    )
}

export default Water;
