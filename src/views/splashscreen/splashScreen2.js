import "../../styles/splashscreen/splashScreen2.css";
import React from "react";
import {useNavigate} from 'react-router-dom';

const SplashScreen2 = () => {
    const history = useNavigate();

    const handleLoginClick = () => {
        history(`/login`);
    };

    return (
        <div className="welcome-screen">
            <div className="welcome-header">
                <img className="group" alt="Group" src="img.png" />
                <img className="group" alt="Group" src="img_2.png" />
            </div>
            <div className="welcome-title">Bienvenue !</div>
            <img className="welcome-logo" src="logoKalan2.png" alt="KALAN" />
            <button className="welcome-button welcome-button-signup">S'inscrire</button>
            <button className="welcome-button welcome-button-login" onClick={handleLoginClick}>Se connecter</button>
        </div>
    );
};

export default SplashScreen2;
