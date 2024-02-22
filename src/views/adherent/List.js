import React, { useEffect, useState } from 'react';
import styles from "../../styles/referent/List.module.css";

import { Header } from "../../components/Header";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import SpaceController from '../../controllers/space/spaceController';
import SearchController from "../../controllers/research/researchController";
import {useLocation, useNavigate} from "react-router-dom";
import { QrReader } from 'react-qr-reader';
import ReferentController from "../../controllers/referent/referentController";
import AdherentController from "../../controllers/adherent/adherentController";

export const ListAdherents = () => {
    const [adherents, setAdherents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const token = localStorage.getItem('accessToken');
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState('');
    const [scannedReferent, setScannedReferent] = useState(null);
    const [isCameraOpen, setIsCameraOpen] = useState(false);

    const navigateTo = (path) => {
        navigate(path);
    };

    useEffect(() => {
        fetchAdherents();
    }, []);

    const fetchAdherents = async () => {
        try {
            const spaceId = localStorage.getItem('spaceId');
            const adherentsData = await SpaceController.getAllAdherentsForSpace(spaceId, token);
            setAdherents(adherentsData);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearchChange = async (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 2) {
            try {
                const pseudoParams = `pseudo=${value}`;
                const users = await SearchController.searchUsers(pseudoParams, token);
                setSearchResults(users);
            } catch (error) {
                console.error('Erreur lors de la recherche:', error);
            }
        } else {
            setSearchResults([]);
        }
    };

    const handleScan = async (data) => {
        if (data) {
            let cleanedText = data.text.replace(/@/g, '');
            try {
                const qrData = JSON.parse(cleanedText);
                if (qrData && qrData.user_id) {
                    const adherentData = await AdherentController.getAdherentById(qrData.user_id, token);
                   if (adherentData) {
                       navigate(`/adherent/${adherentData.id}`);
                    }
                }
            } catch (error) {
                console.error('Error processing QR code:', error);
            }
        }
    };

    const startScanning = () => {
        setIsCameraOpen(true);
    };

    const handleError = (error) => {
        console.error(error);
    };

    const getTabStyle = (path) => {
        return location.pathname === path ? `${styles.tab} ${styles.active}` : styles.tab;
    };

    const closeCameraPopup = () => {
        setIsCameraOpen(false);
    };

    const filteredAdherents = searchTerm.length > 0
        ? adherents.filter(r =>
            r.pseudo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            `${r.first_name} ${r.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : adherents;

    return (
        <div>
            <Header />

            <div className={styles.container}>
                <div className={styles.searchBar}>
                    <input
                        className={styles.searchInput}
                        placeholder="Rechercher un adhérent"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className={styles.searchButton}>
                        <img src="loupe.png" alt="Search" className={styles.searchIcon} />
                    </button>
                    <button className={styles.qrButton} onClick={startScanning}>
                        <img src="/qrCodeLogo.png" alt="QR Code Scan" className={styles.qrCodeIcon} />
                    </button>
                </div>
                <button className={styles.filterButton}>
                    <img src="filtreLogo.svg" alt="Filter" className={styles.filterIcon} />
                    Filtrer
                </button>
            </div>

            {isCameraOpen && (
                <div className={styles.cameraPopup}>
                    <QrReader
                        delay={50}
                        constraints={{ facingMode: 'environment', focusMode: 'continuous'}}
                        onResult={handleScan}
                        onError={handleError}
                        style={{ width: '100%' }}
                    />
                    <button onClick={closeCameraPopup}>Fermer</button>
                </div>
            )}
            <div className={styles.listContainer}>
            {filteredAdherents.map((adherent) => (
                <div
                    key={adherent.id}
                    className={styles.profileItem}
                    onClick={() => navigateTo(`/adherent/${adherent.id}`)}
                >
                    <img className={styles.profileImage} alt={adherent.pseudo} src={adherent.profile_image || '/profileImageDefault.png'} />
                    <div className={styles.profileInfo}>
                        <div className={styles.profileName}>{adherent.first_name} {adherent.last_name}</div>
                        <p className={styles.profileHandle}>
                            <span className={styles.atSymbol}>@</span>
                            {adherent.pseudo}
                        </p>
                    </div>
                </div>
            ))}
            </div>
            <NavBarAdmin />
        </div>
    );
};

export default ListAdherents;
