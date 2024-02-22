import GenreService from "../../services/genre/genreService";

class GenreController {
    static async getAllGenres(accessToken) {
        try {
            return await GenreService.getAllGenres(accessToken);
        } catch (error) {
            console.error('Error fetching all genres:', error);
            throw error;
        }
    }

    static async getGenreById(genreId, accessToken) {
        try {
            return await GenreService.getGenreById(genreId, accessToken);
        } catch (error) {
            console.error('Error fetching genre by ID:', error);
            throw error;
        }
    }

    static async createGenre(genreData, accessToken) {
        try {
            return await GenreService.createGenre(genreData, accessToken);
        } catch (error) {
            console.error('Error creating genre:', error);
            throw error;
        }
    }

    static async removeGenre(genreId, accessToken) {
        try {
            await GenreService.removeGenre(genreId, accessToken);
        } catch (error) {
            console.error('Error removing genre:', error);
            throw error;
        }
    }
}

export default GenreController;
