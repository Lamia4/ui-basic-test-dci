import React from 'react'

function Stamp({imageUrl}) { // Empfangen von BildDatei Link
    return (
        <div>
            <img src={imageUrl} alt="stamp" width="400" height="200"/>
        </div>
    )
}

export default Stamp
