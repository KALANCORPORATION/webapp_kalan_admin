import "../../styles/inscription/inscription.css";
import React from "react";
import {useNavigate} from 'react-router-dom';

const ReferentRegistration = () => {
    const history = useNavigate();

    const handleLoginClick = () => {
        history(`/auth/signup/referent`);
    };

    return (
        <div className="referent-registration-screen">

        </div>
    );
};

export default ReferentRegistration;
