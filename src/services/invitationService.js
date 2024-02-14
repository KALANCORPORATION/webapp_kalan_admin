class InvitationService {
    static async acceptInvitation(invitationId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/${invitationId}/accept`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Impossible d\'accepter l\'invitation');
        }
        return await response.json();
    }

    static async denyInvitation(invitationId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/${invitationId}/deny`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Impossible de refuser l\'invitation');
        }
        return await response.json();
    }

    static async getInvitationById(invitationId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/${invitationId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Invitation non trouvée');
        }
        return await response.json();
    }
}

export default InvitationService;
