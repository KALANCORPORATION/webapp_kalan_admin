import React, {useEffect, useState} from 'react';
import styles from "../../styles/invitation/List.module.css";
import Modal from "../../components/Modal";

import { Header } from "../../components/Header";
import { TabBar } from "../../components/TabBar";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import SpaceController from '../../controllers/space/spaceController';
import ReferentController from '../../controllers/referent/referentController';
import InvitationController from '../../controllers/invitation/invitationController';

export const ListInvitations = ({ userName, userHandle, joinDate, imagePath }) => {
    const [invitations, setInvitations] = useState([]);
    const [referents, setReferents] = useState({});
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        const fetchInvitations = async () => {
            try {
                const spaceId = localStorage.getItem('spaceId');
                const token = localStorage.getItem('accessToken');

                const pendingInvitations = await SpaceController.getAllSpaceInvitations(spaceId, token);
                const filteredInvitations = pendingInvitations.filter(invite => invite.status === 'pending');
                setInvitations(filteredInvitations);

                for (const invitation of filteredInvitations) {
                    const referentData = await ReferentController.getReferentById(invitation.referent_id, token);
                    setReferents(prevReferents => ({
                        ...prevReferents,
                        [invitation.referent_id]: referentData,
                    }));
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des invitations:', error.message);
            }
        };
        fetchInvitations();
    }, []);

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
            <TabBar />

            {invitations.map((invitation) => (
                <div key={invitation.id} className={styles.profileItem}>
                    <img className={styles.profileImage} alt="Profile" src={referents[invitation.referent_id]?.profile_image || '/profileDefault2.png'} />
                    <div className={styles.profileInfo}>
                        <div className={styles.profileName}>{referents[invitation.referent_id]?.first_name} {referents[invitation.referent_id]?.last_name}</div>
                        <p className={styles.profileHandle}>
                            <span className={styles.atSymbol}>@</span>
                            {referents[invitation.referent_id]?.pseudo}
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
