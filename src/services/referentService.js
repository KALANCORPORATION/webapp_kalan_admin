import Referent from "../models/Referent";

class ReferentService {
    static async getRecentReferents(spaceId, listSize, accessToken) {
        try {
            const response = await fetch(`http://localhost:3001/api/spaces/${spaceId}/recent-referents?list_size=${listSize}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Response data:', data); // Add this line to log the response data

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
}

export default ReferentService;