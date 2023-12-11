import React, {useEffect, useState} from 'react';
import AdherentController from '../../controllers/adherentController';

import "../../styles/AdherentList.css";

const AdherentList = () => {
    const [adherents, setAdherents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHlwZSI6InJlZmVyZW50IiwiaWF0IjoxNzAyMjU2MjgyLCJleHAiOjE3MDIzNDI2ODJ9.IrRS4I1JeSk3z9qLrtJpnValEausiS2ciKwCS5rwN_M'; // Remplacez par le jeton d'accès réel
                const adherentsData = await AdherentController.getAdherents(accessToken);
                setAdherents(adherentsData);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des adhérents:', error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="adhrent-parent">
            <div className="adhrent">
                <div className="group-parent">
                    {loading ? (
                        <p>Chargement en cours...</p>
                    ) : adherents.length === 0 ? (
                        <p>No adherents found</p>
                    ) : (
                        <div className="ellipse-parent">
                            {adherents.map((adherent, index) => (
                                <div className="group-wrapper">
                                    <div className="ellipse-parent" key={index}>
                                        <div className="ellipse-parent">
                                            <div className="ellipse-parent">
                                                <img className="group-child" alt="" src="/ellipse-23@2x.png"/>
                                                <div className="julien-wrapper">
                                                    <div className="julien">{adherent.firstName}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <img className="qr-code-1-icon" alt="" src="/qrcode-1@2x.png"/>
                    <div className="group-container">
                        <div className="frame-parent">
                            <div className="recherche-wrapper">
                                <div className="recherche">Recherche</div>
                            </div>
                            <img className="loupe1-1-icon" alt="" src="/loupe1-1@2x.png"/>
                        </div>
                    </div>
                    <div className="sans-titre-6-1-parent">
                        <img
                            className="sans-titre-6-1"
                            alt=""
                            src="/sans-titre6-1@2x.png"
                        />
                        <div className="group-div">
                            <div className="group-parent1">
                                <div className="group-item">
                                    <img className="group-item" alt="" src="/group-131.svg"/>
                                    <div className="bibliothque-parent">
                                        <div className="bibliothque">Bibliothèque</div>
                                        <img
                                            className="ionlibrary-icon"
                                            alt=""
                                            src="/ionlibrary.svg"
                                        />
                                    </div>
                                    <img
                                        className="notification-2-icon"
                                        alt=""
                                        src="/notification-2@2x.png"
                                    />
                                    <div className="accueil-parent">
                                        <div className="accueil">Accueil</div>
                                        <img
                                            className="mingcutehome-2-fill-icon"
                                            alt=""
                                            src="/mingcutehome2fill.svg"
                                        />
                                    </div>
                                </div>
                                <div className="adhrents">Adhérents</div>
                                <div className="notifications">Notifications</div>
                            </div>
                            <img className="group-inner" alt="" src="/group-146.svg"/>
                            <img
                                className="silhouette-dutilisateurs-multi-icon"
                                alt=""
                                src="/silhouettedutilisateursmultiples1-1@2x.png"
                            />
                        </div>
                    </div>
                    <div className="mifilter-parent">
                        <img className="mifilter-icon" alt="" src="/mifilter.svg"/>
                    </div>
                    <div className="frame-div">
                        <img className="frame-child" alt="" src="/ellipse-22@2x.png"/>
                        <div className="adhrents1">Adhérents</div>
                        <img className="justthekk-1-icon" alt="" src="/justthekk-11@2x.png"/>
                        <div className="header">
                        </div>
                    </div>
                    <div className="titre-voir-plus-parent">
                        <div className="titre-voir-plus">
                            <div className="julien">Liste des adhérents</div>
                        </div>
                        <div className="line-div"/>
                    </div>
                    <img
                        className="ajouter-un-utilisateur-1-icon"
                        alt=""
                        src="/ajouterunutilisateur-1@2x.png"
                    />
                    <div className="ajouter-un-adhrent">ajouter un adhérent</div>
                </div>
            </div>
        </div>
    );
};

export default AdherentList;
