import "../../styles/inscription/inscription.css";
import React from "react";
import {useNavigate} from 'react-router-dom';

const ReferentRegistrationIdInformation = () => {
    const history = useNavigate();

    const handleLoginClick = () => {
        history(`/auth/signup/referent/votre-identifiant`);
    };

    return (
        <div className="referent-registration-votre-identifiant-screen">
            <h1>Référent</h1>
            <h3>Votre identifiant</h3>
        </div>
    );
};

export default ReferentRegistrationIdInformation;
