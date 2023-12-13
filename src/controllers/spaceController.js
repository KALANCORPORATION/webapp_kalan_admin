import SpaceService from '../services/spaceService';

class SpaceController {
    static async getWeeklyStats(spaceId, accessToken) {
        try {
            return await SpaceService.getWeeklyStats(spaceId, accessToken);
        } catch (error) {
            throw new Error(`Error in HomeController: ${error.message}`);
        }
    }

    static async getSpaceId(accessToken) {
        try {
            const space = await SpaceService.getSpace(accessToken);
            return space.id;
        } catch (error) {
            throw new Error(`Error in UserController: ${error.message}`);
        }
    }
}

export default SpaceController;
