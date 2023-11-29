import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect, Switch } from 'react-router-dom';
import ConnexionAdminApp from './views/login/ConnexionAdminApp';
import AdherentList from './views/adherent/AdherentList';
import ConnexionAdminApp from "./views/login/ConnexionAdminApp";
import Result from "./views/scan/Result";
import Scan from "./views/scan/scan";

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<ConnexionAdminApp/>} />
                <Route path="/adherents" element={<AdherentList/>} />
                <Route path="/scan" element={<Result />} />
                <Route path="/test" element={<Scan />} />
                <Route path="/scan" element={<Result />} />
            </Routes>
        </div>
    );
};


export default App;
