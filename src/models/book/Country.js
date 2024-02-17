export class Country {
    constructor({ id, name, countryCode, createdAt }) {
        this.id = id;
        this.name = name;
        this.countryCode = countryCode;
        this.createdAt = new Date(createdAt);
    }
}
