import AuthService from '../../services/auth/authService';
import User from '../../models/user/User';

class AuthController {
    static async handleLogin(pseudo, password, setAccessToken) {
        const user = new User(pseudo, password);
        try {
            const accessToken = await AuthService.signIn(user);
            // Store the accessToken or perform actions after successful login
            console.log('Token:', accessToken);
            setAccessToken(accessToken);
            return { accessToken };
        } catch (error) {
            console.error('Erreur de connexion:', error.message);
        }
    }

    static async handleSignUp(userData, userType) {
        try {
            const { accessToken, refreshToken } = await AuthService.signUp(userData, userType);
            console.log('Inscription réussie. Tokens:', accessToken, refreshToken);
            return { accessToken, refreshToken };
        } catch (error) {
            console.error('Erreur d\'inscription:', error.message);
            throw error;
        }
    }
}

export default AuthController;
