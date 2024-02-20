import "../../styles/inscription/inscription.css";
import React from "react";
import {useNavigate} from 'react-router-dom';

const ReferentRegistrationProfilInformation = () => {
    const history = useNavigate();

    const handleLoginClick = () => {
        history(`/auth/signup/referent/votre-profil`);
    };

    return (
        <div className="referent-registration-votre-profil-screen">
            <h1>Référent</h1>
            <h3>Votre profil</h3>
        </div>
    );
};

export default ReferentRegistrationProfilInformation;
