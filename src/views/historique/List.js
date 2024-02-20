import React from 'react';
import styles from "../../styles/referent/List.module.css";

import { Header } from "../../components/Header";
import { TabBar } from "../../components/TabBar";
import {NavBarAdmin} from "../../components/NavBarAdmin";

export const Historique = ({ userName, userHandle, joinDate, imagePath }) => {
    return (
        <div>
            <Header />
            <TabBar />
            <div className={styles.profileItem}>
                <img className={styles.profileImage} alt="List" src="/profileImageDefault.png" />
                <div className={styles.profileInfo}>
                    <div className={styles.profileName}>fffffffffffff</div>
                    <p className={styles.profileHandle}>
                        <span className={styles.atSymbol}>@</span>
                        fffff
                    </p>
                    <div className={styles.joinDate}>Ajouté le 20 juin 2023</div>
                </div>
            </div>
            <NavBarAdmin />
        </div>
    );
};
