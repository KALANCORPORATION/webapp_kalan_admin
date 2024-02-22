class GenreService {
    static async getAllGenres(accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/genres`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Error fetching genres');
        }
        return await response.json();
    }

    static async getGenreById(genreId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/genres/${genreId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Genre not found');
        }
        return await response.json();
    }

    static async createGenre(genreData, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/genres`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(genreData),
        });
        if (!response.ok) {
            throw new Error('Error creating genre');
        }
        return await response.json();
    }

    static async removeGenre(genreId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/genres/${genreId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Error deleting genre');
        }
    }
}

export default GenreService;
