import React, {useEffect, useState} from 'react';
import styles from "../../styles/referent/List.module.css";

import { Header } from "../../components/Header";
import { TabBar } from "../../components/TabBar";
import {NavBarAdmin} from "../../components/NavBarAdmin";
import SpaceController from '../../controllers/space/spaceController';

export const ListReferent = () => {
    const [referents, setReferents] = useState([]);

    useEffect(() => {
        const fetchReferents = async () => {
            try {
                const spaceId = localStorage.getItem('spaceId');
                const token = localStorage.getItem('accessToken');

                const referentsData = await SpaceController.getAllReferentsForSpace(spaceId, token);
                setReferents(referentsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchReferents();
    }, []);

    return (
        <div>
            <Header />
            <TabBar />
            {referents.map((referent) => (
                <div key={referent.id} className={styles.profileItem}>
                    <img className={styles.profileImage} alt={referent.pseudo} src={referent.profile_image || '/profileDefault2.png'} />
                    <div className={styles.profileInfo}>
                        <div className={styles.profileName}>{referent.first_name} {referent.last_name}</div>
                        <p className={styles.profileHandle}>
                            <span className={styles.atSymbol}>@</span>
                            {referent.pseudo}
                        </p>
                        {/*<div className={styles.joinDate}>Ajouté le {referent.created_at}</div>*/}
                    </div>
                </div>
            ))}
            <NavBarAdmin />
        </div>
    );
};

export default ListReferent;
