export default class Shelf {
    constructor({ id, name, adherentId, updatedAt, createdAt }) {
        this.id = id;
        this.name = name;
        this.adherentId = adherentId;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }
}
