import BookService from '../../services/book/bookService';

class BookController {
    static async getBooks(accessToken) {
        try {
            return await BookService.getBooks(accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des livres:', error.message);
            throw error;
        }
    }

    static async getBookById(bookId, accessToken) {
        try {
            return await BookService.getBookById(bookId, accessToken);
        } catch (error) {
            console.error(`Erreur lors de la récupération du livre par ID (${bookId}):`, error.message);
            throw error;
        }
    }

    static async addBook(bookData, accessToken) {
        try {
            return await BookService.addBook(bookData, accessToken);
        } catch (error) {
            console.error('Erreur lors de l\'ajout d\'un nouveau livre:', error.message);
            throw error;
        }
    }

    static async deleteBook(bookId, accessToken) {
        try {
            return await BookService.deleteBook(bookId, accessToken);
        } catch (error) {
            console.error(`Erreur lors de la suppression du livre (${bookId}):`, error.message);
            throw error;
        }
    }
}

export default BookController;
