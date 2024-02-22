import React, {useEffect, useState} from 'react';
import "../../styles/books/List.css";
import {Header} from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import styles from "../../styles/referent/List.module.css";
import BookSpaceController from "../../controllers/space/spaceBookController";
import SearchController from "../../controllers/research/researchController";
import AuthorController from "../../controllers/author/authorController";

const List = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const token = localStorage.getItem('accessToken');
    const spaceId = localStorage.getItem('spaceId');

    useEffect(() => {
        const fetchBooksAndAuthors = async () => {
            try {
                const fetchedBooks = await BookSpaceController.getAllSpaceBooks(spaceId, token);
                const booksWithAuthors = await Promise.all(fetchedBooks.map(async (book) => {
                    try {
                        const author = await AuthorController.getAuthorById(book.book.author_id, token);
                        return { ...book, book: { ...book.book, author_name: author.name } };
                    } catch (error) {
                        console.error('Erreur lors de la récupération de l\'auteur:', error);
                        return book;
                    }
                }));
                setBooks(booksWithAuthors);
            } catch (error) {
                console.error('Erreur lors de la récupération des livres de l\'espace:', error);
            }
        };

        fetchBooksAndAuthors();
    }, [token, spaceId]);

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
            <div className="library-title-bar">
                <h1 className="library-title"><b>Les livres de l'Espace</b></h1>
                <div className="tab-bar">
                    <button className="tab active">Tous</button>
                    <button className="tab">Empruntés</button>
                    <button className="tab">Réservés</button>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.searchBar}>
                    <input
                        className={styles.searchInput}
                        placeholder="Rechercher un livre"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className={styles.searchButton}>
                        <img src="loupe.png" alt="Search" className={styles.searchIcon} />
                    </button>

                </div>
            </div>


            <div className="book-list">
                {books.map((item) => (
                    <div key={item.book.id} className="book-item">
                        <img src={item.book.thumbnail_image || `/img_5.png`} alt={item.book.title} className="book-cover" />
                        <div className="book-info">
                            <h3 className="book-title">{item.book.title}</h3>
                            <p className="book-author">De: {item.book.author_name}</p>
                            <p className="book-description">{item.book.description}</p>
                            {/* Display availability and other book details */}
                        </div>
                    </div>
                ))}
            </div>
            <NavBarAdmin />
        </div>
    );
};

export default List;
