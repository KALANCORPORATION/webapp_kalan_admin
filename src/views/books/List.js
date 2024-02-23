import React, {useEffect, useState} from 'react';
import "../../styles/books/List.css";
import {Header} from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import SearchController from "../../controllers/research/researchController";
import AuthorController from "../../controllers/author/authorController";
import SpaceBookController from "../../controllers/space/spaceBookController";
import styles from "../../styles/referent/List.module.css";
import CountryController from "../../controllers/country/countryController";
import EditionController from "../../controllers/edition/editionController";
import GenreController from "../../controllers/genre/genreController";
import BarcodeScannerPopup from "../../views/scan/BarcodeScannerPopup";
import ModalScan from "../../components/ModalScan";
import BarcodeScannerSearchBooks from "../scan/BarcodeScannerSearchBooks";
import {useNavigate} from "react-router-dom";

const List = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const token = localStorage.getItem('accessToken');
    const spaceId = localStorage.getItem('spaceId');
    const [searchResults, setSearchResults] = useState([]);
    const [isScannerModalOpen, setIsScannerModalOpen] = useState(false);
    const navigate = useNavigate();

    const openScannerModal = () => {
        setIsScannerModalOpen(true);
    };

    const navigateTo = (path) => {
        navigate(path);
    };

    const closeScannerModal = () => {
        setIsScannerModalOpen(false);
    };

    useEffect(() => {
        const fetchBooksAndAuthors = async () => {
            try {
                const fetchedBooks = await SpaceBookController.getAllSpaceBooks(spaceId, token);
                const booksWithAuthorsAndAvailability = await Promise.all(fetchedBooks.map(async (book) => {
                    try {
                        const author = await AuthorController.getAuthorById(book.book.author_id, token);
                        const country = await CountryController.getCountryById(book.book.country_id, token);
                        const edition = await EditionController.getEditionById(book.book.edition_id, token);
                        const genre = await GenreController.getGenreById(book.book.genre_id, token);
                        let nextAvailability = null;
                        if (book.status !== 'available') {
                            const availability = await SpaceBookController.getSpaceBookNextAvailability(book.id, token);
                            nextAvailability = availability.next_available_date;
                        }
                        return { ...book, book: { ...book.book, author_name: author.name, country_name: country.name, edition_name: edition.name, genre_name: genre.name }, nextAvailability };
                    } catch (error) {
                        console.error('Erreur lors de la récupération des informations supplémentaires:', error);
                        return book;
                    }
                }));
                setBooks(booksWithAuthorsAndAvailability);
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
                const queryParams = `title=${value}&description=${value}&author=${value}&country=${value}&genre=${value}&edition=${value}&isbn=${value}`;
                const users = await SearchController.searchBooks(queryParams, token);
                setSearchResults(users);
            } catch (error) {
                console.error('Erreur lors de la recherche:', error);
            }
        } else {
            setSearchResults([]);
        }
    };

    const filteredBooks = searchTerm.length > 0
        ? books.filter(book =>
            book.book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.book.isbn.includes(searchTerm) ||
            book.book.author_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.book.country_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.book.edition_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.book.genre_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : books;

    return (
        <div className="library-container">
            <Header />
            <div className="library-title-bar">
                <h1 className="library-title"><b>Les livres de l'Espace</b></h1>
                {/*<div className="tab-bar">*/}
                {/*    <button className="tab active">Tous</button>*/}
                {/*    <button className="tab">Empruntés</button>*/}
                {/*    <button className="tab">Réservés</button>*/}
                {/*</div>*/}
            </div>
            <div className="container">
                <div className="searchBar">
                    <input
                        className="searchInput"
                        placeholder="Rechercher un livre"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="searchButton">
                        <img src="loupe.png" alt="Search" className="searchIcon" />
                    </button>
                </div>
                <button onClick={openScannerModal}
                        className="qrButton">
                    <img src="/qrcodeLogo.svg" alt="Scanner" className="qrCodeIcon" />
                </button>
            </div>

            <div className="book-list">
                {filteredBooks.map((item) => (
                    <div key={item.id} className="book-item" onClick={() =>  navigateTo(`/book/${item.id}`)}>
                        <img src={item.book.thumbnail_image || `/bookImageDefault.png`} alt={item.book.title} className="book-cover" />
                        <div className="book-details">
                            <div className="book-info">
                                <h3 className="book-title">{item.book.title}</h3>
                                <p className="book-author">De: {item.book.author_name}</p>
                                <p className="book-description">{item.book.description}</p>
                            </div>
                            <div className="book-status-container">
                                <div className="book-status-text">
                                    <p className={`book-status ${item.status === 'available' ? 'available' : 'unavailable'}`}>
                                        {item.status === 'available' ? 'Disponible' : 'Emprunté'}
                                    </p>
                                    {item.nextAvailability && (
                                        <p className="book-next-availability">
                                            Prochaine disponibilité: {item.nextAvailability}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isScannerModalOpen && (
                <ModalScan onClose={closeScannerModal}>
                    <BarcodeScannerSearchBooks onClose={closeScannerModal} />
                </ModalScan>
            )}
            <NavBarAdmin />
        </div>
    );
};

export default List;
