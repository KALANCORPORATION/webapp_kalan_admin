class Book {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.authorId = data.author_id;
        this.publicationDate = data.publication_date ? new Date(data.publication_date) : null;
        this.thumbnailPath = data.thumbnail_path || null;
        this.countryId = data.country_id;
        this.genreId = data.genre_id;
        this.editionId = data.edition_id;
        this.isbn = data.isbn;
        this.createdAt = data.created_at ? new Date(data.created_at) : null;
    }
}

export default Book;
