import AuthorService from "../../services/author/authorService"

class AuthorController {
    static async getAllAuthors(accessToken) {
        try {
            return await AuthorService.getAllAuthors(accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération de tous les auteurs:', error);
            throw error;
        }
    }

    static async getAuthorById(authorId, accessToken) {
        try {
            return await AuthorService.getAuthorById(authorId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'auteur:', error);
            throw error;
        }
    }

    static async createAuthor(authorData, accessToken) {
        try {
            return await AuthorService.createAuthor(authorData, accessToken);
        } catch (error) {
            console.error('Erreur lors de la création de l\'auteur:', error);
            throw error;
        }
    }

    static async removeAuthor(authorId, accessToken) {
        try {
            await AuthorService.removeAuthor(authorId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'auteur:', error);
            throw error;
        }
    }
}

export default AuthorController;
