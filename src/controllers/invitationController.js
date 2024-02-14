import InvitationService from '../services/invitationService';
import Invitation from '../models/Invitation';

class InvitationController {
    static async acceptInvitation(invitationId, accessToken) {
        try {
            const result = await InvitationService.acceptInvitation(invitationId, accessToken);
            console.log('Invitation acceptée:', result);
        } catch (error) {
            console.error(error);
        }
    }

    static async denyInvitation(invitationId, accessToken) {
        try {
            const result = await InvitationService.denyInvitation(invitationId, accessToken);
            console.log('Invitation refusée:', result);
        } catch (error) {
            console.error(error);
        }
    }

    static async getInvitationById(invitationId, accessToken) {
        try {
            const data = await InvitationService.getInvitationById(invitationId, accessToken);
            const invitation = new Invitation(data);
            console.log('Détails de l\'invitation:', invitation);
            return invitation;
        } catch (error) {
            console.error(error);
        }
    }
}

export default InvitationController;
