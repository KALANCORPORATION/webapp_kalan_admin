import ConnexionAdminApp from 'views/login/ConnexionAdminApp';
import AdherentList from 'views/adherent/AdherentList';

const routes = [
    { path: '/', component: ConnexionAdminApp },
    { path: '/adherents', component: AdherentList, exact: true },
];

export default routes;
