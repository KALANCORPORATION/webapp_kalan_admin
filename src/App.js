import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect, Switch } from 'react-router-dom';
import ConnexionAdminApp from './views/login/ConnexionAdminApp';
import SplashScreen1 from './views/splashscreen/splashScreen1';
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

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<SplashScreen1/>} />
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
