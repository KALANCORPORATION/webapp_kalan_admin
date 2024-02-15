import StatService from '../services/statService';

class StatController {
    static async getTopBorrowedBooks(spaceId, listSize, accessToken) {
        try {
            return await StatService.getTopBorrowedBooks(spaceId, listSize, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des livres les plus empruntés:', error.message);
            throw error;
        }
    }

    static async getTopBorrowedBooksForMonth(spaceId, listSize, accessToken) {
        try {
            return await StatService.getTopBorrowedBooksForMonth(spaceId, listSize, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des livres les plus empruntés pour le mois:', error.message);
            throw error;
        }
    }

    static async getTopBorrowedBooksForWeek(spaceId, listSize, accessToken) {
        try {
            return await StatService.getTopBorrowedBooksForWeek(spaceId, listSize, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des livres les plus empruntés pour la semaine:', error.message);
            throw error;
        }
    }

    static async getRecentBorrowedBooks(spaceId, listSize, accessToken) {
        try {
            return await StatService.getRecentBorrowedBooks(spaceId, listSize, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des derniers emprunts:', error.message);
            throw error;
        }
    }

    static async getRecentAddedBooks(spaceId, listSize, accessToken) {
        try {
            return await StatService.getRecentAddedBooks(spaceId, listSize, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des derniers livres ajoutés:', error.message);
            throw error;
        }
    }

    static async getRecentAddedAdherents(spaceId, listSize, accessToken) {
        try {
            return await StatService.getRecentAddedAdherents(spaceId, listSize, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des derniers adhérents ajoutés:', error.message);
            throw error;
        }
    }

    static async getRecentAddedReferents(spaceId, listSize, accessToken) {
        try {
            return await StatService.getRecentAddedReferents(spaceId, listSize, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des derniers référents ajoutés:', error.message);
            throw error;
        }
    }

    static async getWeeklyStats(spaceId, accessToken) {
        try {
            return await StatService.getWeeklyStats(spaceId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des statistiques hebdomadaires:', error.message);
            throw error;
        }
    }
}

export default StatController;
