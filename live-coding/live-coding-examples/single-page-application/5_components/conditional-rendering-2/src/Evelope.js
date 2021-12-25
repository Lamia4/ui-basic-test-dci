import React from 'react';
import Adress from "./Adress";
import Stamp from "./Stamp";

function Evelope({fromPerson, toPerson, imageUrl, logedInUser}) { //Empfangen von BildDatei Link
    return (
        <div className="postkarte">
            <div className="absender">
                <Adress person={fromPerson}/>
                {logedInUser.fullName === fromPerson.fullName?<button>Change</button>:null}
            </div>
            <div className="empfaenger">
                <Adress person={toPerson}/>
            </div>
            <div className="briefmarke">
                <Stamp imageUrl={imageUrl}/> {/* Senden von BildDateiLink */} 
            </div>
        </div>
    )
}

export default Evelope

