export class AdherentBookShelf {
    constructor({ id, adherentBookId, shelfId, status, createdAt }) {
        this.id = id;
        this.adherentBookId = adherentBookId;
        this.shelfId = shelfId;
        this.status = status;
        this.createdAt = createdAt;
    }
}
