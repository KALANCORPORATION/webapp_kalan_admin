import AdherentService from '../services/authService';

class AdherentController {
    static async handleCreateAdherent(spaceId, prenom, nom, dateNaissance, telephone, accessToken) {
        try {
            const newAdherent = await AdherentService.createAdherent(spaceId, { prenom, nom, dateNaissance, telephone }, accessToken);
            console.log('Profil créé avec succès:', newAdherent);
            return newAdherent; 
        } catch (error) {
            console.error('Erreur lors de la création du profil:', error.message);
            throw new Error('Erreur lors de la création du profil');
        }
    }
}

export default AdherentController;