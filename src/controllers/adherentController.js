import AdherentService from '../services/adherentService';

class AdherentController {
    static async getAdherents(accessToken) {
        try {
            const adherents = await AdherentService.getAdherents(accessToken);
            console.log('Liste des adhérents:', adherents);
            return adherents;
        } catch (error) {
            console.error('Erreur lors de la récupération des adhérents:', error.message);
        }
    }
}

export default AdherentController;
