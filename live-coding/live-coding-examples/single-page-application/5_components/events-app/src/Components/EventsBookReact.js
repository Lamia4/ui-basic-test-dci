import React, { useState } from 'react';

function EventsBookReact()
{
    const [ book, setBook ] = useState("Harry Potter");

    function handleBookChange(e, bookName)
    {
        e.preventDefault();
        
        // WIr geben bookname an setBook weiter und ändern damit den wert von book.
        setBook(bookName);
    }

    return(
        <>
            <h2>2. onClick mit Parameterübergabe</h2>

            <p>Das aktuelle buch ist: <b>{ book }</b></p>

            <a href="#" onClick={ (e) => handleBookChange(e, "Casino Royale") }>Anderes Buch anzeigen</a>
        </>
    )
}

export default EventsBookReact;
