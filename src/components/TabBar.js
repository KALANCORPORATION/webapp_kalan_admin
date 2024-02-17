import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from "../styles/components/TabBar.module.css";

export const TabBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateTo = (path) => {
        navigate(path);
    };

    const getTabStyle = (path) => {
        return location.pathname === path ? `${styles.tab} ${styles.active}` : styles.tab;
    };

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <button
                    className={getTabStyle('/referents')}
                    onClick={() => navigateTo('/referents')}
                >
                    Liste des référents
                </button>
                <button
                    className={getTabStyle('/invitations')}
                    onClick={() => navigateTo('/invitations')}
                >
                    Invitations
                </button>
                <button
                    className={getTabStyle('/historique')}
                    onClick={() => navigateTo('/historique')}
                >
                    Historique
                </button>
            </div>
            <div className={styles.searchBar}>
                <input className={styles.searchInput} placeholder="Rechercher un référent" />
                <button className={styles.searchButton}>
                    <img src="loupe.png" alt="Search" className={styles.searchIcon} />
                </button>
            </div>
            <button className={styles.filterButton}>
                <img src="filtreLogo.svg" alt="Filter" className={styles.filterIcon} />
                Filtrer
            </button>
        </div>
    );
};
