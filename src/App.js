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
import AdminRegistration from './views/inscription/admin';
import ReferentRegistration from './views/inscription/referent';

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<SplashScreen2/>} />
                <Route path="/auth/signup/choice" element={<UserTypeChoicePage/>} />
                <Route path="/auth/signup/admin" element={<AdminRegistration/>} />
                <Route path="/auth/signup/referent" element={<ReferentRegistration/>} />
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
