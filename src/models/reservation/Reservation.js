export default class Reservation {
    constructor({ id, adherentId, referentId, spaceBookId, startDate, endDate, status, createdAt }) {
        this.id = id;
        this.adherentId = adherentId;
        this.referentId = referentId;
        this.spaceBookId = spaceBookId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.createdAt = createdAt;
    }
}
