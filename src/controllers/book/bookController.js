import BookService from '../../services/book/bookService';
import CircularJSON from 'circular-json';

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

    // static async addBook(bookData, accessToken) {
    //     try {
    //         const token = localStorage.getItem('accessToken');
    //         return await BookService.addBook(bookData, accessToken, token);
    //     } catch (error) {
    //         console.error('Erreur lors de l\'ajout d\'un nouveau livre:', error.message);
    //         throw error;
    //     }
    // }

    static async addBook(bookData) {
        console.log('token B')
        try {
          const token = localStorage.getItem('accessToken');
          console.log('token A', token);
    
          return await BookService.addBook(bookData, token);

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
