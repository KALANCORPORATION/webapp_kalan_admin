import ShelfService from '../../services/shelf/shelfService';
import AdherentService from "../../services/adherent/adherentService";

class ShelfController {
    static async createShelf(name, accessToken) {
        try {
            return await ShelfService.createShelf(name, accessToken);
        } catch (error) {
            console.error('Erreur lors de la création de l\'étagère:', error);
            throw error;
        }
    }

    static async addAdherentBookToShelf(shelfId, adherentBookId, accessToken) {
        try {
            return await ShelfService.addAdherentBookToShelf(shelfId, adherentBookId, accessToken);
        } catch (error) {
            console.error('Erreur lors de l\'ajout du livre à l\'étagère:', error);
            throw error;
        }
    }

    static async getAdherentBooksInShelf(shelfId, accessToken) {
        try {
            return await ShelfService.getAdherentBooksInShelf(shelfId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des livres de l\'étagère:', error);
            throw error;
        }
    }

    static async updateShelfName(shelfId, name, accessToken) {
        try {
            return await ShelfService.updateShelfName(shelfId, name, accessToken);
        } catch (error) {
            console.error('Erreur lors de la mise à jour du nom de l\'étagère:', error);
            throw error;
        }
    }

    static async getAllShelvesOfAdherent(accessToken) {
        try {
            return await ShelfService.getAllShelvesOfAdherent(accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des étagères de l\'adhérent:', error);
            throw error;
        }
    }

    static async removeAdherentBookFromShelf(shelfId, adherentBookId, accessToken) {
        try {
            return await ShelfService.removeAdherentBookFromShelf(shelfId, adherentBookId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'adhérent:', error.message);
            throw error;
        }
    }
}

export default ShelfController;
