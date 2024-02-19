
import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

import { QrReader } from 'react-qr-reader';
import { Header } from "../../components/Header";
import  NavBar  from "../../components/NavBar";
import CountryFlag from 'react-country-flag';
import Calendar from 'react-calendar';
import Select from 'react-select';

import AdherentController from '../../controllers/adherentController';
import "../../styles/adherent/CreateAdherent.css"

//library.add(faQrcode);



const generateCountryOptions = () => {
  return [
    { value: '+33',  countryCode: 'FR' },
    // Add other countries as needed
  ];
};

const defaultOption = { value: '+33', countryCode: 'FR' };





const CreateAdherent = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [dateNaissance, setDateNaissance] = useState(null);
  const [mail, setMail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedPrefixe, setSelectedPrefixe] = useState(defaultOption);



  const options = [defaultOption, ...generateCountryOptions()];

  const CustomOption = ({ innerProps, data }) => (
    <div {...innerProps}>
      <CountryFlag countryCode={data.countryCode} svg />
      <span>{data.label}</span>
    </div>
  );

  const customStyles = {
    option: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
  };


  const handleCalendarIconClick = () => {
     setShowCalendar(true);
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toLocaleDateString('fr-FR'); 
     setDateNaissance(formattedDate);
     setShowCalendar(false);
  };

  const handleCreateAdherent = () => {
    AdherentController.handleCreateAdherent(prenom, nom, dateNaissance, mail, `${selectedPrefixe.value}${telephone}`);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour soumettre le formulaire
    console.log('Formulaire soumis :', { prenom, nom, dateNaissance, mail, telephone });
  };

  const handleScanButtonClick = () => {
    setIsScanning(true);
  };

  const handleCodeScan = (value) => {
    // Vous pouvez traiter ici la valeur du code scanné si nécessaire
    console.log('Code scanné :', value);
    setScannedCode(value);
    setIsScanning(false);
  };

  return (
    <div className="container">
        
            {/* <header className="header">
                <h1 >Inscription Adherent</h1>
            </header> */}
            <Header/>
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
                            <img className="header-child" alt="" src="/qr-code 1.png" />
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

            <div className="date-container">
                <input
                    type="text"
                    value={dateNaissance}
                    onChange={(e) => setDateNaissance(e.target.value)}
                    placeholder="Date de Naissance"
                />
                <img
                    className="calendar-icon"
                    alt=""
                    src="/Group 8.png"
                    onClick={handleCalendarIconClick}
                />
                {showCalendar && (
                    <div className="calendar-popup">
                      <Calendar onChange={handleDateChange} value={dateNaissance} />
                    </div>
                )}
              </div>

              <div className="phone-container">
              <Select
                options={options}
                value={selectedPrefixe}
                onChange={(selectedOption) => setSelectedPrefixe(selectedOption)}
                placeholder={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CountryFlag countryCode={selectedPrefixe.countryCode} svg />
                    <span>{selectedPrefixe.label}</span>
                  </div>
                }
                styles={customStyles}
                components={{ Option: CustomOption }}
              />
                <input
                    type="tel"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="Téléphone"
                />
              </div>
                
                <input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder="E-mail"
                />
                <p className='text-tel'>Si vous renseigner un numéro un code de vérification sera 
                                        envoyé à ce numéro.</p> 
            </form>
            <div className="button-container">
                
                <button className='add-button' onClick={handleCreateAdherent} type="submit">
                <img className="icon-add-adherent" alt="" src="/ajouter-un-utilisateur 2.png" />
                    Ajouter</button>
            </div>
            </section>
        </main>
      <div className="footer-bar">
      </div>
      {isScanning && <QrReader onScan={handleCodeScan} />}
      <NavBar />
    </div>
  );
};

export default CreateAdherent ;