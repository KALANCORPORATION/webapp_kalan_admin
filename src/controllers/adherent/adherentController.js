import AdherentService from '../../services/adherent/adherentService';

class AdherentController {
    static async getAdherents(accessToken) {
        try {
            return await AdherentService.getAdherents(accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des adhérents:', error.message);
        }
    }

    static async getAdherentById(adherentId, accessToken) {
        try {
            return await AdherentService.getAdherentById(adherentId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'adhérent par ID:', error.message);
            throw error;
        }
    }

    static async getRecentAdherents(spaceId, listSize, accessToken) {
        try {
            return await AdherentService.getRecentAddedAdherents(spaceId, listSize, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des récents adhérents:', error.message);
        }
    }

    static async removeAdherent(adherentId, accessToken) {
        try {
            return await AdherentService.deleteAdherent(adherentId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'adhérent:', error.message);
            throw error;
        }
    }
}

export default AdherentController;
