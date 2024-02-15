import UserService from '../services/userService';

class UserController {
    static async setProfileImage(imageFile, accessToken) {
        try {
            const formData = new FormData();
            formData.append('image', imageFile);
            return await UserService.setProfileImage(`${process.env.REACT_APP_URL}/api/user/profile-image`, formData, accessToken);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'image de profil:', error.message);
            throw error;
        }
    }

    static async getProfileImage(accessToken) {
        try {
            return await UserService.getProfileImage(`${process.env.REACT_APP_URL}/api/user/profile-image`, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'image de profil:', error.message);
            throw error;
        }
    }

    static async deleteProfileImage(accessToken) {
        try {
            return await UserService.deleteProfileImage(`${process.env.REACT_APP_URL}/api/user/profile-image`, accessToken);
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'image de profil:', error.message);
            throw error;
        }
    }

    static async setBackgroundImage(imageFile, accessToken) {
        try {
            const formData = new FormData();
            formData.append('image', imageFile);
            return await UserService.setBackgroundImage(`${process.env.REACT_APP_URL}/api/user/background-image`, formData, accessToken);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'image de fond:', error.message);
            throw error;
        }
    }

    static async getBackgroundImage(accessToken) {
        try {
            return await UserService.getBackgroundImage(`${process.env.REACT_APP_URL}/api/user/background-image`, accessToken);
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'image de fond:', error.message);
            throw error;
        }
    }

    static async deleteBackgroundImage(accessToken) {
        try {
            return await UserService.deleteBackgroundImage(`${process.env.REACT_APP_URL}/api/user/background-image`, accessToken);
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'image de fond:', error.message);
            throw error;
        }
    }
}

export default UserController;
