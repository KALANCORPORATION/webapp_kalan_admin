import React from 'react';
import "../../styles/adherent/Inscription.css"
import {Header} from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import {useNavigate} from "react-router-dom";
import SpaceController from "../../controllers/space/spaceController";

const InscriptionForm = () => {
    const navigate = useNavigate();
    const spaceId = localStorage.getItem('spaceId');
    const accessToken = localStorage.getItem('accessToken');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const reformattedDate = formData.get('date').split('-').reverse().join('/');

        const adherentData = {
            mail: formData.get('email'),
            first_name: formData.get('prenom'),
            last_name: formData.get('nom'),
            birthday: reformattedDate,
            phone_number: formData.get('telephone') || null,
        };

        try {
            await SpaceController.createAdherentInSpace(spaceId, adherentData, accessToken);
            navigate('/adherents');
        } catch (error) {
            console.error('Erreur lors de la création d\'un adhérent dans l\'espace:', error);
        }
    };

    return (
        <div className="inscription-container">
            <Header />

            <form className="inscription-form" onSubmit={handleSubmit}>
                <label htmlFor="prenom">Prénom*</label>
                <input type="text" id="prenom" name="prenom" required />

                <label htmlFor="nom">Nom*</label>
                <input type="text" id="nom" name="nom" required />

                <label htmlFor="date">Date de naissance*</label>
                <input type="date" id="date" name="date" required />

                <label htmlFor="email">Mail</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="telephone">Téléphone (facultatif)</label>
                <input type="tel" id="telephone" name="telephone" />

                <div className="submit-section">
                    <button type="submit" className="submit-button">Ajouter</button>
                </div>
            </form>

            <NavBarAdmin />
        </div>
    );
};

export default InscriptionForm;
