class EditionService {
    static async getAllEditions(accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/editions`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Error fetching editions');
        }
        return await response.json();
    }

    static async getEditionById(editionId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/editions/${editionId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Edition not found');
        }
        return await response.json();
    }

    static async createEdition(editionData, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/editions`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editionData),
        });
        if (!response.ok) {
            throw new Error('Error creating edition');
        }
        return await response.json();
    }

    static async removeEdition(editionId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/editions/${editionId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Error deleting edition');
        }
    }
}

export default EditionService;
