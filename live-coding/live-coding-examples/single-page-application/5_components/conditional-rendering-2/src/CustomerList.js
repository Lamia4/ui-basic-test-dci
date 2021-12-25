import React from 'react'

function CustomerList({customer, id}) {
    const handleClick = (e) =>{
        e.target.parentNode.remove();
    }
    return (
        <div>
            <h2>{id+1}. Eintrag</h2>
            <p>Dein Kunden Name ist {customer.fullName} und du bist 
            {customer.isAdmin?" ein ":" kein "}
             Admin.</p>
            <button onClick={(e)=>handleClick(e)}>Diesen Eintrag löschen</button>
        </div>
    )
}

export default CustomerList
