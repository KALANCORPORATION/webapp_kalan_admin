import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import SpaceBookController from "../../controllers/space/spaceBookController";

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
                } else {
                    await addBookToSpace(isbn);
                    navigate('/books');
                }
            } else {
                navigate(`/book/isbn`);
            }
        } catch (error) {
            console.error('Error fetching all space books:', error);
            navigate(`/book/isbn`);
        }
    };

    const addBookToSpace = async (isbn) => {
        try {
            const response = await SpaceBookController.addIsbnBookToSpace(spaceId, { isbn }, accessToken);
            if (response.ok) {
                console.log('Book added successfully', response);
                navigate('/books');
            } else {
                navigate(`/book/isbn`);
            }
        } catch (error) {
            console.error('Error adding book by ISBN to space:', error);
            navigate(`/book/isbn`);
        }
    };

    useEffect(() => {
        if (isbn != null && isbn.length === 13) { // ISBN-13 standard length
            setScanning(true);
            checkBookExistence();
        }
    }, [isbn]);

    return (
        <div className="barcode-scanner-popup">
            <BarcodeScannerComponent onUpdate={handleUpdate} />
            {scanning && <p>Scanning Book...</p>}
        </div>
    );
};

export default BarcodeScannerPopup;
