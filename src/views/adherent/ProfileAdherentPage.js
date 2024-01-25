import React from 'react';
import { Link } from 'react-router-dom';
import "./CreateAdherent.css"


const ProfileAdherentPage = ({ match }) => {
  // Vous pouvez utiliser les paramètres de l'URL (match.params) pour récupérer l'ID de l'adhérent si nécessaire
  // const adherentId = match.params.id;

  // Pour cet exemple, je vais utiliser des valeurs statiques, mais vous devrez probablement récupérer ces données depuis votre backend ou un état global.
  const profileData = {
    prenom: 'John',
    nom: 'Doe',
    dateNaissance: '01/01/1990',
    email: 'john.doe@example.com',
    // Ajoutez d'autres champs du profil si nécessaire
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Profil Adhérent</h1>
      </header>
      <div>
            <img className="logo_kalan" alt="" src="/JustTheKK 1.png" />
      </div>
      <div>
            <img className="logo-dropDown" alt="" src="/Group 289 (1).png" /> 
            <img className="logo-return-profile" alt="" src="/Group 260.png" /> 
            <img className="background_style" alt="" src="/Rectangle 77 (1).png" />
            <img className="profile-img" alt="" src="/Group 174 (1).png" /> 

      </div>
      <main>
        <section>
          <div className="profile-info">
            
            <button className='add-button' onClick={""} type="submit">
                <img className="icon-add-adherent" alt="" src="/ajouter-un-utilisateur 2.png" />
                    Ajouter</button>
            
            <div className='nom-prenom'>
                <p> {profileData.prenom}</p>
                <p> {profileData.nom}</p>
            </div>
            <div>
                <p className='email'> {profileData.email}</p>
                <p className='date-naissance'>{profileData.dateNaissance}</p>
            </div>
            <div className='liste-title'>
              <h2>Liste des livres</h2>
            </div>
          </div>
          <div>
            <hr className='divider'></hr>
          </div>
        </section>
      </main>
      <div className="footer-bar"></div>
    </div>
  );
};

export default ProfileAdherentPage;
