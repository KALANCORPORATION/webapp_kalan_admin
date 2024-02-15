import SpaceService from '../services/spaceService';
import AdherentBookService from "../services/adherentBookService";

class SpaceController {
    static async getWeeklyStats(spaceId, accessToken) {
        try {
            return await SpaceService.getWeeklyStats(spaceId, accessToken);
        } catch (error) {
            throw new Error(`Error in HomeController: ${error.message}`);
        }
    }

    static async getSpaceId(accessToken) {
        try {
            const space = await SpaceService.getUserSpace(accessToken);
            return space.id;
        } catch (error) {
            throw new Error(`Error in UserController: ${error.message}`);
        }
    }

    static async removeAdherentFromSpace(spaceId, adherentId, accessToken) {
        try {
            await SpaceService.removeAdherentFromSpace(spaceId, adherentId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la suppression d\'un adhérent d\'un espace:', error.message);
            throw error;
        }
    }

    static async removeReferentFromSpace(spaceId, referentId, accessToken) {
        try {
            await SpaceService.removeReferentFromSpace(spaceId, referentId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la suppression d\'un référent d\'un espace:', error.message);
            throw error;
        }
    }


    static async createAdherentInSpace(spaceId, adherentData, accessToken) {
        try {
            return await SpaceService.createAdherentInSpace(spaceId, adherentData, accessToken);
        } catch (error) {
            console.error('Erreur lors de la création d\'un adhérent dans l\'espace:', error.message);
            throw error;
        }
    }

    static async addAdherentToSpace(spaceId, adherentId, accessToken) {
        try {
            return await SpaceService.addAdherentToSpace(spaceId, adherentId, accessToken);
        } catch (error) {
            console.error('Erreur lors de l\'ajout d\'un adhérent à l\'espace:', error.message);
            throw error;
        }
    }
}

export default SpaceController;
