import "../../styles/BooksList.css";
import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";
import Navbar from "../../components/NavBar";
import { useLocation } from 'react-router-dom';


const BooksList = () => {
    return (
        <div className="bibliothque-parent">
            <Navbar />
            <div className="bibliothque">
                <div className="panser-lafrique-qui-vient-parent">
                    <div className="panser-lafrique-qui">
                        Panser l’afrique qui vient !
                    </div>
                    <div className="ltranger-est-un">
                        L'Étranger est un roman écrit par Albert Camus et publié en 1942.
                        Cet ouvrage est le récit poignant d'un homme apathique et détaché
                        socialement, Meursault, dont le meurtre sans motif apparent met en
                        lumière l'absurdité de l'existence et...
                    </div>
                    <div className="de-nicolas">De : Nicolas Sarkozy</div>
                    <div className="disponible-le-180222">disponible le 18/02/22</div>
                    <div className="disponible">disponible</div>
                    <div className="disponible1">disponible</div>
                    <div className="disponible-le-1802221">disponible le 18/02/22</div>
                </div>
                <div className="quoi-de-neuf-parent">
                    <div className="quoi-de-neuf">Quoi de neuf</div>
                    <div className="ltranger-est-un1">
                        L'Étranger est un roman écrit par Albert Camus et publié en 1942.
                        Cet ouvrage est le récit poignant d'un homme apathique et détaché
                        socialement, Meursault, dont le meurtre sans motif apparent met en
                        lumière l'absurdité de l'existence et...
                    </div>
                    <div className="de-nicolas1">De : Nicolas Sarkozy</div>
                </div>
                <div className="la-tresse-parent">
                    <div className="quoi-de-neuf">La tresse</div>
                    <div className="ltranger-est-un1">
                        L'Étranger est un roman écrit par Albert Camus et publié en 1942.
                        Cet ouvrage est le récit poignant d'un homme apathique et détaché
                        socialement, Meursault, dont le meurtre sans motif apparent met en
                        lumière l'absurdité de l'existence et...
                    </div>
                    <div className="de-nicolas1">De : Nicolas Sarkozy</div>
                </div>
                <div className="bluelock-blue-parent">
                    <div className="quoi-de-neuf">BlueLock blue</div>
                    <div className="ltranger-est-un1">
                        L'Étranger est un roman écrit par Albert Camus et publié en 1942.
                        Cet ouvrage est le récit poignant d'un homme apathique et détaché
                        socialement, Meursault, dont le meurtre sans motif apparent met en
                        lumière l'absurdité de l'existence et...
                    </div>
                    <div className="de-nicolas1">De : Nicolas Sarkozy</div>
                </div>
                <div className="ellipse-parent">
                    <img className="frame-child" alt="" src="/ellipse-2221@2x.png" />
                    <div className="bibliothque1">Bibliothèque</div>
                    <img
                        className="justthekk-1-icon"
                        alt=""
                        src="/justthekk-121@2x.png"
                    />
                </div>
                <img
                    className="trois-points-plus-indicateur-2-icon"
                    alt=""
                    src="/troispointsplusindicateur-2@2x.png"
                />
                <img
                    className="trois-points-plus-indicateur-3-icon"
                    alt=""
                    src="/troispointsplusindicateur-2@2x.png"
                />
                <img
                    className="trois-points-plus-indicateur-4-icon"
                    alt=""
                    src="/troispointsplusindicateur-2@2x.png"
                />
                <img
                    className="trois-points-plus-indicateur-5-icon"
                    alt=""
                    src="/troispointsplusindicateur-2@2x.png"
                />
                <div className="titre-voir-plus-parent">
                    <div className="titre-voir-plus">
                        <div className="les-livres-de">Les livres de l’Espace</div>
                    </div>
                    <div className="group-child" />
                </div>

                <div className="mifilter-parent">
                    <img className="mifilter-icon" alt="" src="/mifilter.svg" />
                    <div className="filtrer">Filtrer</div>
                </div>
                <img className="livre3-3-icon" alt="" src="/livre3-2@2x.png" />
                <Link to="/scan">
                    <img
                        className="code-a-barres1-3-icon"
                        alt=""
                        src="/codeabarres1-3@2x.png"
                    />
                </Link>
                <div className="emprunt">emprunté</div>
                <img
                    className="ebook-3d-prvention-risq-ggrlo"
                    alt=""
                    src="/ebook-3d-prvention-risq-ggrlogo-mse-211@2x.png"
                />
                <img
                    className="ebook-3d-prvention-risq-ggrlo1"
                    alt=""
                    src="/ebook-3d-prvention-risq-ggrlogo-mse-31@2x.png"
                />
                <img
                    className="ebook-3d-prvention-risq-ggrlo2"
                    alt=""
                    src="/ebook-3d-prvention-risq-ggrlogo-mse-41@2x.png"
                />
                <img
                    className="ebook-3d-prvention-risq-ggrlo3"
                    alt=""
                    src="/ebook-3d-prvention-risq-ggrlogo-mse-51@2x.png"
                />
                <div className="bibliothque-inner1">
                    <div className="frame-parent">
                        <div className="recherche-wrapper">
                            <div className="recherche">Recherche</div>
                        </div>
                        <img className="loupe1-1-icon" alt="" src="/loupe1-1@2x.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksList;
