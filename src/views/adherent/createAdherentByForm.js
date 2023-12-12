import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { QrReader } from 'react-qr-reader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
//import { library } from '@fortawesome/fontawesome-svg-core';
import AdherentController from '../../controllers/adherentController';
import "../../styles/CreateAdherent.css";

//library.add(faQrcode);


const CreateAdherent = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [mail, setMail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [isScanning, setIsScanning] = useState(false);


  const handleCreateAdherent = async () => {

    const adherent = { prenom, nom, dateNaissance, telephone };

    try {
      const spaceId = 1; 
      const newAdherent = await AdherentController.handleCreateAdherent(spaceId, adherent, accessToken);
      console.log('Adhérent créé avec succès:', newAdherent);

    } catch (error) {
      console.error('Erreur lors de la création de l\'adhérent:', error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis :', { prenom, nom, dateNaissance, mail, telephone });
  };

  const handleScanButtonClick = () => {
    setIsScanning(true);
  };

  const handleCodeScan = (value) => {
    console.log('Code scanné :', value);
    setScannedCode(value);
    setIsScanning(false);
  };

  return (
    <div className="container">
        
            <header className="header">
                <h1 >Inscription Adherent</h1>
            </header>
                <div>
                    <img className="logo_kalan" alt="" src="/JustTheKK 1.png" />
                </div>
        <main>
            <section>
                <div>
                <img className="logo-return" alt="" src="/Group 260.png" />
                <h2 className='info'>Informations</h2>
                    <hr  class='divider'></hr>
                </div>
                <div>
                    <div className="scan-contener">
                        <button className="scan-button" onClick={handleScanButtonClick}>
                        </button>
                        <p className="text-scan">scan carte adhérent</p>
                    </div>
                        
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
                
                <button className='add-button' onClick={handleCreateAdherent} type="button">
                <img className="icon-add-adherent" alt="" src="/ajouter-un-utilisateur 2.png" />
                    Ajouter</button>
            </div>
            </section>
        </main>
      <div className="footer-bar">
      </div>
      {isScanning && <QrReader onScan={handleCodeScan} />}

    </div>
  );
};

export default CreateAdherent ;