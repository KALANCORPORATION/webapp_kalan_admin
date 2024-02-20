import "../../styles/inscription/inscription.css";
import React from "react";
import {useNavigate} from 'react-router-dom';

const ReferentRegistrationEstablishmentInformation = () => {
    const history = useNavigate();

    const handleLoginClick = () => {
        history(`/auth/signup/referent/votre-etablissement`);
    };

    return (
        <div className="referent-registration-votre-etablissement-screen">
            <h1>Référent</h1>
            <h3>Votre établissement</h3>
        </div>
    );
};

export default ReferentRegistrationEstablishmentInformation;
