class SpaceBookService {
    static async addIsbnBookToSpace(spaceId, isbnData, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/spaces/${spaceId}/isbn-books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(isbnData),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
        return await response.json();
    }

    static async addNewBookToSpace(spaceId, bookData, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/spaces/${spaceId}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(bookData),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
        return await response.json();
    }

    static async setThumbnailImageToSpaceBook(spaceBookId, imageData, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/space-books/${spaceBookId}/thumbnail-image`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            body: imageData,
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
        return await response.json();
    }

    static async getAllSpaceBooks(spaceId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/spaces/${spaceId}/books`, {
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
    }

    static async getSpaceBookById(spaceBookId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/space-books/${spaceBookId}`, {
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
    }

    static async removeSpaceBook(spaceBookId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/space-books/${spaceBookId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    }

    static async getSpaceBookNextAvailability(spaceBookId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/space-books/${spaceBookId}/next-availability`, {
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
    }
}

export default SpaceBookService;
