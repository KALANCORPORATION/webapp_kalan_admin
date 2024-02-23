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
import ModalScanReservation from "../../components/ModalScanReservation";
import QRCodeModalContent from "../../components/ModalQRCode";
import ReferentController from "../../controllers/referent/referentController";
import ModalScanResitution from "../../components/ModalScanResitution";
import SpaceBookController from "../../controllers/space/spaceBookController";

export const ProfileAdherent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isQRCodeModalOpen, setIsQRCodeModalOpen] = useState(false);
    const [isModalScanRestitutionOpen, setIsModalScanRestitutionOpen] = useState(false);
    const [isModalScanReservationOpen, setIsModalScanReservationOpen] = useState(false);
    const [reservations, setReservations] = useState([]);
    const spaceId = localStorage.getItem('spaceId');
    const [bookDetails, setBookDetails] = useState({});

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

    const openModalScanReservation = () => setIsModalScanReservationOpen(true);
    const closeModalScanReservation = () => setIsModalScanReservationOpen(false);

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

    const fetchAndFilterReservations = async () => {
        try {
            const allReservations = await SpaceController.getAllSpaceReservations(spaceId, token);
            const filteredReservations = allReservations.filter(reservation => reservation.adherent_id === parseInt(id));
            setReservations(filteredReservations);
        } catch (error) {
            console.error('Error fetching reservations:', error.message);
        }
    };

    const handleEditProfileClick = () => {
        navigate(`/adherent/${id}/update`);
    };

    useEffect(() => {
        const fetchBookDetails = async () => {
            const details = {};

            for (const reservation of reservations) {
                try {
                    const spaceBook = await SpaceBookController.getSpaceBookById(reservation.space_book_id, token);
                    details[reservation.space_book_id] = spaceBook;
                } catch (error) {
                    console.error('Error fetching book details for ID:', reservation.space_book_id, error);
                }
            }

            setBookDetails(details);
        };

        if (reservations.length > 0) {
            fetchBookDetails();
        }
    }, [reservations, token]);

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

        fetchAndFilterReservations()

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [id, token]);

    const renderReservationCard = (reservation) => {
        const book = bookDetails[reservation.space_book_id];
        console.log("Boiooook" , book);
        if (!book) {
            return <div>Loading book details...</div>;
        }

        return (
            <div className={styles.bookCard}>
                <div className={styles.bookInfo}>
                    <h2 className={styles.bookTitle}>{book.book.title}</h2>
                    <p className={styles.bookAuthor}>De : {book.book.author.name}</p>
                    <div className={styles.bookStatusContainer}>
                    <span className={`${styles.bookStatus} ${styles[reservation.status.toLowerCase()]}`}>
                        {reservation.status}
                    </span>
                        <span className={styles.bookDate}>
                        {reservation.status.toLowerCase() === 'reserved' ? `réserver le ${reservation.start_date}` : ''}
                            {reservation.status.toLowerCase() === 'borrowed' ? `à rendre le ${reservation.end_date}` : ''}
                    </span>
                        <span className={styles.bookCreated}>
                        Créé le: {reservation.created_at}
                    </span>
                    </div>
                </div>
            </div>
        );
    };

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
                            <button onClick={handleEditProfileClick} className={styles.dropdownItem}>
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
                    <img className={styles.profileImage} src={adherentProfile.profile_image || "/profileImageDefault.png"} alt="Profile" />
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
                    <img src="/buttonReservation.png" alt="Reservation" onClick={openModalScanReservation} />
                </div>
                <ModalScanEmprunt id={id} isOpen={isModalOpen} closeModal={closeModal} />
                <ModalScanReservation id={id} isOpen={isModalScanReservationOpen} closeModal={closeModalScanReservation} />
                {/*<div className={styles.tabs}>*/}
                {/*    <button className={`${styles.tab} ${styles.active}`} onClick={fetchAndFilterReservations}>Tous</button>*/}
                {/*    <button className={styles.tab}>Emprunts</button>*/}
                {/*    <button className={styles.tab}>Réservés</button>*/}
                {/*</div>*/}
                <h2 className={styles.booksListTitle}>Liste des livres</h2>

                <div className={styles.reservationList}>
                    {reservations.map(reservation => (
                        renderReservationCard(reservation)
                    ))}
                </div>
            </main>
            <NavBarAdmin />
        </div>
    );
}

export default ProfileAdherent;
