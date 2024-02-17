import React, {useEffect, useRef, useState} from 'react';
import { Header } from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import styles from "../../styles/referent/Profile.module.css";

export const ProfileReferent = () => {
    const userProfile = {
        username: 'Abdelito Ratus',
        handle: '@Abdelitoz',
        bio: 'Le plus gros rat sur terre c’est bien moi :)',
        joinDate: '24 janvier 2022',
        birthDate: '24 Mai 1997',
        backgroundImage: 'backgroundDefault.png'
    };

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
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Clean up the event listener to avoid memory leaks
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.profilePage}>
            <Header />
            <div
                className={styles.profileHeader}
                style={{ backgroundImage: `url(${userProfile.backgroundImage})` }}
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
                    <img className={styles.profileImage} src="/profileDefault.png" alt="Profile" />
                </div>
                <h1 className={styles.username}>{userProfile.username}</h1>
                <p className={styles.handle}>{userProfile.handle}</p>
                <p className={styles.bio}>{userProfile.bio}</p>
                <div className={styles.profileDates}>
                    <span className={styles.joinDate}>
                        <span className="icon">📅</span> A rejoint le {userProfile.joinDate}
                    </span>
                    <span className={styles.birthDate}>
                        <span className="icon">🎂</span> {userProfile.birthDate}
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
};

export default ProfileReferent;
