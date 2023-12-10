
import React, { useState } from 'react';
//import { QrReader } from 'react-qr-reader';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQrcode } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
import AdherentController from '../../controllers/adherentController';
import "./CreateAdherent.css"

//library.add(faQrcode);


const CreateAdherent = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [mail, setMail] = useState('');
  const [telephone, setTelephone] = useState('');


  const handleCreateAdherent = () => {
    AdherentController.handleCreateAdherent(prenom, nom, dateNaissance, mail, telephone);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour soumettre le formulaire
    console.log('Formulaire soumis :', { prenom, nom, dateNaissance, mail, telephone });
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Inscription Adherent</h1>
      </header>

      <main>
        <section>
          <div>
          <h2 className='info'>Informations</h2>
          <hr class="divider"></hr>
          </div>
          <form className="form" onSubmit={handleSubmit}>

            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Prénom"
            />

            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Nom"
            />

            <input
              type="text"
              value={dateNaissance}
              onChange={(e) => setDateNaissance(e.target.value)}
              placeholder="Date de Naissance"
            />  

            <input
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="E-mail"
            />

            <input
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="Téléphone"
            />
          </form>
          <div className="button-container">
              <button className='add-button' onClick={handleCreateAdherent} type="submit">Ajouter</button>
          </div>
        </section>
      </main>

      <div className="footer-bar">
    
        <p>&copy; 2023 Mon Site. Tous droits réservés.</p>
      </div>

      {/* {isScanning && <QrReader onScan={handleCodeScan} />} */}

    </div>
  );
};

export default CreateAdherent ;