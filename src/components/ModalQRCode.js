import React from 'react';
import styles from "../styles/components/ModalQRCode.module.css";

const QRCodeModalContent = ({ referentProfile }) => {
    const birthDate = new Date(referentProfile.birthday);
    const age = new Date().getFullYear() - birthDate.getFullYear();

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h2 className={styles.modalTitle}>QR code référent</h2>
                <div className={styles.qrCodeContainer}>
                    <img src="/qrCodeDefault.png" alt="QR Code" className={styles.qrCodeImage} />
                </div>
                <div className={styles.userInfo}>
                    <p>{referentProfile.first_name} {referentProfile.last_name}</p>
                    <p>{age} ans ({referentProfile.birthday})</p>
                </div>
                <button className={styles.printButton}>Imprimer</button>
            </div>
        </div>
    );
};

export default QRCodeModalContent;
