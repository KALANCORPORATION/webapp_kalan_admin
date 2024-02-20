import "../../styles/books/BooksList.css";
import React, {useEffect, useState} from 'react';
import Navbar from "../../components/NavBar";
import "../../styles/books/BooksList.css"; // Assurez-vous que ces imports sont corrects et les fichiers existent
import "../../styles/components/NavBar.css";
import NavBarAdmin from "../../components/NavBarAdmin";
import BookService from "../../services/book/bookService";


const accessToken = localStorage.getItem('accessToken');
const spaceId = localStorage.getItem('spaceId');

// Composant pour représenter un livre
function Book({title, image, description}) {
    BookService.getBooks(accessToken).then(r => console.log(r));
    return (
        <div className="book">
            <img src={image} alt={`${title} cover`} className="book-cover"/>
            <div className="book-info">
                <h2 className="book-title">{title}</h2>
                <p className="book-description">{description}</p>
            </div>
        </div>
    );
}

// Liste de livres
const BooksList = () => {
    // Sample data (add more if needed)
    const books = BookService.getBooks(accessToken).then(r => console.log(r));

    console.log(books);


    return (
        <div className="bibliothque-parent">
            <div className="book-list">
                <h1>My Book Collection</h1>
                {books.map((book, index) => (
                    <Book key={index} title={book.title} image={book.image} description={book.description}/>
                ))}
            </div>

            <NavBarAdmin/>
        </div>
    );
};

export default BooksList;
