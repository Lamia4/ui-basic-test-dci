import React from 'react';

// Wir importieren useHistory aus react-router-dom
import { useHistory } from 'react-router-dom';

const NotFound = () =>
{
    // jetzt setzen wir den useHistory hook auf die variable history;
    const history = useHistory();

    return(
        <div>
            <h1>404</h1>

            <p>Seite nicht gefunden!</p>

            {/* bei push können wir eintragen, auf welche seite wir den benutzer leiten wollen */}
            <button onClick={ () => history.push("/") }>Zurück zur Startseite</button>

            <br />

            <button onClick={ () => history.push("/contacts") }>Zur Kontaktseite</button>

            <br />

            {/* Mit .goBack(); können wir eine seite zurück springen */}
            <button onClick={ () => history.goBack() }>Zur vorherigen Seite</button>

            <br />

            {/* Mit .goForward(); können wir eine seite vorwärts springen */}
            <button onClick={ () => history.goForward() }>Zur nächsten Seite</button>
        </div>
    )
}

export default NotFound;
