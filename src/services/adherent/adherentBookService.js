import AdherentBook from '../../models/adherent/AdherentBook';

class AdherentBookService {
    static async addNewBookToAdherent(bookData, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/adherent-books`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(bookData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const addedBook = await response.json();
            return new AdherentBook(addedBook.id, addedBook.status, addedBook.adherent, addedBook.book);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async addThumbnailImageToAdherentBook(adherentBookId, imageFile, accessToken) {
        try {
            const formData = new FormData();
            formData.append('image', imageFile);

            const response = await fetch(`${process.env.REACT_APP_URL}/api/adherent-books/${adherentBookId}/thumbnail-image`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getAdherentBooks(accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/adherent-books`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const adherentBooksData = await response.json();
            return adherentBooksData.map(bookData => new AdherentBook(bookData.id, bookData.status, bookData.adherent, bookData.book));
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async removeAdherentBook(adherentBookId, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/adherent-books/${adherentBookId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getAdherentBookById(adherentBookId, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/adherent-books/${adherentBookId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const adherentBook = await response.json();
            return new AdherentBook(adherentBook.id, adherentBook.status, adherentBook.adherent, adherentBook.book);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getAllAdherentBorrowedBooks(accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/adherent-borrowed-books`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const borrowedBooksData = await response.json();
            return borrowedBooksData.map(bookData => new AdherentBook(bookData.id, bookData.status, bookData.adherent, bookData.book));
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getAdherentBorrowedBookById(spaceBookId, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/adherent-borrowed-books/${spaceBookId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const borrowedBook = await response.json();
            return new AdherentBook(borrowedBook.id, borrowedBook.status, borrowedBook.adherent, borrowedBook.book);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async addIsbnBookToAdherent(isbnData, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/adherent-books/isbn`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(isbnData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const addedBook = await response.json();
            return new AdherentBook(addedBook.id, addedBook.status, addedBook.adherent, addedBook.book);
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

export default AdherentBookService;
