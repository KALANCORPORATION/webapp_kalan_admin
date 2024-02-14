class ShelfService {
    static async createShelf(name, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/shelves`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la création de l\'étagère');
        }
        return response.json();
    }

    static async addAdherentBookToShelf(shelfId, adherentBookId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/shelves/${shelfId}/adherent-books`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ adherentBookId }),
        });
        if (!response.ok) {
            throw new Error('Erreur lors de l\'ajout du livre à l\'étagère');
        }
        return response.json();
    }

    static async getAdherentBooksInShelf(shelfId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/shelves/${shelfId}/adherent-books`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des livres de l\'étagère');
        }
        return response.json();
    }

    static async updateShelfName(shelfId, name, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/shelves/${shelfId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la mise à jour du nom de l\'étagère');
        }
        return response.json();
    }


    static async getAllShelvesOfAdherent(accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/shelves`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des étagères de l\'adhérent');
        }
        return response.json();
    }

    static async removeAdherentBookFromShelf(shelfId, adherentBookId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/shelves/${shelfId}/adherent-books/${adherentBookId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la suppression du livre de l\'étagère');
        }
        return response.json();
    }
}

export default ShelfService
