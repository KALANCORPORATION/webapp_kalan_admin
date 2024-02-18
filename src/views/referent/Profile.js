import React, {useEffect, useRef, useState} from 'react';
import { Header } from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import styles from "../../styles/referent/Profile.module.css";
import ReferentController from '../../controllers/referent/referentController';
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import SpaceController from "../../controllers/space/spaceController";
import Modal from "../../components/Modal";
import QRCodeModalContent from "../../components/ModalQRCode";

export const ProfileReferent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isQRCodeModalOpen, setIsQRCodeModalOpen] = useState(false);

    const [referentProfile, setReferentProfile] = useState(null);
    const token = localStorage.getItem('accessToken');
    const [backgroundImage, setBackgroundImage] = useState('/backgroundDefault.png'); // Default path

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const showQRCodeModal = () => {
        setIsQRCodeModalOpen(true);
    };

    const hideQRCodeModal = () => {
        setIsQRCodeModalOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    const handleRemoveReferent = async () => {
        try {
            await SpaceController.removeReferentFromSpace(referentProfile.space_id, referentProfile.id, token);
            setModalContent('Le référent a bien été supprimé.');
            setIsModalOpen(true);
            setTimeout(() => navigate('/referents'));
        } catch (error) {
            setModalContent('Erreur lors de la suppression du référent. Veuillez réessayer.');
            setIsModalOpen(true);
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

    const showModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

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
                            <button onClick={handleRemoveReferent} className={styles.dropdownItem}>
                                Désinscrire de l'espace
                            </button>
                            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                                <p>{modalContent}</p>
                            </Modal>
                            <button onClick={showQRCodeModal} className={styles.dropdownItem}>
                                Afficher carte référent
                            </button>
                            <Modal isOpen={isQRCodeModalOpen} onClose={hideQRCodeModal}>
                                <QRCodeModalContent referentProfile={referentProfile} />
                            </Modal>
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
