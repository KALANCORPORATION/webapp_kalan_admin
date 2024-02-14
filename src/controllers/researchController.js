import ResearchService from '../services/researchService';

class ResearchController {
    static async searchSpaces(queryParams, accessToken) {
        try {
            const spaces = await ResearchService.searchSpaces(queryParams, accessToken);
            console.log('Espaces trouvés:', spaces);
            return spaces;
        } catch (error) {
            console.error('Erreur lors de la recherche des espaces:', error);
            throw error;
        }
    }

    static async searchUsers(queryParams, accessToken) {
        try {
            const users = await ResearchService.searchUsers(queryParams, accessToken);
            console.log('Utilisateurs trouvés:', users);
            return users;
        } catch (error) {
            console.error('Erreur lors de la recherche des utilisateurs:', error);
            throw error;
        }
    }

    static async searchBooks(queryParams, accessToken) {
        try {
            const books = await ResearchService.searchBooks(queryParams, accessToken);
            console.log('Livres trouvés:', books);
            return books;
        } catch (error) {
            console.error('Erreur lors de la recherche des livres:', error);
            throw error;
        }
    }

    static async searchSpaceBooks(spaceId, queryParams, accessToken) {
        try {
            const books = await ResearchService.searchSpaceBooks(spaceId, queryParams, accessToken);
            console.log('Livres dans l\'espace trouvés:', books);
            return books;
        } catch (error) {
            console.error('Erreur lors de la recherche des livres dans l\'espace:', error);
            throw error;
        }
    }

    static async searchAdherentBorrowedBooks(queryParams, accessToken) {
        try {
            const books = await ResearchService.searchAdherentBorrowedBooks(queryParams, accessToken);
            console.log('Livres empruntés par l\'adhérent trouvés:', books);
            return books;
        } catch (error) {
            console.error('Erreur lors de la recherche des livres empruntés par l\'adhérent:', error);
            throw error;
        }
    }

    static async searchAdherentBooks(adherentId, queryParams, accessToken) {
        try {
            const books = await ResearchService.searchAdherentBooks(adherentId, queryParams, accessToken);
            console.log('Livres de l\'adhérent trouvés:', books);
            return books;
        } catch (error) {
            console.error('Erreur lors de la recherche des livres de l\'adhérent:', error);
            throw error;
        }
    }
}

export default ResearchController;
