import React, { useState } from 'react';

function Message({ children, isVisible, color })
{
    const [ visible, setVisible ] = useState(isVisible); // der initialwert vom state visible kommt aus der prop 

    const handleVisiblity = () =>
    {
        setVisible(false);
    }

    return(
        <div style={{
            backgroundColor: `${ color || 'cyan' }`, // color vom prop, oder default
            border: "1px solid black",
            width: "200px",
            display: `${ visible ? "block" : "none" }`, // visible vom state
            margin: "0 auto"
        }}>
            <div>
                { children }
            </div>
            <button onClick={ handleVisiblity }>Schließen</button>
        </div>
    )
}

export default Message