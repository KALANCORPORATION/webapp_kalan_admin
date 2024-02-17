import SpaceService from '../../services/space/spaceService';
import AdherentBookService from "../../services/adherent/adherentBookService";

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

    static async getAllSpaceInvitations(spaceId, adherentId, accessToken) {
        try {
            return await SpaceService.getAllSpaceInvitations(spaceId, adherentId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des invitations de l\'espace:', error.message);
            throw error;
        }
    }

    static async getAllSpaceReservations(spaceId, accessToken) {
        try {
            return await SpaceService.getAllSpaceReservations(spaceId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des réservations de l\'espace:', error.message);
            throw error;
        }
    }

    static async getSpaceCode(spaceId, accessToken) {
        try {
            return await SpaceService.getSpaceCode(spaceId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération du space code de l\'espace :', error.message);
            throw error;
        }
    }

    static async refreshSpaceCode(spaceId, accessToken) {
        try {
            return await SpaceService.getSpaceCode(spaceId, accessToken);
        } catch (error) {
            console.error('Erreur lors du refresh du code de l\'espace :', error.message);
            throw error;
        }
    }

    static async getAllSpaces(accessToken) {
        try {
            return await SpaceService.addAdherentToSpace(accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération de tous les espaces :', error.message);
            throw error;
        }
    }

    static async getSpaceById(spaceId, accessToken) {
        try {
            return await SpaceService.getSpaceById(spaceId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'espace :', error.message);
            throw error;
        }
    }

    static async createSpace(data, accessToken) {
        try {
            return await SpaceService.getSpaceById(data, accessToken);
        } catch (error) {
            console.error('Erreur lors de la création de l\'espace :', error.message);
            throw error;
        }
    }

    static async updateSpace(spaceId, data, accessToken) {
        try {
            return await SpaceService.updateSpace(spaceId, data, accessToken);
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'espace :', error.message);
            throw error;
        }
    }

    static async removeSpace(spaceId, accessToken) {
        try {
            return await SpaceService.removeSpace(spaceId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'espace :', error.message);
            throw error;
        }
    }

    static async getAllAdherentsForSpace(spaceId, accessToken) {
        try {
            return await SpaceService.getAllAdherentsForSpace(spaceId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération de tous les adhérents d\'un espace :', error.message);
            throw error;
        }
    }

    static async getAllReferentsForSpace(spaceId, accessToken) {
        try {
            return await SpaceService.getAllReferentsForSpace(spaceId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération de tous les référents d\'un espace :', error.message);
            throw error;
        }
    }
}

export default SpaceController;
