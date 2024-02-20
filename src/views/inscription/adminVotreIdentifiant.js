import "../../styles/inscription/inscription.css";
import React from "react";
import {useNavigate} from 'react-router-dom';

const AdminRegistrationIdInformation = () => {
    const history = useNavigate();

    const handleLoginClick = () => {
        history(`/auth/signup/admin/votre-identifiant`);
    };

    return (
        <div className="admin-registration-votre-identifiant-screen">
            <h1>Administrateur</h1>
            <h3>Votre identifiant</h3>
        </div>
    );
};

export default AdminRegistrationIdInformation;
