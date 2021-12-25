import React, { useState } from 'react';

function EventsOnChangeReact()
{
    // Wir erstellen einen state hook, in dem wir den aktuellen text speichern wollen, der in das eingabefeld eingegeben wird, und initialisieren ihn mit einem leeren string.
    const [ textValue, setTextValue ] = useState("");

    // Wir erstellen eine eventfunktion namens handleTextChange, in der wir den aktuellen wert des inpouts an den state übergeben.
    function handleTextChange(e)
    {
        setTextValue(e.target.value);

        // Wir können uns das aktuelle event target ausgeben lassen
        console.log(e.currentTarget);
    }

    function deleteText(e)
    {
        setTextValue("");
    }

    return(
        <>
            <h2>3. onCange</h2>

            {/* Wir erstellen ein input element das wir mit einem onChange event ausstatten */}
            <input name="textInput" onChange={ handleTextChange } value={ textValue }/>

            <p>Der eingegebene Text ist: <b>{ textValue }</b></p>

            {/* Wir können den text des aktuell benutzten input feldes löschen, wenn wir den behandelten text als value angeben */}
            <button onClick={ deleteText }>Löschen</button>
            
            <br/>
            <br/>

            {/* Da wir den wert des text-inputs als state speochern können wir ihn auch an input felder als value übergeben */}
            <input readOnly disabled value={ textValue }/>

        </>
    )
}

export default EventsOnChangeReact;
