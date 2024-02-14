// ReferentService.js
import Referent from "../models/Referent";

class ReferentService {
    static async getRecentReferents(spaceId, listSize, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/spaces/${spaceId}/recent-referents?list_size=${listSize}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Response data:', data); // Ajoutez cette ligne pour journaliser les données de réponse

                return data.map(recentReferentData => ({
                    id: recentReferentData.id,
                    referent: new Referent(recentReferentData),
                }));
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getReferentById(referentId, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/referents/${referentId}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const referentData = await response.json();
            console.log('Referent data:', referentData);

            return new Referent(referentData);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteReferent(referentId, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/referents/${referentId}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default ReferentService;
