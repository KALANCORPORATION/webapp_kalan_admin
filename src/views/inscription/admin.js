import "../../styles/inscription/inscription.css";
import React from "react";
import {useNavigate} from 'react-router-dom';

const AdminRegistration = () => {
    const history = useNavigate();

    const handleLoginClick = () => {
        history(`/auth/signup/admin`);
    };

    return (
        <div className="admin-registration-screen">
            
        </div>
    );
};

export default AdminRegistration;
