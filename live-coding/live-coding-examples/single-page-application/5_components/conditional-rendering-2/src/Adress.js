import React from 'react'

function Adress({person}) {
    return (
        <div>
            <ul>
                <li>Name: {person.fullName}</li>
                <li>Adresse: {person.adress}</li>
                <li>PLZ: {person.cityStateZip}</li>
            </ul>
        </div>
    )
}

export default Adress
