import "../../styles/inscription/inscription.css";
import React from "react";
import {useNavigate} from 'react-router-dom';

const AdminRegistrationProfilInformation = () => {
    const history = useNavigate();

    const handleLoginClick = () => {
        history(`/auth/signup/admin/votre-profil`);
    };

    return (
        <div className="admin-registration-votre-profil-screen">
            <h1>Administrateur</h1>
            <h3>Votre profil</h3>
        </div>
    );
};

export default AdminRegistrationProfilInformation;
