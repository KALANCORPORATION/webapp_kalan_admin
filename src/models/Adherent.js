class Adherent {
    constructor(data) {
        this.id = data.id;
        this.pseudo = data.pseudo;
        this.firstName = data.first_name;
        this.lastName = data.last_name;
        this.mail = data.mail;
        this.bio = data.bio || null;
        this.password = data.password || null;
        this.birthday = data.birthday ? new Date(data.birthday) : null;
        this.phoneNumber = data.phone_number;
        this.imagePath = data.image_path || null;
        this.backgroundPath = data.background_path || null;
        this.creatorReferentId = data.creator_referent_id;
        this.updatedAt = data.updated_at ? new Date(data.updated_at) : null;
        this.createdAt = data.created_at ? new Date(data.created_at) : null;
    }
}

export default Adherent;
