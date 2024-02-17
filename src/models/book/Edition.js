export class Edition {
    constructor({ id, name, createdAt }) {
        this.id = id;
        this.name = name;
        this.createdAt = new Date(createdAt);
    }
}
