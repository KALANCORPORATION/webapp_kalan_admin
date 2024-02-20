import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect, Switch } from 'react-router-dom';
import ConnexionAdminApp from './views/login/ConnexionAdminApp';
import { ListReferent } from './views/referent/List';
import { ListAdherents } from './views/adherent/List';
import { ProfileReferent } from './views/referent/Profile';
import { ProfileAdherent } from './views/adherent/Profile';
import { Historique } from './views/historique/List';
import { ListInvitations } from './views/invitation/List';

import Result from "./views/scan/Result";
import Scan from "./views/scan/scan";
import HomepageAdmin from "./views/homepage/HomepageAdmin";
import BooksList from "./views/books/BooksList";
import SplashScreen2 from "./views/splashscreen/splashScreen2";
import UserTypeChoicePage from './views/inscription/userTypeChoicePage';
import AdminRegistrationSpaceInformation from './views/inscription/adminVotreEspace';
import AdminRegistrationIdInformation from './views/inscription/adminVotreIdentifiant';
import AdminRegistrationProfilInformation from './views/inscription/adminVotreProfil';

import ReferentRegistrationEstablishmentInformation from './views/inscription/referentVotreEtablissement';
import ReferentRegistrationIdInformation from './views/inscription/referentVotreIdentifiant';
import ReferentRegistrationProfilInformation from './views/inscription/referentVotreProfil';

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<SplashScreen2/>} />
                <Route path="/auth/signup/choice" element={<UserTypeChoicePage/>} />
                <Route path="/auth/signup/admin/votre-espace" element={<AdminRegistrationSpaceInformation/>} />
                <Route path="/auth/signup/admin/votre-identifiant" element={<AdminRegistrationIdInformation/>} />
                <Route path="/auth/signup/admin/votre-profil" element={<AdminRegistrationProfilInformation/>} />

                <Route path="/auth/signup/referent/votre-etablissement" element={<ReferentRegistrationEstablishmentInformation/>} />
                <Route path="/auth/signup/referent/votre-identifiant" element={<ReferentRegistrationIdInformation/>} />
                <Route path="/auth/signup/referent/votre-profil" element={<ReferentRegistrationProfilInformation/>} />                

                <Route path="/login" element={<ConnexionAdminApp/>} />
                <Route path="/adherents" element={<ListAdherents/>} />
                <Route path="/adherent/:id" element={<ProfileAdherent />} />
                <Route path="/referents" element={<ListReferent/>} />
                <Route path="/referent/:id" element={<ProfileReferent />} />
                <Route path="/invitations" element={<ListInvitations/>} />
                <Route path="/historique" element={<Historique />} />
                <Route path="/homepage" element={<HomepageAdmin/>} />
                <Route path="/scan" element={<Result />} />
                <Route path="/test" element={<Scan />} />
                <Route path="/books" element={<BooksList />} />
            </Routes>
        </div>
    );
};

export default App;
