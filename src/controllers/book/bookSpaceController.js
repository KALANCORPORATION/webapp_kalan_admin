import BookSpaceService from '../../services/book/bookSpaceService';

class BookSpaceController {
    static async getRecentBooks(spaceId, listSize, accessToken) {
        try {
            const recentBooks = await BookSpaceService.getRecentBorrowedBooks(spaceId, listSize, accessToken);
            console.log('Liste des livres récemment ajoutés:', recentBooks);
            return recentBooks;
        } catch (error) {
            console.error('Erreur lors de la récupération des livres récemment ajoutés:', error.message);
        }
    }

    static async addNewBookToSpace(spaceId, bookData, accessToken) {
        try {
            const response = await SpaceBookService.addNewBookToSpace(spaceId, bookData, accessToken);
            console.log('New book added to space successfully', response);
            return response;
        } catch (error) {
            console.error('Error adding new book to space:', error);
            throw error;
        }
    }
}

export default BookSpaceController;
