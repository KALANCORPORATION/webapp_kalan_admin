import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateAdherent  from './views/adherent/AdherentByForm'
import AddBook from './views/books/AddBooksByForm'
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './global.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
