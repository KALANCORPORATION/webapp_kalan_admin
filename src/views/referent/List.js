import React, { useEffect, useState } from 'react';
import styles from "../../styles/referent/List.module.css";

import { Header } from "../../components/Header";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import SpaceController from '../../controllers/space/spaceController';
import SearchController from "../../controllers/research/researchController";
import {useLocation, useNavigate} from "react-router-dom";

export const ListReferent = () => {
    const [referents, setReferents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const token = localStorage.getItem('accessToken');
    const location = useLocation();
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    useEffect(() => {
        fetchReferents();
    }, []);

    const fetchReferents = async () => {
        try {
            const spaceId = localStorage.getItem('spaceId');
            const referentsData = await SpaceController.getAllReferentsForSpace(spaceId, token);
            setReferents(referentsData);
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

    const getTabStyle = (path) => {
        return location.pathname === path ? `${styles.tab} ${styles.active}` : styles.tab;
    };

    const filteredReferents = searchTerm.length > 0
        ? referents.filter(r =>
            r.pseudo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            `${r.first_name} ${r.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : referents;

    return (
        <div>
            <Header />

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
                    <input
                        className={styles.searchInput}
                        placeholder="Rechercher un référent"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className={styles.searchButton}>
                        <img src="loupe.png" alt="Search" className={styles.searchIcon} />
                    </button>
                </div>
                <button className={styles.filterButton}>
                    <img src="filtreLogo.svg" alt="Filter" className={styles.filterIcon} />
                    Filtrer
                </button>
            </div>

            {filteredReferents.map((referent) => (
                <div
                    key={referent.id}
                     className={styles.profileItem}
                    onClick={() => navigateTo(`/referent/${referent.id}`)}
                >
                    <img className={styles.profileImage} alt={referent.pseudo} src={referent.profile_image || '/profileDefault2.png'} />
                    <div className={styles.profileInfo}>
                        <div className={styles.profileName}>{referent.first_name} {referent.last_name}</div>
                        <p className={styles.profileHandle}>
                            <span className={styles.atSymbol}>@</span>
                            {referent.pseudo}
                        </p>
                    </div>
                </div>
            ))}
            <NavBarAdmin />
        </div>
    );
};

export default ListReferent;
