import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect, Switch } from 'react-router-dom';
import ConnexionAdminApp from './views/login/ConnexionAdminApp';
import AdherentList from './views/adherent/AdherentList';

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

export default App;
