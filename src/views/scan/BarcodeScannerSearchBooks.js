import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import SpaceBookController from "../../controllers/space/spaceBookController";
import styles from"../../styles/scan/BarcodeScannerPopup.module.css"

const BarcodeScannerPopup = () => {
    const [isbn, setIsbn] = useState();
    const [scanning, setScanning] = useState(false);
    const navigate = useNavigate();
    const spaceId = localStorage.getItem('spaceId');
    const accessToken = localStorage.getItem('accessToken');

    const handleUpdate = (err, result) => {
        if (result) {
            setIsbn(result.text);
        }
    };

    const checkBookExistence = async () => {
        try {
            const allBooksResponse = await SpaceBookController.getAllSpaceBooks(spaceId, accessToken);
            if (allBooksResponse) {
                const existingBook = allBooksResponse.find(book => book.book.isbn === isbn);
                if (existingBook) {
                    navigate(`/book/${existingBook.id}`);
                }
            }
        } catch (error) {
            console.error('Error fetching all space books:', error);
        }
    };

    useEffect(() => {
        if (isbn != null && isbn.length === 13) { // ISBN-13 standard length
            setScanning(true);
            checkBookExistence();
        }
    }, [isbn]);

    return (
        <div className={styles.popupContainer}>
            <div className={styles.scannerWindow}>
                <BarcodeScannerComponent
                    width={300}
                    height={300}
                    onUpdate={handleUpdate}
                />
            </div>
            <button className={styles.closeButton} onClick={() => navigate('/books')}>X</button>
            {scanning && <p>Scanning Book...</p>}
        </div>
    );
};

export default BarcodeScannerPopup;
