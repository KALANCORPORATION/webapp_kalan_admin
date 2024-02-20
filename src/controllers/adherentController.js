import AuthService from '../services/authService';

class AdherentController {
    static async addAdherent(prenom, nom, dateNaissance, telephone) {
        try {
            const newAdherent = await AuthService.createAdherent(prenom, nom, dateNaissance, telephone);
            // Perform actions after successful profile creation
            console.log('Profil créé avec succès:', newAdherent);
            return newAdherent; // Retournez le profil créé si nécessaire
        } catch (error) {
            console.error('Erreur lors de la création du profil:', error.message);
            throw new Error('Erreur lors de la création du profil');
        }
    }
}

export default AdherentController;