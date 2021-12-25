import React, { useState } from 'react';

function EventsReact()
{
    const [ isToggled, setIsToggled ] = useState(false);

    // IN react rufen wir den addEventListener nie selber auf, wir erstellen einee funktion, der wir das event übergeben.
    function handleClick(e)
    {
        // preventDefault(); wie bei DOM
        e.preventDefault();

        console.log(e.defaultPrevented);

        setIsToggled(!isToggled);
    }

    return(
        <>
            <h2>1. onClick handler</h2>
            <p style={{ fontWeight: "bold" }}>{ isToggled ? "An" : "Aus" }</p>

            {/* Wir erstellen eine klickbares element, in das wir handleClick übergeben */}

            {/* Genau wie (e) => handleClick(e) */}
            <a href="#" onClick={ handleClick }>Klick!</a>
        </>
    )
}

export default EventsReact;
