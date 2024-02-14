import AdherentBookService from '../services/adherentBookService';

class AdherentBookController {
    static async addNewBookToAdherent(bookData, accessToken) {
        try {
            return await AdherentBookService.addNewBookToAdherent(bookData, accessToken);
        } catch (error) {
            console.error('Erreur lors de l\'ajout du livre à l\'adhérent:', error.message);
            throw error;
        }
    }

    static async addThumbnailImageToAdherentBook(adherentBookId, imageFile, accessToken) {
        try {
            await AdherentBookService.addThumbnailImageToAdherentBook(adherentBookId, imageFile, accessToken);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'image de couverture au livre adhérent:', error.message);
            throw error;
        }
    }

    static async getAdherentBooks(accessToken) {
        try {
            return await AdherentBookService.getAdherentBooks(accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des livres adhérents:', error.message);
            throw error;
        }
    }

    static async removeAdherentBook(adherentBookId, accessToken) {
        try {
            await AdherentBookService.removeAdherentBook(adherentBookId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la suppression du livre adhérent:', error.message);
            throw error;
        }
    }

    static async getAdherentBookById(adherentBookId, accessToken) {
        try {
            return await AdherentBookService.getAdherentBookById(adherentBookId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération du livre adhérent par ID:', error.message);
            throw error;
        }
    }

    static async getAllAdherentBorrowedBooks(accessToken) {
        try {
            return await AdherentBookService.getAllAdherentBorrowedBooks(accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des livres empruntés par l\'adhérent:', error.message);
            throw error;
        }
    }

    static async getAdherentBorrowedBookById(spaceBookId, accessToken) {
        try {
            return await AdherentBookService.getAdherentBorrowedBookById(spaceBookId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération du livre emprunté par ID:', error.message);
            throw error;
        }
    }

    static async addIsbnBookToAdherent(isbnData, accessToken) {
        try {
            return await AdherentBookService.addIsbnBookToAdherent(isbnData, accessToken);
        } catch (error) {
            console.error('Erreur lors de l\'ajout du livre par ISBN à l\'adhérent:', error.message);
            throw error;
        }
    }
}

export default AdherentBookController;
