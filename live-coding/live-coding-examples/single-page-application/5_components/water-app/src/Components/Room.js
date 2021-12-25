import React, { useState } from 'react';

function Room()
{
    const [ isLightOn, setIsLightOn ] = useState(true);

    const lightMode = isLightOn ? "lit" : "dark";

    const handleFlip = () =>
    {
        setIsLightOn(!isLightOn); // ! ist ein boolean-toggle, er dreht den aktuellen boolean wert um.
    }

    return(
        <div className={`room ${ lightMode }`}>
            the room is { lightMode }
            <br />
            <button onClick={ handleFlip }>Flip</button>
        </div>
    )
}

export default Room;
