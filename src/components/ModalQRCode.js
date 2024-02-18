import React from 'react';
import styles from "../styles/components/ModalQRCode.module.css";

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

    return (
        <div className={styles.qrCodeModal}>
            <img src="/qrCodeDefault.png" alt="QR Code" className={styles.qrCode} />
            <h3>{referentProfile.first_name} {referentProfile.last_name}</h3>
            <p>{age} ans ({referentProfile.birthday})</p>
            <button className={styles.printButton}>Imprimer</button>
        </div>
    );
};

export default QRCodeModalContent;
