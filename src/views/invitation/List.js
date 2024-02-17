import React from 'react';
import styles from "../../styles/invitation/List.module.css";

import { Header } from "../../components/Header";
import { TabBar } from "../../components/TabBar";
import { NavBarAdmin } from "../../components/NavBarAdmin";

export const ListInvitations = ({ userName, userHandle, joinDate, imagePath }) => {
    return (
        <div>
            <Header />
            <TabBar />
            <div className={styles.profileItem}>
                <img className={styles.profileImage} alt="List" src="/profileDefault2.png" />
                <div className={styles.profileInfo}>
                    <div className={styles.profileName}>fffffffffffff</div>
                    <p className={styles.profileHandle}>
                        <span className={styles.atSymbol}>@</span>
                        fffff
                    </p>
                    <div className={styles.joinDate}>Demande envoyé le 20 juin 2023</div>
                </div>
                <div className={styles.icons}>
                    <img className={styles.statusIcon} src="verified.png" alt="Verified" />
                    <img className={styles.statusIcon} src="rejected.png" alt="Rejected" />
                </div>
            </div>
            <NavBarAdmin />
        </div>
    );
};
