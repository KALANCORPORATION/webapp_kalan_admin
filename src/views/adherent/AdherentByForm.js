
import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

import { QrReader } from 'react-qr-reader';
import { Header } from "../../components/Header";
import  NavBar  from "../../components/NavBar";
import CountryFlag from 'react-country-flag';
import Calendar from 'react-calendar';
import Select from 'react-select';

import AdherentController from '../../controllers/adherent/adherentController';
import "../../styles/adherent/CreateAdherent.css"
import AuthController from '../../controllers/auth/authController'

//library.add(faQrcode);



const generateCountryOptions = () => {
  return [
    { value: '+33',  countryCode: 'FR' },
    // Add other countries as needed
  ];
};

const defaultOption = { value: '+33', countryCode: 'FR' };





const CreateAdherent = () => {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [birthday, setBirthday] = useState(null);
  const [mail, setMail] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedPrefixe, setSelectedPrefixe] = useState(defaultOption);
  const token = localStorage.getItem('accessToken');




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
     setBirthday(formattedDate);
     setShowCalendar(false);
  };

const handleCreateAdherent = async (formData) => {
  try {
      console.log('Access token:', token);
      console.log('Form data:', formData);
      return await AuthController.handleSignUp(formData, 'adherent');
      
  } catch (error) {
      console.error('Error creating book:', error.message);
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = {
    first_name,
    last_name,
    birthday,
    mail,
    phone_number,

  };
  console.log('form dtatt', formData)

  handleCreateAdherent(formData);

}

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
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                placeholder="Prénom"
                />

                <input
                type="text"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
                placeholder="Nom"
                />

            <div className="date-container">
                <input
                    type="text"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
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
                      <Calendar onChange={handleDateChange} value={birthday} />
                    </div>
                )}
              </div>

              <div className="phone-container">
              {/* <Select
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
              /> */}
                <input
                    type="tel"
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)}
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
                
                <button className='add-button' onClick={handleSubmit} type="submit">
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