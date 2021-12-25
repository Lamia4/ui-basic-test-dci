import './App.css';

// Referenz: https://reactjs.org/docs/hooks-reference.html#useeffect

// Zuerst importieren wir useState und useEffect von React
import React, { useState, useEffect } from 'react';

function App()
{
    // als nächsten erstellen wir einen state für unseren seitentitel.
    const [ pageTitle, setPageTitle ] = useState("Unsere tolle App");

    // Wir erstellen einen state für den counter
    const [ counter, setCounter ] = useState(0);

    // Wir erstellen einen state für die daten aus dem fetch
    const [ data, setData ] = useState({});
    
    // Wir erstellen einen state für den ladestatus des fetch, den wir mit true initialisieren
    const [ loading, setLoading ] = useState(true);

    // jetzt bauen wir einen useEffect hook, um den seiten-effekt zu nutzen.
    useEffect(() =>
    {
        document.title = "Hallo Welt!"; // Die seite hat jetzt einen anderen titel

        console.log("KOMPONENT GELADEN: Dies hier wird nur beim laden des komponenten angezeigt");

        console.log("COUNTER GELADEN:", counter);

        // Wenn wir etwas zum unmount ausführen wollen, schreiben wir es in eine anonyme return funktion
        return () =>
        {
            console.log("KOMPONENT ENTLADEN: Hier wird aufgeräumt");
        }

    }, []); // Wird nur zum laden des komponenten ausgeführt

    useEffect(() =>
    {
        // document.title = pageTitle;

        console.log("KOMPONENT VERÄNDERT: Dies hier wird immer ausgeführt")
    }); // wird konstant ausgeführt, egal was passiert

    // Dieser seiteneffekt wird nur ausgelöst, wenn der pageTitle sich verändert
    useEffect(() =>
    {
        document.title = pageTitle;

        console.log("PAGETITLE VERÄNDERT: Dies wird nur ausgeführt, wenn pageTitle verändert wird!");

    }, [pageTitle]); // wird nur neu ausgelöst, wenn pageTitle verändert wird.

    // Dieser seiteneffekt wird nur ausgelöst, wenn der counter sich verändert
    useEffect(() =>
    {
        console.log("COUNTER VERÄNDERT:", counter);
    }, [counter]);

    /*
        Was genau macht also diese array?
        - Wenn wir keine array einfügen, wird der effekt bei jedem neu rendern ausgeführt
        - Wenn wir eine leere array einfügen, wird der effekt nur einmal, beim laden des komponenten ausgeführt
        - Wenn wir props oder states in die array einfügen, wird der effekt nur ausgelöst, wenn sich diese ändern.
    */

    // Ändert den seitentitel
    const changePageTitle = (e) =>
    {
        setPageTitle("Wir haben den titel verändert!");
    }

    // Inkrementiert die nummer des counters
    const increaseNumber = (e) =>
    {
        setCounter(prevcount => prevcount + 1);
    }

    // Der typische fetch request in react:
    useEffect(() =>
    {
        console.log("Hier werden unsere daten geladen");

        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            setData(json);
            setLoading(false);
        })
    }, []);
 
    return (
        <div className="App">
            Hallo Welt!!!!!!

            <br/>

            <button onClick={ (e) => changePageTitle(e) }>Change Page title</button>

            <br/>

            <button onClick={(e) => increaseNumber(e) }>+</button>

            <br />
            <br />

            {
                !loading ?
                (
                <>
                    <h3>Post: { data.id }</h3>
                    <ul>
                        <li>User ID: { data.userId }</li>
                        <li>Title: { data.title }</li>
                        <li>Completed: { data.completed ? "true" : "false" }</li>
                    </ul>
                </>
                )
                :
                (
                    <h3>Loading...</h3>
                )
            }
        </div>
    );
}

export default App;
