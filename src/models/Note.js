export class Note {
    constructor({ id, adherentId, bookId, note, title, description, createdAt }) {
        this.id = id;
        this.adherentId = adherentId;
        this.bookId = bookId;
        this.note = note;
        this.title = title;
        this.description = description;
        this.createdAt = new Date(createdAt);
    }
}
