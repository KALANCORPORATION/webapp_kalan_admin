import ConnexionAdminApp from 'views/login/ConnexionAdminApp';

const routes = [
    { path: '/', component: ConnexionAdminApp },
    { path: '/adherents', component: AdherentList, exact: true },
];

export default routes;
