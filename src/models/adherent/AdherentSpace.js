export class AdherentSpace {
    constructor({ id, adherentId, spaceId, createdAt }) {
        this.id = id;
        this.adherentId = adherentId;
        this.spaceId = spaceId;
        this.createdAt = new Date(createdAt);
    }
}
