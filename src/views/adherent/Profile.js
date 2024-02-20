import React, {useEffect, useRef, useState} from 'react';
import { Header } from "../../components/Header";
import NavBarAdmin from "../../components/NavBarAdmin";
import styles from "../../styles/adherent/Profile.module.css";
import AdherentController from '../../controllers/adherent/adherentController';
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import SpaceController from "../../controllers/space/spaceController";
import Modal from "../../components/Modal";
import ModalScanEmprunt from "../../components/ModalScanEmprunt";
import QRCodeModalContent from "../../components/ModalQRCode";
import ReferentController from "../../controllers/referent/referentController";
import ModalScanResitution from "../../components/ModalScanResitution";

export const ProfileAdherent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isQRCodeModalOpen, setIsQRCodeModalOpen] = useState(false);
    const [isModalScanRestitutionOpen, setIsModalScanRestitutionOpen] = useState(false);

    const [adherentProfile, setAdherentProfile] = useState(null);
    const token = localStorage.getItem('accessToken');
    const [backgroundImage, setBackgroundImage] = useState('/backgroundDefault.png');

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const showQRCodeModal = () => {
        setIsQRCodeModalOpen(true);
    };

    const openModalScanRestitution = () => {
        setIsModalScanRestitutionOpen(true);
    };

    const closeModalScanRestitution = () => {
        setIsModalScanRestitutionOpen(false);
    };

    const hideQRCodeModal = () => {
        setIsQRCodeModalOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    const handleRemoveAdherent = async () => {
        try {
            const spaceId = localStorage.getItem('spaceId');
            await SpaceController.removeAdherentFromSpace(spaceId, adherentProfile.id, token);
            setModalContent('L\'adhérent a bien été supprimé.');
            setIsModalOpen(true);
            setTimeout(() => navigate('/adherents'));
        } catch (error) {
            setModalContent('Erreur lors de la suppression due l\'adhérent. Veuillez réessayer.');
            setIsModalOpen(true);
        }
    };

    useEffect(() => {
        const fetchAdherentProfile = async () => {
            try {
                const profileData = await AdherentController.getAdherentById(id, token);
                setAdherentProfile(profileData);
            } catch (error) {
                console.error('Error fetching adherent profile:', error);
            }
        };

        if (token) {
            fetchAdherentProfile();
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [id, token]);

    if (!adherentProfile) {
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
                            <button onClick={handleRemoveAdherent} className={styles.dropdownItem}>
                                Désinscrire de l'espace
                            </button>
                            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                                <p>{modalContent}</p>
                            </Modal>
                            <button onClick={showQRCodeModal} className={styles.dropdownItem}>
                                Afficher carte adhérent
                            </button>
                            <button className={styles.dropdownItem}>
                                Modifier le profil
                            </button>
                            <Modal isOpen={isQRCodeModalOpen} onClose={hideQRCodeModal}>
                                <QRCodeModalContent referentProfile={adherentProfile} />
                            </Modal>
                            <button onClick={openModalScanRestitution} className={styles.dropdownItem}>
                                Faire une restitution
                            </button>
                            <ModalScanResitution id={id} isOpen={isModalScanRestitutionOpen} closeModal={closeModalScanRestitution} />
                        </div>
                    )}
                </div>
                <div className={styles.profileImageContainer}>
                    <img className={styles.profileImage} src={adherentProfile.profile_image} alt="Profile" />
                </div>
                <h1 className={styles.username}>{adherentProfile.first_name} {adherentProfile.last_name}</h1>
                <p className={styles.handle}>@{adherentProfile.pseudo}</p>
                <p className={styles.bio}>{adherentProfile.bio}</p>
                <div className={styles.profileDates}>
                    <span className={styles.joinDate}>
                        <span className="icon">📅</span> A rejoint le {new Date(adherentProfile.created_at.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")).toLocaleDateString('fr-FR', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/\//g, '/')}
                    </span>
                    <span className={styles.birthDate}>
                        <span className="icon">🎂</span> {adherentProfile.birthday}
                    </span>
                </div>
            </div>

            <main className={styles.profileMain}>
                <div className={styles.buttonGroup}>
                    <img src="/buttonEmprunt.png" alt="Emprunt" onClick={openModal} />
                    <img src="/buttonReservation.png" alt="Reservation" />
                </div>
                <ModalScanEmprunt id={id} isOpen={isModalOpen} closeModal={closeModal} />
                <div className={styles.tabs}>
                    <button className={`${styles.tab} ${styles.active}`}>Tous</button>
                    <button className={styles.tab}>Emprunts</button>
                    <button className={styles.tab}>Réservés</button>
                </div>
                {/* Main content, dynamic content goes here */}
            </main>
            <NavBarAdmin />
        </div>
    );
}

export default ProfileAdherent;
