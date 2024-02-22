import React, {useEffect, useState} from 'react';
import styles from "../../styles/invitation/List.module.css";
import Modal from "../../components/Modal";

import { Header } from "../../components/Header";
import { TabBar } from "../../components/TabBar";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import SpaceController from '../../controllers/space/spaceController';
import ReferentController from '../../controllers/referent/referentController';
import InvitationController from '../../controllers/invitation/invitationController';
import {useLocation, useNavigate} from "react-router-dom";

export const ListInvitations = ({ userName, userHandle, joinDate, imagePath }) => {
    const [invitations, setInvitations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const token = localStorage.getItem('accessToken');
    const [referentsDetails, setReferentsDetails] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    useEffect(() => {
        fetchInvitations();
    }, [searchTerm]);

    const fetchInvitations = async () => {
        try {
            const spaceId = localStorage.getItem('spaceId');
            const pendingInvitations = await SpaceController.getAllSpaceInvitations(spaceId, token);

            const referentsDetailsTemp = {};
            for (const invitation of pendingInvitations) {
                if (invitation.status === 'pending') {
                    const referentData = await ReferentController.getReferentById(invitation.referent_id, token);
                    referentsDetailsTemp[invitation.referent_id] = referentData;
                }
            }
            setReferentsDetails(referentsDetailsTemp);

            setInvitations(pendingInvitations.filter(invite => invite.status === 'pending'));
        } catch (error) {
            console.error('Erreur lors de la récupération des invitations:', error.message);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const getTabStyle = (path) => {
        return location.pathname === path ? `${styles.tab} ${styles.active}` : styles.tab;
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleAccept = async (invitationId) => {
        await InvitationController.acceptInvitation(invitationId, token);
        showModal(<div className={styles.modalContent}><span className={styles.checkIcon}>✔</span> Invitation acceptée</div>);
        setInvitations(prevInvitations => prevInvitations.filter(invite => invite.id !== invitationId));
    };

    const handleDeny = async (invitationId) => {
        await InvitationController.denyInvitation(invitationId, token);
        showModal(<div className={styles.modalContent}><span className={styles.crossIcon}>✖</span> Invitation refusée</div>);
        setInvitations(prevInvitations => prevInvitations.filter(invite => invite.id !== invitationId));
    };

    const showModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

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

            {invitations.filter(invitation => {
                const referent = referentsDetails[invitation.referent_id];
                if (!searchTerm) return true;
                return referent && (referent.pseudo.toLowerCase().includes(searchTerm.toLowerCase()) || `${referent.first_name} ${referent.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()));
            }).map((invitation) => (
                <div key={invitation.id} className={styles.profileItem}>
                    <img className={styles.profileImage} alt="Profile" src={referentsDetails[invitation.referent_id]?.profile_image || '/profileImageDefault.png'} />
                    <div className={styles.profileInfo}>
                        <div className={styles.profileName}>{referentsDetails[invitation.referent_id]?.first_name} {referentsDetails[invitation.referent_id]?.last_name}</div>
                        <p className={styles.profileHandle}>
                            <span className={styles.atSymbol}>@</span>
                            {referentsDetails[invitation.referent_id]?.pseudo}
                        </p>
                        <div className={styles.joinDate}>Demande envoyée le {new Date(invitation.created_at.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")).toLocaleDateString('fr-FR', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/\//g, '/')}</div>
                    </div>
                    <div className={styles.icons}>
                        <button onClick={() => handleAccept(invitation.id)} className={styles.iconButton}>
                            <img className={styles.statusIcon} src="verified.png" alt="Accept" />
                        </button>
                        <button onClick={() => handleDeny(invitation.id)} className={styles.iconButton}>
                            <img className={styles.statusIcon} src="rejected.png" alt="Deny" />
                        </button>
                    </div>
                </div>
            ))}

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {modalContent}
            </Modal>

            <NavBarAdmin />
        </div>
    );
};
