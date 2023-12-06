class AuthService {
    static async createAdherent(adherent) {
        try {
            const response = await fetch('http://localhost:3001/api/spaces/space_id/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(adherent),
            });

            if (response.ok) {
                const data = await response.json();
                return data.accessToken;
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}