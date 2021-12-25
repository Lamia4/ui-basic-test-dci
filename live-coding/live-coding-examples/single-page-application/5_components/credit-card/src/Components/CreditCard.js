import React from 'react';
import Bank from "./Bank";
import IBAN from "./Iban";
import Security from "./Security";
import Expiration from "./Expiration";
import CardHolder from "./CardHolder";

function CreditCard({creditCardInformation, logedInUser}) {
    return (
        <div>
            <Bank
                name={creditCardInformation.bankName}
            />
            <IBAN
                bankNumber={creditCardInformation.bankNumber}
            />
            <Security
                security={creditCardInformation.security}
            />
            <Expiration
                expiration={creditCardInformation.expirationDate}
            />
            <CardHolder
                cardHolder={creditCardInformation.cardHolder}
                logedInUser={logedInUser}
            />
        </div>
    )
}

export default CreditCard
