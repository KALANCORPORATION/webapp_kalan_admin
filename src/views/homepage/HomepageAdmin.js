import "../../styles/HomepageAdmin.css";
import {useEffect, useState} from "react";
import HomeController from "../../controllers/spaceController";
import SpaceController from "../../controllers/spaceController";
import AdherentController from "../../controllers/adherentController";
import ReferentController from "../../controllers/referentController";
import BookSpaceController from "../../controllers/bookSpaceController";
import RecentBooksComponent from "./RecentBooksComponent";
import Navbar from "../../components/NavBar";

const HomepageAdmin = () => {

    const [weeklyStats, setWeeklyStats] = useState({
        current_week_borrows: 0,
        last_week_borrows: 0,
        borrow_variation: '=',
        current_week_reservations: 0,
        last_week_reservations: 0,
        reservation_variation: '=',
    });

    const [recentAdherents, setRecentAdherents] = useState([]);
    const [recentReferents, setRecentReferents] = useState([]);
    const [recentBooks, setRecentBooks] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const accessToken = localStorage.getItem('accessToken');

            try {
                const spaceId = await SpaceController.getSpaceId(accessToken);
                await fetchWeeklyStats(accessToken, spaceId);
                await fetchRecentAdherents(accessToken, spaceId);
                await fetchRecentReferents(accessToken, spaceId);
                await fetchRecentBooks(accessToken, spaceId);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        const fetchWeeklyStats = async (accessToken, spaceId) => {
            try {
                const response = await HomeController.getWeeklyStats(accessToken, spaceId);
                setWeeklyStats(response);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        const fetchRecentBooks = async (accessToken, spaceId) => {
            try {
                const response = await BookSpaceController.getRecentBooks(spaceId, 3, accessToken);
                setRecentBooks(response);
            } catch (error) {
                console.error('Error fetching recent books:', error.message);
            }
        };

        const fetchRecentAdherents = async (accessToken, spaceId) => {
            try {
                const response = await AdherentController.getRecentAdherents(spaceId, 3, accessToken);
                setRecentAdherents(response);
            } catch (error) {
                console.error('Error fetching recent adherents:', error.message);
            }
        };

        const fetchRecentReferents = async (accessToken, spaceId) => {
            try {
                const response = await ReferentController.getRecentReferents(spaceId, 3, accessToken);
                setRecentReferents(response);
            } catch (error) {
                console.error('Error fetching recent referents:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="home-admin-parent">
            <div className="home-admin">
                <Navbar />
                <div className="tous-les-livres">
                    <div className="voir-plus-wrapper">
                        <div className="voir-plus-wrapper">
                            <div className="voir-plus">Voir plus</div>
                        </div>
                    </div>
                </div>
                <div className="les-adhrents">
                    <div className="voir-plus-parent">
                        <div className="voir-plus">Voir plus</div>
                        <div className="voir-plus2">Voir plus</div>
                    </div>
                    <div className="recent-adherent-container">
                    {recentAdherents.map((recentAdherent, index) => (
                            <div className={`recent-adherent-container ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                <img className="home-admin-child" alt="" src={recentAdherent.imagePath || "/ellipse-251@2x.png"} />
                                <div className="firstname">{recentAdherent.adherent.firstName}</div>
                            </div>
                    ))}
                    </div>
                </div>
                <div className="les-statistiques">
                    <div className="titre-voir-plus2">
                        <div className="voir-plus-wrapper">
                            <div className="voir-plus">Voir plus</div>
                        </div>
                    </div>
                    <div className="rectangle-parent2">
                        <div className="group-child6" />
                        <div className="group-child7" />
                        <div className="div">{weeklyStats.current_week_borrows}</div>
                        <div className="div3">{weeklyStats.current_week_reservations}</div>
                        <div className="emprunts">Emprunts</div>
                        <div className="rservations">Réservations</div>
                        <img
                            className="eparrow-up-bold-icon"
                            alt=""
                            src="/eparrowupbold.svg"
                        />
                        <img
                            className="eparrow-up-bold-icon1"
                            alt=""
                            src="/eparrowupbold1.svg"
                        />
                    </div>
                </div>
                <div className="ellipse-parent2">
                    <img className="frame-item" alt="" src="/ellipse-221@2x.png" />
                    <div className="accueil1">Accueil</div>
                    <img
                        className="justthekk-1-icon1"
                        alt=""
                        src="/justthekk-11@2x.png"
                    />
                </div>
                <div className="rectangle-parent3">
                    <img className="image-4-icon" alt="" src="/image-4@2x.png" />

                    <div className="fleche-droite-2-parent2">
                        <img
                            className="fleche-droite-2-icon4"
                            alt=""
                            src="/flechedroite-21@2x.png"
                        />
                        <img
                            className="fleche-droite-3-icon4"
                            alt=""
                            src="/flechedroite-31@2x.png"
                        />
                            <RecentBooksComponent recentBooks={recentBooks} />
                    </div>
                </div>
                <div className="titre-voir-plus-group">
                    <div className="titre-voir-plus3">
                        <div className="voir-plus">Les derniers emprunts</div>
                    </div>
                    <div className="group-child9" />
                </div>
                <div className="titre-voir-plus-container">
                    <div className="titre-voir-plus4">
                        <div className="voir-plus">Les derniers livres ajoutés</div>
                    </div>
                    <div className="group-child9" />
                </div>
                <div className="titre-voir-plus-parent1">
                    <div className="titre-voir-plus4">
                        <div className="voir-plus">Statistiques de la semaine</div>
                    </div>
                    <div className="group-child9" />
                </div>
                <div className="titre-voir-plus-parent2">
                    <div className="titre-voir-plus6">
                        <div className="voir-plus">Les derniers adhérents</div>
                    </div>
                    <div className="group-child9" />
                </div>
                <div className="titre-voir-plus-parent3">
                    <div className="titre-voir-plus7">
                        <div className="voir-plus">Les derniers référents</div>
                    </div>
                    <div className="group-child9" />
                </div>
                <div className="recent-referent-container">
                    {recentReferents.map((recentReferent, index) => (
                        <div className={`recent-referent-container ${index % 2 === 0 ? 'even' : 'odd'}`}>
                            <img className="home-admin-child-referent" alt="" src={recentReferent.imagePath || "/ellipse-251@2x.png"} />
                            <div className="firstnameReferent">{recentReferent.referent.firstName}</div>
                        </div>
                    ))}
                </div>
                <div className="notification2-1-parent">
                    <div className="notification2-1" />
                    <img
                        className="notification-2-icon1"
                        alt=""
                        src="/notification-21@2x.png"
                    />
                    <div className="ellipse-div" />
                </div>
                <div className="tous-les-livres1">
                    <div className="voir-plus-wrapper">
                        <div className="voir-plus-wrapper">
                            <div className="voir-plus">Voir plus</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomepageAdmin;
