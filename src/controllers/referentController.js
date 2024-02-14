import ReferentService from "../services/referentService";

class ReferentController {
    static async getRecentReferents(spaceId, listSize, accessToken) {
        try {
            return await ReferentService.getRecentReferents(spaceId, listSize, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des récents référents:', error.message);
        }
    }
    
    static async getReferentById(referentId, accessToken) {
        try {
            return await ReferentService.getReferentById(referentId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des adhérents:', error.message);
        }
    }
}

export default ReferentController;
