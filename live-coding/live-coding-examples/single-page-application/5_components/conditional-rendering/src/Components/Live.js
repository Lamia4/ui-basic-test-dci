import React from 'react';
import SubComponent from "./SubComponent";
import DCILogo from "../Pictures/dci.png";

function Live({persons}) {
    return (
        <div>
            <div>
                Dein Name lautet {persons.firstName} {persons.lastName}
            </div>
            <div>
                <SubComponent imageURL={DCILogo}/>
            </div>
        </div>
    )
}

export default Live
