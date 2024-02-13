import ReferentService from '../services/referentService';

class ReferentController {
    static async getRecentReferents(spaceId, listSize, accessToken) {
        try {
            console.log(await ReferentService.getRecentAddedReferents(spaceId, listSize, accessToken));
            return await ReferentService.getRecentAddedReferents(spaceId, listSize, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération des récents référents:', error.message);
        }
    }
}

export default ReferentController;
