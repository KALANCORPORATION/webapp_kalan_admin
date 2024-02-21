import React, {useEffect, useState} from 'react';
import "../../styles/adherent/Inscription.css"
import {Header} from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import {useNavigate, useParams} from "react-router-dom";
import SpaceController from "../../controllers/space/spaceController";
import CountryController from "../../controllers/country/countryController";
import AdherentController from "../../controllers/adherent/adherentController";

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [bio, setBio] = useState('');
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    const spaceId = localStorage.getItem('spaceId');
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        const fetchAdherentDetails = async () => {
            try {
                const adherentDetails = await AdherentController.getAdherentById(id, accessToken);
                if (adherentDetails) {
                    setPrenom(adherentDetails.first_name || '');
                    setNom(adherentDetails.last_name || '');
                    setDateNaissance(adherentDetails.birthday ? new Date(adherentDetails.birthday).toISOString().split('T')[0] : '');
                    setEmail(adherentDetails.mail || '');
                    setTelephone(adherentDetails.phone_number || '');
                    setPseudo(adherentDetails.pseudo || '');
                    setBio(adherentDetails.bio || '');
                    setSelectedCountry(adherentDetails.countryId || '');
                }
            } catch (error) {
                console.error('Error fetching adherent details:', error);
            }
        };

        const fetchCountries = async () => {
            try {
                const fetchedCountries = await CountryController.getAllCountries(accessToken);
                setCountries(fetchedCountries);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchAdherentDetails();
        fetchCountries();

    }, [id, accessToken]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const adherentData = {
            mail: email,
            first_name: prenom,
            last_name: nom,
            birthday: dateNaissance.split('-').reverse().join('/'), // Assuming you keep the reformatting
            phone_number: telephone || null,
            pseudo: pseudo,
            bio: bio,
            countryId: selectedCountry,
        };

        try {
            await AdherentController.updateAdherent(id, adherentData, accessToken);
            navigate('/adherents');
        } catch (error) {
            console.error('Erreur lors de la création d\'un adhérent dans l\'espace:', error);
        }
    };

    return (
        <div className="inscription-container">
            <Header />

            <form className="inscription-form" onSubmit={handleSubmit}>
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" name="prenom" value={prenom} onChange={e => setPrenom(e.target.value)} />

                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" name="nom" value={nom} onChange={e => setNom(e.target.value)} />

                <label htmlFor="date">Date de naissance</label>
                <input type="date" id="date" name="date" value={dateNaissance} onChange={e => setDateNaissance(e.target.value)} />

                <label htmlFor="email">Mail</label>
                <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="telephone">Téléphone (facultatif)</label>
                <input type="tel" id="telephone" name="telephone" value={telephone} onChange={e => setTelephone(e.target.value)} />

                <label htmlFor="pseudo">Pseudo</label>
                <input type="text" id="pseudo" name="pseudo" value={pseudo} onChange={e => setPseudo(e.target.value)} />

                <label htmlFor="bio">Bio</label>
                <textarea id="bio" name="bio" value={bio} onChange={e => setBio(e.target.value)} />

                <label htmlFor="country">Pays</label>
                <select id="country" name="country" value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)}>
                    <option value="">Sélectionnez un pays</option>
                    {countries.map((country) => (
                        <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                </select>

                <div className="submit-section">
                    <button type="submit" className="submit-button">Modifier</button>
                </div>
            </form>

            <NavBarAdmin />
        </div>
    );
};

export default Update;
