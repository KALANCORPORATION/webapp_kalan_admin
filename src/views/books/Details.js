import React, {useEffect, useState} from 'react';
import "../../styles/books/Details.module.css";
import NavBarAdmin from "../../components/NavBarAdmin";
import {Header} from "../../components/Header";
import {useParams, useNavigate} from "react-router-dom";
import SpaceBookController from "../../controllers/space/spaceBookController";

const BookDetails = () => {
    const { id } = useParams();
    const [bookDetails, setBookDetails] = useState(null);
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();

    const [readMore, setReadMore] = useState(false);

    const handleReadMoreToggle = () => {
        setReadMore(!readMore);
    };

    const handleDeleteBook = async () => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            try {
                await SpaceBookController.removeSpaceBook(id, accessToken);
                alert('Book deleted successfully');
                navigate('/books');
            } catch (error) {
                alert('Error deleting book:', error);
            }
        }
    };

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await SpaceBookController.getSpaceBookById(id, accessToken);
                setBookDetails(response);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBookDetails();
    }, [id, accessToken]);

    if (!bookDetails) return <div>Loading...</div>;

    console.log(bookDetails);

    return (
        <div>
            <Header />
            <div className="book-detail-container">
                <div className="book-cover-container">
                    <img src={bookDetails.book.thumbnail_image || `/bookImageDefault.png`} alt={bookDetails.book.title} className="book-cover" />
                </div>
                <div className="book-info">
                    <h1 className="book-title">{bookDetails.book.title}</h1>
                    <h2 className="book-author">De: {bookDetails.book.author.name}</h2>
                    <p className="book-summary">{bookDetails.book.description}</p>
                    <p className="book-language">Langue: {bookDetails.book.country.name}</p>
                    <p className="book-publisher">Éditeur: {bookDetails.book.edition.name}</p>
                    <p className="book-publisher">Genre: {bookDetails.book.genre.name}</p>
                    {/*<p className="book-availability">{bookDetails.availableDate}</p>*/}
                </div>
            </div>
            <button className="delete-button" onClick={handleDeleteBook}>
                Supprimer
            </button>
            <NavBarAdmin />
        </div>
    );
};

export default BookDetails;
