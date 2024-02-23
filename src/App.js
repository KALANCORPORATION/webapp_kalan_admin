import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect, Switch } from 'react-router-dom';
import ConnexionAdminApp from './views/login/ConnexionAdminApp';
import BarcodeScannerPopup from './views/scan/BarcodeScannerPopup';
import { ListReferent } from './views/referent/List';
import { ListAdherents } from './views/adherent/List';
import { ProfileReferent } from './views/referent/Profile';
import { ProfileAdherent } from './views/adherent/Profile';
import Update from './views/adherent/Update';
import { Historique } from './views/historique/List';
import { ListInvitations } from './views/invitation/List';

import Result from "./views/scan/Result";
import Scan from "./views/scan/scan";
import HomepageAdmin from "./views/homepage/HomepageAdmin";
import List from "./views/books/List";
import BookDetails from "./views/books/Details";
import SplashScreen2 from "./views/splashscreen/splashScreen2";
import InscriptionForm from "./views/adherent/Inscription";
import BookISBNForm from './views/books/BookISBNForm';
import AddBook from './views/books/Add';

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<SplashScreen2/>} />
                <Route path="/homepage" element={<HomepageAdmin/>} />
                <Route path="/adherents" element={<ListAdherents/>} />
                <Route path="/adherent/add" element={<InscriptionForm/>} />
                <Route path="/adherent/:id" element={<ProfileAdherent />} />
                <Route path="/adherent/:id/update" element={<Update />} />
                <Route path="/historique" element={<Historique />} />
                <Route path="/invitations" element={<ListInvitations/>} />
                <Route path="/login" element={<ConnexionAdminApp/>} />
                <Route path="/books" element={<List />} />
                <Route path="/book/:id" element={<BookDetails />} />
                <Route path="/book/isbn" element={<BookISBNForm/>} />
                <Route path="/book/add" element={<AddBook/>} />
                <Route path="/referents" element={<ListReferent/>} />
                <Route path="/referent/:id" element={<ProfileReferent />} />
                <Route path="/scanner" element={<BarcodeScannerPopup/>} />
                <Route path="/scan" element={<Result />} />
                <Route path="/test" element={<Scan />} />
            </Routes>
        </div>
    );
};

export default App;
