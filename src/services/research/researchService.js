class ResearchService {
    static async searchSpaces(queryParams, accessToken) {
        const queryString = new URLSearchParams(queryParams).toString();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/search/spaces/?${queryString}`, {
            headers: { 'Authorization': `Bearer ${accessToken}` },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la recherche des espaces');
        }
        return response.json();
    }

    static async searchUsers(queryParams, accessToken) {
        const queryString = new URLSearchParams(queryParams).toString();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/search/users/?${queryString}`, {
            headers: { 'Authorization': `Bearer ${accessToken}` },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la recherche des utilisateurs');
        }
        return response.json();
    }

    static async searchBooks(queryParams, accessToken) {
        const queryString = new URLSearchParams(queryParams).toString();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/search/books/?${queryString}`, {
            headers: { 'Authorization': `Bearer ${accessToken}` },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la recherche des livres');
        }
        return response.json();
    }

    static async searchSpaceBooks(spaceId, queryParams, accessToken) {
        const queryString = new URLSearchParams(queryParams).toString();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/search/spaces/${spaceId}/space-books?${queryString}`, {
            headers: { 'Authorization': `Bearer ${accessToken}` },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la recherche des livres dans l\'espace');
        }
        return response.json();
    }

    static async searchAdherentBorrowedBooks(queryParams, accessToken) {
        const queryString = new URLSearchParams(queryParams).toString();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/search/adherent-borrowed-books?${queryString}`, {
            headers: { 'Authorization': `Bearer ${accessToken}` },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la recherche des livres empruntés par l\'adhérent');
        }
        return response.json();
    }

    static async searchAdherentBooks(adherentId, queryParams, accessToken) {
        const queryString = new URLSearchParams(queryParams).toString();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/search/adherents/${adherentId}/adherent-books?${queryString}`, {
            headers: { 'Authorization': `Bearer ${accessToken}` },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la recherche des livres de l\'adhérent');
        }
        return response.json();
    }
}

export default ResearchService;
