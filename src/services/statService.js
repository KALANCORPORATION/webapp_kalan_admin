class StatService {
    static async getTopBorrowedBooks(spaceId, listSize, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/spaces/${spaceId}/top-borrowed-books?list_size=${listSize}`, {
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

    static async getTopBorrowedBooksForMonth(spaceId, listSize, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/spaces/${spaceId}/monthly-top-borrowed-books?list_size=${listSize}`, {
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

    static async getTopBorrowedBooksForWeek(spaceId, listSize, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/spaces/${spaceId}/weekly-top-borrowed-books?list_size=${listSize}`, {
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

    static async getRecentBorrowedBooks(spaceId, listSize, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/spaces/${spaceId}/recent-borrowed-books?list_size=${listSize}`, {
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

    static async getRecentAddedBooks(spaceId, listSize, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/spaces/${spaceId}/recent-added-books?list_size=${listSize}`, {
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

    static async getRecentAddedAdherents(spaceId, listSize, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/spaces/${spaceId}/recent-added-adherents?list_size=${listSize}`, {
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

    static async getRecentAddedReferents(spaceId, listSize, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/spaces/${spaceId}/recent-added-referents?list_size=${listSize}`, {
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

    static async getWeeklyStats(spaceId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/spaces/${spaceId}/weekly-stats`, {
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

export default StatService;
