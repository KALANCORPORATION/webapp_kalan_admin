import React from "react";
import styles from "../styles/components/Header.module.css";

export const Header = () => {
    return (
        <div className={styles.frame}>
            <img className={styles.logoKalan} alt="logoKalan" src="/logoKalan.png" />
            <div className={styles.textWrapper}>Mon espace</div>
            <div className={styles.iconsRight}>
                <img className={styles.notif} alt="Justthekk" src="/notifLogo.png" />
                <img className={styles.logoReferent} alt="Logo" src="/profileDefault.png" />
            </div>
            <header className={styles.header}>
            </header>
        </div>
    );
};
