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
            </Routes>
        </div>
    );
};

      <Route path="/test" element={<Scan />} />
      <Route path="/scan" element={<Result />} />
export default App;
