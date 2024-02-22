import React, {useState} from 'react';
import "../../styles/books/List.css";
import {Header} from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import styles from "../../styles/referent/List.module.css";
import {QrReader} from "react-qr-reader";
import SearchController from "../../controllers/research/researchController"; // Assurez-vous que le chemin est correct

const List = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const token = localStorage.getItem('accessToken');

    const books = [
        { id: 1, title: "Penser l'Afrique qui vient", author: "Nicolas Sarkozy", available: true },
        { id: 1, title: "Penser l'Afrique qui vient", author: "Nicolas Sarkozy", available: true },

        // Ajoutez d'autres livres ici
    ];

    const handleSearchChange = async (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 2) {
            try {
                const pseudoParams = `pseudo=${value}`;
                const users = await SearchController.searchUsers(pseudoParams, token);
                setSearchResults(users);
            } catch (error) {
                console.error('Erreur lors de la recherche:', error);
            }
        } else {
            setSearchResults([]);
        }
    };

    // const filteredReferents = searchTerm.length > 0
    //     ? referents.filter(r =>
    //         r.pseudo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         `${r.first_name} ${r.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
    //     )
    //     : referents;

    return (
        <div className="library-container">
            <Header />
            <div className="category-bar">
                <h2 className="library-title"><b>Les livres de l'Espace</b></h2>
                <div className="categories">
                    <button className="category active">Tous</button>
                    <button className="category">Empruntés</button>
                    <button className="category">Réservés</button>
                </div>
                <button className="filter-button">
                    <img src="filtreLogo.svg" alt="Filter" className="filter-icon" />
                </button>
            </div>
            <div className={styles.container}>
                <div className={styles.searchBar}>
                    <input
                        className={styles.searchInput}
                        placeholder="Rechercher un référent"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className={styles.searchButton}>
                        <img src="loupe.png" alt="Search" className={styles.searchIcon} />
                    </button>

                </div>
            </div>


            <div className="book-list">
                {books.map((book) => (
                    <div key={book.id} className="book-item">
                        <img src={`/img_5.png`} alt={book.title} className="book-cover" />
                        <div className="book-info">
                            <h3 className="book-title">{book.title}</h3>
                            <p className="book-author">De: {book.author}</p>
                            <p className="book-description">L'étranger est un roman écrit par Albert Camus...</p> {/* Ajout de la description */}
                            <p className={`book-status ${book.available ? 'available' : 'unavailable'}`}>
                                {book.available ? 'disponible le 18/02/22' : 'indisponible'} {/* Mise à jour du statut */}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <NavBarAdmin />
        </div>
    );
};

export default List;
