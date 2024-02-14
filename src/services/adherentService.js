import Adherent from "../models/Adherent";

class AdherentService {
    static async getAdherents(accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/adherents`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                return data.map(adherentData => new Adherent(adherentData));
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getRecentAddedAdherents(spaceId, listSize, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/spaces/${spaceId}/recent-added-adherents?list_size=${listSize}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();

                return data.map(recentAdherentData => ({
                    id: recentAdherentData.id,
                    adherent: new Adherent(recentAdherentData.adherent),
                }));
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getAdherentById(adherentId, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/adherents/${adherentId}`, {
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

            const adherentData = await response.json();
            console.log('Adherent data:', adherentData);

            return new Adherent(adherentData);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteAdherent(adherentId, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/adherents/${adherentId}`, {
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

export default AdherentService;
