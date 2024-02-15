import StatService from '../services/statService';

class StatController {
    static async getStats(spaceId, statType, accessToken) {
        try {
            switch(statType) {
                case 'topBorrowedBooks':
                    return await StatService.getTopBorrowedBooks(spaceId, accessToken);
                case 'topBorrowedBooksForMonth':
                    return await StatService.getTopBorrowedBooksForMonth(spaceId, accessToken);
                case 'topBorrowedBooksForWeek':
                    return await StatService.getTopBorrowedBooksForWeek(spaceId, accessToken);
                case 'recentBorrowedBooks':
                    return await StatService.getRecentBorrowedBooks(spaceId, accessToken);
                case 'recentAddedBooks':
                    return await StatService.getRecentAddedBooks(spaceId, accessToken);
                case 'recentAddedAdherents':
                    return await StatService.getRecentAddedAdherents(spaceId, accessToken);
                case 'recentAddedReferents':
                    return await StatService.getRecentAddedReferents(spaceId, accessToken);
                case 'weeklyStats':
                    return await StatService.getWeeklyStats(spaceId, accessToken);
                default:
                    throw new Error('Invalid statistics type');
            }
        } catch (error) {
            console.error('Error fetching statistics:', error);
            throw error;
        }
    }
}

export default StatController;
