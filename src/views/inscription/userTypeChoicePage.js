import "../../styles/inscription/userTypeChoicePage.css";
import React from "react";
import { useNavigate } from 'react-router-dom';

const UserTypeChoicePage = () => {
    const history = useNavigate();

    const handleAdminClick = () => {
        history(`/auth/signup/admin`);
    };

    const handleReferentClick = () => {
        history(`/auth/signup/referent`);
    };

    return (
        <div className="user-type-choice-page-container">
            <div className="user-type-choice-page-screen">
                <h1>Vous êtes :</h1>

                {/* Bouton pour l'Administrateur */}
                <div className="user-type-button" onClick={handleAdminClick}>
                    {/*<img src="chemin/vers/icone-admin.png" alt="Icone Administrateur" />*/}
                    <button className="admin-button">Administrateur</button>
                    <h6>Je souhaite accéder à l’Espace KALAN de mon Etablissement</h6>
                </div>

                {/* Bouton pour le Référent */}
                <div className="user-type-button" onClick={handleReferentClick}>
                    {/*<img src="chemin/vers/icone-referent.png" alt="Icone Référent" />*/}
                    <button className="referent-button">Référent</button>
                    <h6>Je souhaite accéder à l’Espace KALAN pour lequel je suis le référent</h6>
                </div>

                {/* Texte "Déjà membre ? Se connecter" */}
                <div className="already-member">
                    <h4>Déjà membre ?</h4>
                    <h4 className="login-link" onClick={() => history(`/login`)}>Se connecter</h4>
                </div>
            </div>
        </div>
    );
};

export default UserTypeChoicePage;
