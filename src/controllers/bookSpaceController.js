import BookSpaceService from '../services/bookSpaceService';

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
}

export default BookSpaceController;
