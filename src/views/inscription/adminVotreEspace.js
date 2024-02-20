import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from 'react-router-dom';

const AdminRegistrationSpaceInformation = () => {
    const history = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countryOptions, setCountryOptions] = useState([]);

    const handleNextClick = () => {
        history(`/auth/signup/admin/votre-identifiant`);
    };

    useEffect(() => {
        const fetchCountryList = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                const countries = data.map((country) => ({
                    value: country.cca2,
                    label: `${country.name.common} (${country.cca2})`,
                    flag: country.flags?.png,
                }));
                setCountryOptions(countries);
            } catch (error) {
                console.error('Error fetching country list:', error);
            }
        };

        fetchCountryList();
    }, []);

    const CustomCountryOption = ({ innerProps, label, data }) => (
        <div {...innerProps}>
            <img className="country-flag" src={data.flag} alt={`${label} flag`} />
            <span>{label}</span>
        </div>
    );

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
    };

    return (
        <div className="admin-registration-votre-espace-screen">
            <h1>Vous êtes Administrateur</h1>
            <img className="admin-image" src="/assets/page1.png" alt="image de la barre d'étape" />

        
            {/* Ajout du titre "Votre Espace" */}
            <div className="section-header space-above">
                <h3>Votre Espace</h3>
            </div>

            <hr className="separator" /> {/* Ajout du trait gris clair */}
            <div className="space"></div> {/* Ajout de l'espace */}

            <div className="form-group">
                <label>Nom de l'espace KALAN</label>
                <input type="text" placeholder="Ecole La Paix" />
            </div>

            <div className="form-group">
                <label>Type d'établissement</label>
                <div className="select-field">
                    <select>
                        <option value="" disabled selected hidden></option>
                        <option value="ecole">Ecole</option>
                        <option value="lycee">Lycée</option>
                        <option value="universite">Université</option>
                        <option value="association">Association</option>
                        <option value="orphelinat">Orphelinat</option>
                        <option value="bibliotheque">Bibliothèque</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label>Pays</label>
                <Select
                    className="country-select"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    options={countryOptions}
                    placeholder="Pays"
                    components={{ Option: CustomCountryOption }}
                />
            </div>

            <div className="form-group">
                <label>Ville</label>
                <input type="text" placeholder="Entrez votre ville" />
            </div>

            <div className="form-group">
                <label>Adresse</label>
                <input type="text" placeholder="Entrez votre adresse" />
            </div>

            <div className="form-group">
                <label>Code postal</label>
                <input type="text" pattern="[0-9]{5}" placeholder="Entrez votre code postal" />
            </div>

            <button className="next-button" onClick={handleNextClick}>Suivant</button>
        </div>
    );
};

export default AdminRegistrationSpaceInformation;
