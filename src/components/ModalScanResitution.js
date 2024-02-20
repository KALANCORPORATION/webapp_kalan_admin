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
    const [endDates, setEndDates] = useState({});

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

    const reformatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    const handleBorrow = async () => {
        try {
            const borrowPromises = books.map(book => {
                const formattedEndDate = endDates[book.book.id] ? reformatDate(endDates[book.book.id]) : "default_date";
                const borrowData = { adherent_id: id, end_date: formattedEndDate };
                return ReservationController.endBorrow(book.id, borrowData, accessToken);
            });

            const results = await Promise.all(borrowPromises);

            results.forEach((result, index) => {
                if (result.success) {
                    console.log(`Borrowed book successfully: ${books[index].title}`);
                } else {
                    console.error(`Failed to borrow book: ${books[index].title}`);
                }
            });

            console.log('All borrows processed');
            closeModal();
        } catch (error) {
            console.error('Error during borrowing process:', error);
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
                        {books.map((book, index) => (
                            <div key={book.book.id} className="book-list-item">
                                <img src={book.book.thumbnail_image} alt="Book Thumbnail" className="book-thumbnail" />
                                <span className="book-title">{book.book.title}</span>
                                <input
                                    type="date"
                                    value={endDates[book.book.id] || ''}
                                    onChange={(e) => setEndDates({ ...endDates, [book.book.id]: e.target.value })}
                                    className="date-picker"
                                />
                                <button onClick={() => removeBookFromList(book.book.id)} className="remove-book-button">×</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={handleBorrow} className="action-button">
                        Faire la restitution
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
