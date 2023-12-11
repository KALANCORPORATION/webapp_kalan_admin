import React from 'react';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import ConnexionAdminApp from './views/login/ConnexionAdminApp';
import AdherentList from './views/adherent/AdherentList';

function App() {
    return (
        <Routes>
            <Route path="/" element={<ConnexionAdminApp />} />
            <Route path="/adherents" element={<AdherentList />} />

        </Routes>
    );
}

export default App;
