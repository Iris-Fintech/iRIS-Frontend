import React, { lazy } from 'react';

const WalletInfo = lazy(() => import('./components/Wallet'));
const Account = lazy(() => import('./components/Account'));
const Routes = lazy(() => import('./route'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer/Footer'));

import BaseConnector from './utils/baseConnection';

const App = () => {
    BaseConnector();

    return (
        <div>
            <Header />
            <Routes />
            <WalletInfo />
            <Account />
            <Footer />
        </div>
    );
};

export default App;
