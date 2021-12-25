import React from 'react';
import { useParams } from 'react-router';

const Profile = () =>
{
    const { id } = useParams(); // IchBinEinUser oder TestUser123

    const neuerUser = id.toUpperCase();
    
    return(
        <div>
            <h1>Profi von { neuerUser }</h1>

            <p>Willkommen auf dem profil von { id }</p>
        </div>
    )
}

export default Profile;
