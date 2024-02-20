import React, {useEffect, useState} from 'react';
import "../styles/scan/ModalScanEmprunt.css"
import styles from "../styles/scan/BarcodeScannerPopup.module.css";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {useNavigate} from "react-router-dom";
import SpaceBookController from "../controllers/space/spaceBookController";
import ReservationController from "../controllers/reservation/reservationController";

const Modal = ({id, isOpen, closeModal }) => {
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
                    setBooks(prevBooks => [...prevBooks, existingBook]);
                } else {
                    console.log('Book does not exist.');
                }
            }
        } catch (error) {
            console.error('Error fetching all space books:', error);
        }
    };

    const removeBookFromList = (bookId) => {
        setBooks(books.filter(book => book.book.id !== bookId));
    };

    const handleBorrow = async () => {
        try {
            // Map each book to a borrow creation promise
            const borrowPromises = books.map(book => {
                const borrowData = { adherent_id: id, end_date: "28/02/2024" }; // Replace with your actual adherent_id data structure
                return ReservationController.createBorrow(book.id, borrowData, accessToken);
            });

            // Wait for all borrow attempts to complete
            const results = await Promise.all(borrowPromises);

            // Handle the results of each promise (success or failure)
            results.forEach((result, index) => {
                if (result.success) {
                    console.log(`Borrowed book successfully: ${books[index].title}`);
                } else {
                    console.error(`Failed to borrow book: ${books[index].title}`);
                }
            });

            // All done, navigate or close modal as needed
            console.log('All borrows processed');
            closeModal(); // Close the modal if needed
            // navigate('/path-after-borrowing'); // Navigate to another page if needed
        } catch (error) {
            console.error('Error during borrowing process:', error);
            // Handle error, maybe set an error state and show a message to the user
        }
    };

    // const addBookToSpace = async (isbn) => {
    //     try {
    //         const response = await SpaceBookController.addIsbnBookToSpace(spaceId, { isbn }, accessToken);
    //         if (response.ok) {
    //             console.log('Book added successfully', response);
    //             navigate('/books');
    //         } else {
    //             navigate(`/book/isbn`);
    //         }
    //     } catch (error) {
    //         console.error('Error adding book by ISBN to space:', error);
    //         navigate(`/book/isbn`);
    //     }
    // };

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
                                <div key={book.book.id} className="book-list-item">
                                    <img src={book.book.thumbnail_image} alt="Book Thumbnail" className="book-thumbnail" />
                                    <span className="book-title">{book.book.title}</span>
                                    <button onClick={() => removeBookFromList(book.book.id)} className="remove-book-button">×</button>
                                </div>
                            ))}
                        </div>
                        {/* Répétez pour chaque élément de la liste */}
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={handleBorrow} className="action-button">
                        Faire l'emprunt
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
