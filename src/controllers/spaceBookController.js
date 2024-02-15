import SpaceBookService from '../services/spaceBookService';

class SpaceBookController {
    static async addIsbnBookToSpace(spaceId, isbnData, accessToken) {
        try {
            const response = await SpaceBookService.addIsbnBookToSpace(spaceId, isbnData, accessToken);
            console.log('Book added successfully', response);
            return response;
        } catch (error) {
            console.error('Error adding book by ISBN to space:', error);
            throw error;
        }
    }

    static async addNewBookToSpace(spaceId, bookData, accessToken) {
        try {
            const response = await SpaceBookService.addNewBookToSpace(spaceId, bookData, accessToken);
            console.log('New book added to space successfully', response);
            return response;
        } catch (error) {
            console.error('Error adding new book to space:', error);
            throw error;
        }
    }

    static async setThumbnailImageToSpaceBook(spaceBookId, imageData, accessToken) {
        try {
            const response = await SpaceBookService.setThumbnailImageToSpaceBook(spaceBookId, imageData, accessToken);
            console.log('Thumbnail image set to space book successfully', response);
            return response;
        } catch (error) {
            console.error('Error setting thumbnail image to space book:', error);
            throw error;
        }
    }

    static async getAllSpaceBooks(spaceId, accessToken) {
        try {
            const response = await SpaceBookService.getAllSpaceBooks(spaceId, accessToken);
            console.log('Fetched all space books successfully', response);
            return response;
        } catch (error) {
            console.error('Error fetching all space books:', error);
            throw error;
        }
    }

    static async getSpaceBookById(spaceBookId, accessToken) {
        try {
            const response = await SpaceBookService.getSpaceBookById(spaceBookId, accessToken);
            console.log('Fetched space book by ID successfully', response);
            return response;
        } catch (error) {
            console.error('Error fetching space book by ID:', error);
            throw error;
        }
    }

    static async removeSpaceBook(spaceBookId, accessToken) {
        try {
            await SpaceBookService.removeSpaceBook(spaceBookId, accessToken);
            console.log('Space book removed successfully');
        } catch (error) {
            console.error('Error removing space book:', error);
            throw error;
        }
    }
}

export default SpaceBookController;
