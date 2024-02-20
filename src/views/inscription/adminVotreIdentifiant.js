import React from "react";
import { useNavigate } from 'react-router-dom';

const AdminRegistrationIdInformation = () => {
    const history = useNavigate();

    const handleNextClick = () => {
        history(`/auth/signup/admin/votre-profil`);
    };

    return (
        <div className="admin-registration-votre-identifiant-screen">
            <h1>Vous êtes Administrateur</h1>
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

            {/* Ajout du libellé "Nom d'utilisateur" et de l'input */}
            <div className="form-group">
                <label>Nom d'utilisateur</label>
                <input type="text" placeholder="Entrez votre nom d'utilisateur" />
            </div>

            {/* Ajout de l'espace */}
            <div className="space-document"></div>

            {/* Ajout du texte h4 "Veuillez charger un document justificatif..." */}
            <div className="centered-text">
                <h4>Veuillez charger un document justificatif de votre statut de Responsable d’organisme (directeur, président, ...)</h4>
            </div>

            {/* Ajout de l'image */}
            <img className="document-image" src="/assets/document.png" alt="document justificatif" />


            {/* Bouton Suivant */}
            <button className="next-button" onClick={handleNextClick}>Suivant</button>
        </div>
    );
};

export default AdminRegistrationIdInformation;
