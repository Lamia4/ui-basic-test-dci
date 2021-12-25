import React from 'react'
import ChangeCardHolder from "./ChangeCardHolder"

function CardHolder({cardHolder, logedInUser}) {
    return (
        <div>
            {cardHolder}
            {logedInUser===cardHolder?
            <ChangeCardHolder 
                logedInUser={logedInUser}
            />:
            null}
            {/* {logedInUser===cardHolder && <ChangeCardHolder/>}*/}
        </div>
    )
}

export default CardHolder
