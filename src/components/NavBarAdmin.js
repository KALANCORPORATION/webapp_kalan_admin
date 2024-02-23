import React, {useState} from 'react';
import styles from "../styles/components/NavBarAdmin.module.css";
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from "./Modal";
import BarcodeScannerPopup from "../views/scan/BarcodeScannerPopup";
import ModalScan from "./ModalScan";

export const NavBarAdmin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScannerModalOpen, setIsScannerModalOpen] = useState(false);

    const navigateTo = (path) => {
        navigate(path);
    };

    const openScannerModal = () => {
        setIsScannerModalOpen(true);
    };

    const closeScannerModal = () => {
        setIsScannerModalOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
        <nav className={styles.navbar}>
            {/*<button onClick={() => navigateTo('/homepage')}*/}
            {/*        className={`${styles.navButton} ${isActive('/home') ? styles.active : ''}`}>*/}
            {/*    <img src="/homeLogo.svg" alt="Home" className={styles.navIcon} />*/}
            {/*    <span>Accueil</span>*/}
            {/*</button>*/}
            <div className={styles.scanButtonWrapper}>
                <button onClick={openScannerModal}
                        className={`${styles.scanButton} ${isActive('/scanner') ? styles.active : ''}`}>
                    <img src="/qrcodeLogo.svg" alt="Scanner" className={styles.scanIcon} />
                </button>
            </div>
            <button onClick={() => navigateTo('/referents')}
                    className={`${styles.navButton} ${isActive('/referents') ? styles.active : ''}`}>
                <img src="/monEspace.png" alt="Mon espace" className={styles.navIcon} />
                <span>Mon espace</span>
            </button>
            <button onClick={() => navigateTo('/books')}
                    className={`${styles.navButton} ${isActive('/books') ? styles.active : ''}`}>
                <img src="/bibliotheque.svg" alt="Bibliothèque" className={styles.navIcon} />
                <span>Bibliothèque</span>
            </button>
            <button onClick={() => navigateTo('/adherents')}
                    className={`${styles.navButton} ${isActive('/adherents') ? styles.active : ''}`}>
                <img src="/adherentLogo.png" alt="Adhérents" className={styles.navIcon} />
                <span>Adhérents</span>
            </button>
        </nav>
            {isScannerModalOpen && (
                <ModalScan onClose={closeScannerModal}>
                    <BarcodeScannerPopup onClose={closeScannerModal} />
                </ModalScan>
            )}
        </>
    );
};

export default NavBarAdmin;
