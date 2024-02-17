export class Author {
    constructor({ id, name, profilImagePath, createdAt }) {
        this.id = id;
        this.name = name;
        this.profilImagePath = profilImagePath;
        this.createdAt = new Date(createdAt);
    }
}
