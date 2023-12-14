import Book from "./Book";

class BookSpace {
    constructor(data) {
        this.id = data.id;
        this.spaceId = data.space_id;
        this.status = data.status;
        this.book = new Book(data.book);
    }
}

export default BookSpace;
