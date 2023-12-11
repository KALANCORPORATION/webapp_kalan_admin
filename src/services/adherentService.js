import Adherent from "../models/Adherent";

class AdherentService {
    static async getAdherents(accessToken) {
        try {
            const response = await fetch('http://localhost:3001/api/adherents', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
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
}

export default AdherentService;
