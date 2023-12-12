class CodeISBNService {
    static async code(isbn,accessToken) {
        try {
            const dataIdUser = await fetch('http://localhost:3001/api/user/space', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
                },
            });
            const response = await fetch('http://localhost:3001/api/spaces/1/isbn_books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "space_id": dataIdUser.space_id,
                    "isbn": isbn,
                    'x-access-token': accessToken,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                return data.accessToken;
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
