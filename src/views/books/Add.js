import React, {useEffect, useState} from 'react';
import "../../styles/books/BookISBNForm.css"
import {Header} from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import {useLocation, useNavigate} from "react-router-dom";
import CountryController from "../../controllers/country/countryController";
import GenreController from "../../controllers/genre/genreController";
import SpaceBookController from "../../controllers/space/spaceBookController";

function BookAdd() {
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [datePublication, setDatePublication] = useState('');
    const [edition, setEdition] = useState('');
    const [resume, setResume] = useState('');
    const [countries, setCountries] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');
    const spaceId = localStorage.getItem('spaceId');

    const location = useLocation(); // Initialize useLocation

    useEffect(() => {
        const fetchLists = async () => {
            const countries = await CountryController.getAllCountries(accessToken);
            setCountries(countries);
            const genres = await GenreController.getAllGenres(accessToken);
            setGenres(genres);
        };
        fetchLists();

        const queryParams = new URLSearchParams(location.search);
        const isbnParam = queryParams.get('isbn');
        if (isbnParam) setIsbn(isbnParam);
    }, [location]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(isbn);

        let formattedDate = datePublication ? new Date(datePublication).toLocaleDateString('fr-CA', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).split('-').reverse().join('/') : '';

        const bookData = {
            title,
            description: resume,
            author_name: author,
            publication_date: formattedDate,
            country_id: parseInt(selectedCountry, 10),
            genre_id: parseInt(selectedGenre, 10),
            edition_name: edition,
            isbn
        };

        try {
            await SpaceBookController.addNewBookToSpace(spaceId, bookData, accessToken);
            navigate('/books');
        } catch (error) {
            console.error('Error adding new book to space:', error);
        }
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    return (
        <div className="inscription-container">
            <Header />

            <form className="inscription-form" onSubmit={handleSubmit}>
                <label htmlFor="title">Titre</label>
                <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)} />

                <label htmlFor="author">Auteur</label>
                <input type="text" id="author" name="author" value={author} onChange={e => setAuthor(e.target.value)} />

                <label htmlFor="genre">Genre</label>
                <select id="genre" name="genre" value={selectedGenre} onChange={handleGenreChange}>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="date">Date de publication</label>
                <input type="date" id="date" name="date" value={datePublication} onChange={e => setDatePublication(e.target.value)} />

                <label htmlFor="edition">Édition</label>
                <input type="text" id="edition" name="edition" value={edition} onChange={e => setEdition(e.target.value)} />

                <label htmlFor="resume">Résumé</label>
                <input type="text" id="resume" name="resume" value={resume} onChange={e => setResume(e.target.value)} />

                <label htmlFor="country">Country</label>
                <select id="country" name="country" value={selectedCountry} onChange={handleCountryChange}>
                    {countries.map((country) => (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                    ))}
                </select>

                <div className="submit-section">
                    <button type="submit" className="submit-button">Ajouter</button>
                </div>
            </form>

            <NavBarAdmin />
        </div>
    );
}

export default BookAdd;
