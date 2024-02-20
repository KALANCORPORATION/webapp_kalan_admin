import "../../styles/inscription/inscription.css";
import React from "react";
import {useNavigate} from 'react-router-dom';

const ReferentRegistrationEstablishmentInformation = () => {
    const history = useNavigate();

    const handleNextClick = () => {
        history(`/auth/signup/referent/votre-identifiant`);
    };

    return (
        <div className="referent-registration-votre-etablissement-screen">
               <h1>Vous êtes Référent</h1>
            <img className="admin-image" src="/assets/page1.png" alt="image de la barre d'étape" />

            {/* Ajout du titre "Votre établissement" */}
            <div className="section-header space-above">
                <h3>Votre établissement</h3>
            </div>

            <hr className="separator" /> {/* Ajout du trait gris clair */}

            {/* Ajout du texte h4 "Votre code unique" */}
            <div className="info-text space bottom">
                <h4>Veuillez renseigner le code unique de votre Espace KALAN afin de créer vos accès Référent.</h4>
            </div>

            {/* Ajout du libellé "Code de votre Espace KALAN" et de l'input */}
            <div className="form-group">
                <label>Code de votre Espace KALAN</label>
                <input type="text" placeholder="HBX45TR..." />
            </div>

            {/* Ajout de l'espace */}
            <div className="space-document"></div>

            {/* Bouton Suivant */}
            <button className="next-button" onClick={handleNextClick}>Suivant</button>
        </div>
    );
};

export default ReferentRegistrationEstablishmentInformation;
