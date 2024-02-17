export class Space {
    constructor({ id, name, type, countryId, city, address, postalCode, spaceId, createdAt }) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.countryId = countryId;
        this.city = city;
        this.address = address;
        this.postalCode = postalCode;
        this.spaceId = spaceId;
        this.createdAt = new Date(createdAt);
    }
}
