import React, { useState } from 'react';
import "../../styles/books/BookISBNForm.css"
import {Header} from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import styles from "../../styles/referent/List.module.css";
import {QrReader} from "react-qr-reader";

function BookISBNForm() {
    const [isbn, setIsbn] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(isbn);
    };

    return (
        <div className="inscription-container">
            <Header />

            <form className="inscription-form" onSubmit={handleSubmit}>
                <label htmlFor="prenom">ISBN</label>
                <input type="text" id="prenom" name="prenom" required value={isbn} onChange={e => setIsbn(e.target.value)} />

                <div className="submit-section">
                    <button type="submit" className="submit-button">Ajouter</button>
                </div>
            </form>

            <NavBarAdmin />
        </div>
    );
}

export default BookISBNForm;
