import AdherentService from '../services/adherentService';

class AdherentController {
    static async getAdherents(accessToken) {
        try {
            return await AdherentService.getAdherents(accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des adhérents:', error.message);
        }
    }

    static async getRecentAdherents(spaceId, listSize, accessToken) {
        try {
            return await AdherentService.getRecentAddedAdherents(spaceId, listSize, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des récents adhérents:', error.message);
        }
    }
}

export default AdherentController;
