import React, {useEffect, useState} from 'react';
import styles from "../styles/components/ModalQRCode.module.css";
import GeneratorController from "../controllers/generator/generatorController";

const calculateAge = (birthday) => {
    const birthDate = new Date(birthday.split('/').reverse().join('/'));
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

const QRCodeModalContent = ({ referentProfile }) => {
    const age = calculateAge(referentProfile.birthday);
    const [qrCodeImage, setQRCodeImage] = useState('/qrCodeDefault.png');
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        const fetchQRCode = async () => {
            try {
                const base64Image = await GeneratorController.generateUserQrCode(accessToken);
                setQRCodeImage(base64Image);
            } catch (error) {
                console.error('Error fetching QR code:', error.message);
            }
        };

        fetchQRCode();
    }, [referentProfile, accessToken]);

    return (
        <div className={styles.qrCodeModal}>
            <img src={qrCodeImage} alt="QR Code" className={styles.qrCode} />
            <h3>{referentProfile.first_name} {referentProfile.last_name}</h3>
            <p>{age} ans ({referentProfile.birthday})</p>
            <button className={styles.printButton} onClick={() => window.print()}>Imprimer</button>
        </div>
    );
};

export default QRCodeModalContent;
