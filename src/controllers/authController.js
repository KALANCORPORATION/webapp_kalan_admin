import AuthService from '../services/authService';
import User from '../models/User';

class AuthController {
    static async handleLogin(pseudo, password) {
        const user = new User(pseudo, password);
        try {
            const accessToken = await AuthService.signIn(user);
            // Store the accessToken or perform actions after successful login
            console.log('Token:', accessToken);
        } catch (error) {
            console.error('Erreur de connexion:', error.message);
        }
    }
}

export default AuthController;
