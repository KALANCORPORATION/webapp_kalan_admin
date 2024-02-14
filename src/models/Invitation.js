export default class Invitation {
    constructor({ id, referent_id, space_id, status, updated_at, created_at }) {
        this.id = id;
        this.referent_id = referent_id;
        this.space_id = space_id;
        this.status = status;
        this.updated_at = updated_at;
        this.created_at = created_at;
    }
}
