import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/inscription/inscription.css";
import axios from "axios";

const ReferentRegistrationProfilInformation = () => {

    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState({ code: '', number: '' });
    const [motDePasse, setMotDePasse] = useState("");
    const [confirmMotDePasse, setConfirmMotDePasse] = useState("");
    const [indicatifs, setIndicatifs] = useState([]);
    const history = useNavigate();
  
    useEffect(() => {
      // Fetch des indicatifs téléphoniques depuis l'API
      axios.get("https://restcountries.com/v3/all")
        .then((response) => {
          const countries = response.data;
          const countryCodes = countries.map(country => ({
              code: country.cca2,
              name: country.translations.fr || country.name.common,
              flag: `https://www.countryflags.io/${country.cca2}/flat/64.png`,
              callingCode: getCallingCode(country) // Appel de la fonction pour récupérer l'indicatif téléphonique
            }));
          setIndicatifs(countryCodes);
        })
        .catch((error) => console.error("Erreur lors du chargement des indicatifs téléphoniques :", error));
    }, []);
    
    const getCallingCode = (country) => {
      if (country?.callingCodes && country.callingCodes.length > 0) {
        return `+${country.callingCodes[0]}`; // Récupérer le premier indicatif téléphonique s'il existe
      }
      return ''; // Retourner une chaîne vide si aucun indicatif téléphonique n'est trouvé
    };
    
    const handleRegistrationClick = () => {
      console.log(indicatifs); // Ajout du console.log pour vérifier les indicatifs
      if (!validateEmail(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
      }
      if (!validateTelephone(telephone)) {
        alert("Veuillez entrer un numéro de téléphone valide.");
        return;
      }
      // Vérification du reste des données et envoi du formulaire si tout est valide
      history("/");
    };
    
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
  
    const validateTelephone = (telephone) => {
      // Expression régulière pour valider le numéro de téléphone au format international
      const regex = /^\+\d{1,3}\d{6,14}$/;
      
      // Combine le code de pays et le numéro de téléphone sans aucun espace
      const phoneNumber = telephone.code.replace(/\s/g, '') + telephone.number.replace(/\s/g, '');
  
      return regex.test(phoneNumber);
  };

    return (
        <div className="referent-registration-votre-profil-screen">
      <h1>Vous êtes Référent</h1>
      <img
        className="admin-image"
        src="/assets/page3.png"
        alt="image de la barre d'étape"
      />

      <div className="section-header space-above">
        <h3>Votre profil</h3>
      </div>

      <hr className="separator" />

      {/* Formulaire d'inscription */}
      <div className="form-group">
        <label>Prénom</label>
        <input
          type="text"
          placeholder="Entrez votre prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Nom</label>
        <input
          type="text"
          placeholder="Entrez votre nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Date de naissance</label>
        <input
          type="date"
          placeholder="Entrez votre date de naissance"
          value={dateNaissance}
          onChange={(e) => setDateNaissance(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Mail</label>
        <input
          type="email"
          placeholder="Entrez votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Téléphone</label>
        <div className="phone-input">
          <select
            value={telephone.code}
            onChange={(e) => setTelephone({ ...telephone, code: e.target.value })}
          >
            {indicatifs.map((indicatif) => (
              <option key={indicatif.code} value={indicatif.code}>
                <img src={indicatif.flag} alt={indicatif.name} className="country-flag" />
                {indicatif.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Entrez votre numéro de téléphone"
            value={telephone.number}
            onChange={(e) => setTelephone({ ...telephone, number: e.target.value })}
          />
        </div>
      </div>
      <p className="verification-code-text">
        Un code de vérification sera envoyé à ce numéro
      </p>
      <div className="form-group">
        <label>Mot de passe</label>
        <input
          type="password"
          placeholder="Entrez votre mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Confirmez votre mot de passe</label>
        <input
          type="password"
          placeholder="Confirmez votre mot de passe"
          value={confirmMotDePasse}
          onChange={(e) => setConfirmMotDePasse(e.target.value)}
        />
      </div>

      {/* Bouton "S'inscrire" */}
      <button className="registration-button" onClick={handleRegistrationClick}>
        S'inscrire
      </button>
    </div>
  );
};

export default ReferentRegistrationProfilInformation;
