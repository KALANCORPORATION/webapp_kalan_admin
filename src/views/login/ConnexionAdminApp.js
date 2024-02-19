import "../../styles/connexion/ConnexionAdminApp.css";
import React, {useState} from 'react';
import AuthController from '../../controllers/auth/authController';
import SpaceController from '../../controllers/space/spaceController';
import {useNavigate} from 'react-router-dom';

const ConnexionAdminApp = () => {
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const [accessToken, setAccessToken] = useState(null);
    const history = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await AuthController.handleLogin(pseudo, password, setAccessToken);
            const responseSpaceId = await SpaceController.getSpaceId(response.accessToken);
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('spaceId', responseSpaceId);
            console.log(response.accessToken);
            setAccessToken(response.accessToken);
            history(`/homepage`);
        } catch (error) {
            console.error('Erreur de connexion:', error.message);
        }
    };


    return (
        <div className="connexion-adminapp">
            <div className="login-card">
                <img className="login-logo" src="/logoKalan.png" alt="Logo" />
                <h1 className="login-title">Connexion</h1>
                <input
                    className="login-input"
                    type="text"
                    placeholder="Identifiant"
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" onClick={handleLogin}>
                    Se connecter
                </button>
                <div className="login-footer">
                    <a href="#">Mot de passe oublié ?</a>
                </div>
            </div>
        </div>
    );
};

export default ConnexionAdminApp;
