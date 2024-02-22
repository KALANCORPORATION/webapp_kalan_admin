const API_URL = `${process.env.REACT_APP_URL}/api`;

class AuthorService {
    static async getAllAuthors(accessToken) {
        try {
            const response = await fetch(`${API_URL}/authors/`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getAuthorById(authorId, accessToken) {
        try {
            const response = await fetch(`${API_URL}/authors/${authorId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async createAuthor(authorData, accessToken) {
        try {
            const response = await fetch(`${API_URL}/authors/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(authorData),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async removeAuthor(authorId, accessToken) {
        try {
            const response = await fetch(`${API_URL}/authors/${authorId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default AuthorService;
