import "../../styles/splashscreen/splashScreen1.css";
import React, {useEffect, useState} from 'react';
// import SplashScreen2 from './SplashScreen2'; // Make sure to import SplashScreen2 correctly
import ConnexionAdminApp from "../login/ConnexionAdminApp";

const SplashScreen1 = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="splash-screen">
                <div className="header">
                    <img className="group" alt="Group" src="img.png" />
                    <img className="group" alt="Group" src="img_1.png" />
                    <img className="group" alt="Group" src="img_2.png" />
                </div>
                <img className="logo-livre-k" alt="Logo livre k" src="kalanSplashScreen.png" />
                <div className="loading-spinner"></div> {/* Add loading spinner */}
            </div>
        );
    } else {
        return <ConnexionAdminApp />;
    }
};

export default SplashScreen1;
