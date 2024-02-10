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
            <div>
              <div className='block-button'>
              
                    <img className="icon_email" alt="" src="/Group 250 (4).png" onClick={""} type="submit" />

                <button className='button' onClick={""} type="submit">
                    <img className="icon" alt="" src="/ajouter 1 (2).png" />
                    emprunt
                </button>
                <button className='button' onClick={""} type="submit"> 
                    <img className="icon" alt="" src="/ajouter 1 (2).png" />
                    reservetion
                </button>
              </div>
              <div className='nom-prenom'>
                <p> {profileData.prenom}</p>
                <p> {profileData.nom}</p>
              </div>
              <div>
                <p className='email'> {profileData.email}</p>
                <p className='date-naissance'>{profileData.dateNaissance}</p>
              </div>
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
