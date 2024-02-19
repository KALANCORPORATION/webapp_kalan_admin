export class SpaceCode {
    constructor({ id, spaceId, code, createdAt }) {
        this.id = id;
        this.spaceId = spaceId;
        this.code = code;
        this.createdAt = new Date(createdAt);
    }
}
