import React, {useEffect, useRef, useState} from 'react';
import { Header } from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import styles from "../../styles/referent/Profile.module.css";
import ReferentController from '../../controllers/referent/referentController';
import {useParams} from "react-router-dom";

export const ProfileReferent = () => {
    const { id } = useParams();

    const [referentProfile, setReferentProfile] = useState(null);
    const token = localStorage.getItem('accessToken');
    const [backgroundImage, setBackgroundImage] = useState('/backgroundDefault.png'); // Default path

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        const fetchReferentProfile = async () => {
            try {
                const profileData = await ReferentController.getReferentById(id, token);
                setReferentProfile(profileData);
            } catch (error) {
                console.error('Error fetching referent profile:', error);
            }
        };

        if (token) {
            fetchReferentProfile();
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [id, token]);

    if (!referentProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.profilePage}>
            <Header />
            <div
                className={styles.profileHeader}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className={styles.profileActionIcons}>
                    <button onClick={toggleDropdown} className={styles.dropdownToggle}>
                        <img src="/dropDownIcon.png" alt="Dropdown" className={styles.dropdownIcon} />
                    </button>
                    {isDropdownOpen && (
                        <div className={styles.dropdownMenu} ref={dropdownRef}>
                            <button className={styles.dropdownItem}>Désinscrire de l'espace</button>
                            <button className={styles.dropdownItem}>Afficher carte référent</button>
                            <button className={styles.dropdownItem}>Suspendre</button>
                        </div>
                    )}
                </div>
                <div className={styles.profileImageContainer}>
                    <img className={styles.profileImage} src={referentProfile.profile_image}alt="Profile" />
                </div>
                <h1 className={styles.username}>{referentProfile.first_name} {referentProfile.last_name}</h1>
                <p className={styles.handle}>@{referentProfile.pseudo}</p>
                <p className={styles.bio}>{referentProfile.bio}</p>
                <div className={styles.profileDates}>
                    <span className={styles.joinDate}>
                        <span className="icon">📅</span> A rejoint le {new Date(referentProfile.created_at.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")).toLocaleDateString('fr-FR', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/\//g, '/')}
                    </span>
                    <span className={styles.birthDate}>
                        <span className="icon">🎂</span> {referentProfile.birthday}
                    </span>
                </div>
            </div>

            <main className={styles.profileMain}>
                <div className={styles.tabs}>
                    <button className={`${styles.tab} ${styles.active}`}>Tous</button>
                    <button className={styles.tab}>Emprunts</button>
                    <button className={styles.tab}>Réservations</button>
                </div>
                {/* Main content, dynamic content goes here */}
            </main>
            <NavBarAdmin />
        </div>
    );
}

export default ProfileReferent;
