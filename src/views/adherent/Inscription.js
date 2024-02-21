import React, {useState} from 'react';
import "../../styles/adherent/Inscription.css"
import {Header} from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import {useNavigate} from "react-router-dom";
import SpaceController from "../../controllers/space/spaceController";
import AdherentController from "../../controllers/adherent/adherentController";
import styles from "../../styles/referent/List.module.css";
import {QrReader} from "react-qr-reader";

const InscriptionForm = () => {
    const navigate = useNavigate();
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [scannedReferent, setScannedReferent] = useState(null);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const spaceId = localStorage.getItem('spaceId');
    const accessToken = localStorage.getItem('accessToken');

    const populateFormWithAdherentData = (adherentData) => {
        setPrenom(adherentData.first_name);
        setNom(adherentData.last_name);
        setDateNaissance(adherentData.birthday || '');
        setEmail(adherentData.mail);
        setTelephone(adherentData.phone_number);
    };

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

    const handleScan = async (data) => {
        if (data) {
            let cleanedText = data.text.replace(/@/g, '');
            try {
                const qrData = JSON.parse(cleanedText);
                if (qrData && qrData.user_id) {
                    const adherentData = await AdherentController.getAdherentById(qrData.user_id, accessToken);
                    if (adherentData) {
                        populateFormWithAdherentData(adherentData);
                        setIsCameraOpen(false);
                    }
                }
            } catch (error) {
                console.error('Error processing QR code:', error);
            }
        }
    };

    const startScanning = () => {
        setIsCameraOpen(true);
    };

    const handleError = (error) => {
        console.error(error);
    };

    const getTabStyle = (path) => {
        return location.pathname === path ? `${styles.tab} ${styles.active}` : styles.tab;
    };

    const closeCameraPopup = () => {
        setIsCameraOpen(false);
    };

    return (
        <div className="inscription-container">
            <Header />

            <form className="inscription-form" onSubmit={handleSubmit}>
                <label htmlFor="prenom">Prénom*</label>
                <input type="text" id="prenom" name="prenom" required value={prenom} onChange={e => setPrenom(e.target.value)} />

                <label htmlFor="nom">Nom*</label>
                <input type="text" id="nom" name="nom" required value={nom} onChange={e => setNom(e.target.value)} />

                <label htmlFor="date">Date de naissance*</label>
                <input type="date" id="date" name="date" required value={dateNaissance} onChange={e => setDateNaissance(e.target.value)} />

                <label htmlFor="email">Mail</label>
                <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="telephone">Téléphone (facultatif)</label>
                <input type="tel" id="telephone" name="telephone" value={telephone} onChange={e => setTelephone(e.target.value)} />

                <div className="submit-section">
                    <button type="submit" className="submit-button">Ajouter</button>
                    <img src="/img_4.png" alt="Scan QR Code" onClick={startScanning} className="qr-code-icon" />
                </div>
            </form>

            {isCameraOpen && (
                <div className={styles.cameraPopup}>
                    <QrReader
                        delay={50}
                        constraints={{ facingMode: 'environment', focusMode: 'continuous'}}
                        onResult={handleScan}
                        onError={handleError}
                        style={{ width: '100%' }}
                    />
                    <button onClick={closeCameraPopup}>Fermer</button>
                </div>
            )}

            <NavBarAdmin />
        </div>
    );
};

export default InscriptionForm;
