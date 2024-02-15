class StatService {
    static async fetchStat(url, accessToken) {
        const response = await fetch(url, {
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

    static getTopBorrowedBooks(spaceId, accessToken) {
        return this.fetchStat(`${process.env.REACT_APP_URL}/spaces/${spaceId}/top-borrowed-books`, accessToken);
    }

    static getTopBorrowedBooksForMonth(spaceId, accessToken) {
        return this.fetchStat(`${process.env.REACT_APP_URL}/spaces/${spaceId}/monthly-top-borrowed-books`, accessToken);
    }

    static getTopBorrowedBooksForWeek(spaceId, accessToken) {
        return this.fetchStat(`${process.env.REACT_APP_URL}/spaces/${spaceId}/weekly-top-borrowed-books`, accessToken);
    }

    static getRecentBorrowedBooks(spaceId, accessToken) {
        return this.fetchStat(`${process.env.REACT_APP_URL}/spaces/${spaceId}/recent-borrowed-books`, accessToken);
    }

    static getRecentAddedBooks(spaceId, accessToken) {
        return this.fetchStat(`${process.env.REACT_APP_URL}/spaces/${spaceId}/recent-added-books`, accessToken);
    }

    static getRecentAddedAdherents(spaceId, accessToken) {
        return this.fetchStat(`${process.env.REACT_APP_URL}/spaces/${spaceId}/recent-added-adherents`, accessToken);
    }

    static getRecentAddedReferents(spaceId, accessToken) {
        return this.fetchStat(`${process.env.REACT_APP_URL}/spaces/${spaceId}/recent-added-referents`, accessToken);
    }

    static getWeeklyStats(spaceId, accessToken) {
        return this.fetchStat(`${process.env.REACT_APP_URL}/spaces/${spaceId}/weekly-stats`, accessToken);
    }
}

export default StatService;
