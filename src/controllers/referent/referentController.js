import ReferentService from "../../services/referent/referentService";

class ReferentController {
    static async getRecentReferents(spaceId, listSize, accessToken) {
        try {
            return await ReferentService.getRecentAddedReferents(spaceId, listSize, accessToken);
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

    static async deleteReferent(referentId, accessToken) {
        try {
            return await ReferentService.deleteReferent(referentId, accessToken);
        } catch (error) {
            console.error(`Erreur lors de la suppression du référent (${referentId}):`, error.message);
            throw error;
        }
    }

    static async updateReferent(referentId, referentData, accessToken) {
        try {
            const updatedReferent = await ReferentService.updateReferent(referentId, referentData, accessToken);
            console.log('Référent mis à jour:', updatedReferent);
            return updatedReferent;
        } catch (error) {
            console.error('Erreur lors de la mise à jour du référent:', error.message);
            throw error;
        }
    }
}

export default ReferentController;
