class UserService {
    static async setProfileImage(accessToken, imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/user/profile-image`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getProfileImage(accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/user/profile-image`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteProfileImage(accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/user/profile-image`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            return true;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async setBackgroundImage(accessToken, imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/user/background-image`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getBackgroundImage(accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/user/background-image`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteBackgroundImage(accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/user/background-image`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            return true;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default UserService;
