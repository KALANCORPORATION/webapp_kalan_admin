import "../../styles/inscription/inscription.css";
import React from "react";
import {useNavigate} from 'react-router-dom';

const ReferentRegistrationIdInformation = () => {
    const history = useNavigate();

    const handleNextClick = () => {
        history(`/auth/signup/referent/votre-profil`);
    };

    return (
        <div className="referent-registration-votre-identifiant-screen">
               <h1>Vous êtes Référent</h1>
            <img className="admin-image" src="/assets/page2.png" alt="image de la barre d'étape" />

            {/* Ajout du titre "Votre nom d'utilisateur" */}
            <div className="section-header space-above">
                <h3>Votre nom d'utilisateur</h3>
            </div>

            <hr className="separator" /> {/* Ajout du trait gris clair */}

            {/* Ajout du texte h4 "Votre @nomdutilisateur est unique" */}
            <div className="info-text space bottom">
                <h4>Votre @nomdutilisateur est unique. Vous pouvez toujours le modifier ultérieurement</h4>
            </div>

            {/* Ajout du libellé "Code de votre Espace KALAN" et de l'input */}
            <div className="form-group">
                <label>Nom d'utilisateur</label>
                <input type="text" placeholder="dfady" />
            </div>

            {/* Ajout de l'espace */}
            <div className="space-document"></div>

            {/* Bouton Suivant */}
            <button className="next-button" onClick={handleNextClick}>Suivant</button>
        </div>
    );
};

export default ReferentRegistrationIdInformation;
