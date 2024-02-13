import BookSpace from '../models/BookSpace';

class AddSpaceBookService {
    static async addBookToSpaceByIsbn(spaceId, isbn, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/spaces/${spaceId}/isbn-books`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: isbn,
            });

            if (response.ok) {
                const data = await response.json();
                return data;
                // return data.map(bookSpaceData => new BookSpace(bookSpaceData));
            } else {
                const errorData = await response.json();
                // return errorData;
                console.log("ERROR DATA HERE :");
                console.log(errorData)
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default AddSpaceBookService;
