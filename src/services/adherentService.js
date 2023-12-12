class AdherentService {
    static async createAdherent(spaceId, adherent, accessToken) {
        try {
            const response = await fetch('http://localhost:3001/api/spaces/space_id/adherents', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(adherent),
            });

            if (response.ok) {
                const data = await response.json();
                return data.adherent;
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default AdherentService;