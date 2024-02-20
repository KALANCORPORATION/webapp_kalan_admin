import Book from "../../models/book/Book";

class BookService {
    static async getBooks(accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/books`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const booksData = await response.json();
            return booksData.map(bookData => new Book(bookData));
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getBookById(bookId, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/books/${bookId}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const bookData = await response.json();
            return new Book(bookData);
        } catch (error) {
            throw new Error(error.message);
        }
    }



    // static async addBook(bookData, accessToken) {
    //     try {
    //         const response = await fetch(`${process.env.REACT_APP_URL}/api/books`, {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${accessToken}`,
    //             },
    //             body: JSON.stringify(bookData),
    //         });

    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             throw new Error(errorData.message);
    //         }

    //         const addedBookData = await response.json();
    //         return new Book(addedBookData);
    //     } catch (error) {
    //         throw new Error(error.message);
    //     }
    // }

     static async addBook(bookData, accessToken) {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/api/books`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      // Vous pouvez directement renvoyer la réponse JSON ici
      const addedBookData = await response.json();
      return addedBookData;
    } catch (error) {
      throw new Error(error.message);
    }
  }


    static async deleteBook(bookId, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/books/${bookId}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            return true;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default BookService;
