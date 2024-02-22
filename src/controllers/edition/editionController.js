import EditionService from "../../services/edition/editionService";

class EditionController {
    static async getAllEditions(accessToken) {
        try {
            return await EditionService.getAllEditions(accessToken);
        } catch (error) {
            console.error('Error fetching all editions:', error);
            throw error;
        }
    }

    static async getEditionById(editionId, accessToken) {
        try {
            return await EditionService.getEditionById(editionId, accessToken);
        } catch (error) {
            console.error('Error fetching edition by ID:', error);
            throw error;
        }
    }

    static async createEdition(editionData, accessToken) {
        try {
            return await EditionService.createEdition(editionData, accessToken);
        } catch (error) {
            console.error('Error creating edition:', error);
            throw error;
        }
    }

    static async removeEdition(editionId, accessToken) {
        try {
            await EditionService.removeEdition(editionId, accessToken);
        } catch (error) {
            console.error('Error removing edition:', error);
            throw error;
        }
    }
}

export default EditionController;
