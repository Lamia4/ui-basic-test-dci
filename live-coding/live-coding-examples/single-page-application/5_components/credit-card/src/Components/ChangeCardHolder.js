import React from 'react'
import "./ChangeCardHolder.css";

function ChangeCardHolder({logedInUser}) {

    // const showElements = {
    //     showInputField: false,
    //     showButton: true,
    // }

    const handleClick = () =>{
        //showElements.showInputField = true;
        document.getElementById("input").style.display = "block";
        //logedInUser = document.getElementById("input").value;
        //console.log("New Credit Card Owner: " + logedInUser);
    }
    return (
        <div>
            <input type="text" id="input" className="hidden"/>
            <button onClick={handleClick}>Change Card Holder</button>
        </div>
    )
}

export default ChangeCardHolder
