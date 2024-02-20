import React, {useEffect, useState} from 'react';
import "../styles/scan/ModalScanEmprunt.css"
import styles from "../styles/scan/BarcodeScannerPopup.module.css";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {useNavigate} from "react-router-dom";
import SpaceBookController from "../controllers/space/spaceBookController";

const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    const [isbn, setIsbn] = useState();
    const [books, setBooks] = useState([]);
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
                    setBooks(prevBooks => [...prevBooks, existingBook.book]);
                } else {
                    console.log('Book does not exist.');
                }
            }
        } catch (error) {
            console.error('Error fetching all space books:', error);
        }
    };

    const removeBookFromList = (bookId) => {
        setBooks(books.filter(book => book.id !== bookId));
    };

    useEffect(() => {
        if (isbn != null && isbn.length === 13) { // ISBN-13 standard length
            setScanning(true);
            checkBookExistence();
        }
    }, [isbn]);

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>Scanner le code bar</h2>
                    <button onClick={closeModal} className="close-button">×</button>
                </div>
                <div className="modal-body">
                    <div className={styles.scannerWindow}>
                        <BarcodeScannerComponent
                            width={300}
                            height={300}
                            onUpdate={handleUpdate}
                        />
                    </div>
                    <div className="book-list">
                        {/* Exemple de bouton de liste */}
                        <div className="book-list">
                            {books.map((book, index) => (
                                <div key={book.id} className="book-list-item">
                                    <img src={book.thumbnail_image} alt="Book Thumbnail" className="book-thumbnail" />
                                    <span className="book-title">{book.title}</span>
                                    <button onClick={() => removeBookFromList(book.id)} className="remove-book-button">×</button>
                                </div>
                            ))}
                        </div>
                        {/* Répétez pour chaque élément de la liste */}
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="action-button">
                        Faire l'emprunt
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
