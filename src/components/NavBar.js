import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import Result from "../views/scan/Result";
import React from "react";

const Navbar = () => {
    return (
        <div className="sans-titre-6-1-group">
            <div className="icons8-bibliothque-64-1-parent">
                <img
                    className="icons8-bibliothque-64-1"
                    alt=""
                    src="/icons8bibliothque64-1@2x.png"
                />
                <div className="group-parent3">
                    <div className="group-parent4">
                        <div className="group-parent5">
                            <div className="group-icon">
                                <img className="group-icon" alt="" src="/group-131.svg"/>
                                <div className="bibliothque-group">
                                    <div className="bibliothque1">Bibliothèque</div>
                                    <div className="bibliothque1">Bibliothèque</div>
                                    <div className="mon-espace">Mon espace</div>
                                    <Link to="/books">
                                        <img
                                            className="ionlibrary-icon1"
                                            alt=""
                                            src="/ionlibrary1.svg"
                                        />
                                    </Link>
                                </div>
                                <div className="accueil-group">
                                    <div className="accueil2">Accueil</div>
                                    <img
                                        className="mingcutehome-2-fill-icon1"
                                        alt=""
                                        src="/mingcutehome2fill1.svg"
                                    />
                                </div>
                            </div>
                            <div className="silhouette-dutilisateurs-multi-parent">
                                <Link to="/adherents">
                                    <img
                                        className="silhouette-dutilisateurs-multi-icon1"
                                        alt=""
                                        src="/silhouettedutilisateursmultiples-1@2x.png"
                                    />
                                </Link>
                                <div className="adhrents2">Adhérents</div>
                            </div>
                        </div>
                        <Popup trigger={<img className="group-child14" alt="" src="/group-1461.svg"/>} modal>
                            {close => (
                                <Result/>
                            )}
                        </Popup>

                    </div>
                    <img
                        className="icons8-bibliothque-64-11"
                        alt=""
                        src="/icons8bibliothque64-1@2x.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
