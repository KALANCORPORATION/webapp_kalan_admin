// SpaceService.js
class SpaceService {
    static async getWeeklyStats(spaceId, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/spaces/${spaceId}/weekly-stats`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
                },
            });

            if (response.ok) {
                return await response.json();
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getSpace(accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/user/space`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
                },
            });

            if (response.ok) {
                return await response.json();
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default SpaceService;
