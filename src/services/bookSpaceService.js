import BookSpace from '../models/BookSpace';

class BookSpaceService {
    static async getRecentBooks(spaceId, listSize, accessToken) {
        try {
            const response = await fetch(`http://localhost:3001/api/spaces/${spaceId}/recent-books?list_size=${listSize}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                return data.map(bookSpaceData => new BookSpace(bookSpaceData));
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default BookSpaceService;
