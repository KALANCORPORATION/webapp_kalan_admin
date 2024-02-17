import React from 'react';
import styles from "../styles/Profile.module.css";

export const List = ({ userName, userHandle, joinDate, imagePath }) => {
    return (
        <div className={styles.profileItem}>
            <img className={styles.profileImage} alt="List" src={imagePath} />
            <div className={styles.profileInfo}>
                <div className={styles.profileName}>{userName}</div>
                <p className={styles.profileHandle}>
                    <span className={styles.atSymbol}>@</span>
                    {userHandle}
                </p>
                <div className={styles.joinDate}>{joinDate}</div>
            </div>
        </div>
    );
};
