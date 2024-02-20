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

    const handlePrint = () => {
        const printWindow = window.open('', '_blank');
        const imageElement = `<img src="${qrCodeImage}" alt="QR Code" style="max-width: 100%;" />`;

        printWindow.document.write(`
            <html>
                <head>
                    <title>Print QR Code</title>
                    <style>
                        body {
                            text-align: center;
                        }
                        img {
                            margin-top: 50px;
                        }
                    </style>
                </head>
                <body>
                    <img src="${qrCodeImage}" alt="QR Code" />
                    <h3>${referentProfile.first_name} ${referentProfile.last_name}</h3>
                    <p>${age} ans (${referentProfile.birthday})</p>
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();

        printWindow.print();
        printWindow.close();
    };

    useEffect(() => {
        const fetchQRCode = async () => {
            try {
                const base64Image = await GeneratorController.generateUserQrCode(accessToken, referentProfile.id);
                setQRCodeImage(base64Image);
            } catch (error) {
                console.error('Error fetching QR code:', error.message);
            }
        };

        fetchQRCode();
    }, [referentProfile, accessToken]);

    return (
        <div className={styles.qrCodeModal}>
            <div className="print-only">
                <img src={qrCodeImage} alt="QR Code" className={styles.qrCode} />
            </div>
            <div className="no-print">
                <h3>{referentProfile.first_name} {referentProfile.last_name}</h3>
                <p>{age} ans ({referentProfile.birthday})</p>
                <button className={styles.printButton} onClick={handlePrint}>Imprimer</button>
            </div>
        </div>
    );
};

export default QRCodeModalContent;
