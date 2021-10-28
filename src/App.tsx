import React, { lazy } from 'react';

const WalletModal = lazy(() => import('./components/WalletModal'));
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
            <WalletModal />
            <Account />
            <Footer />
        </div>
    );
};

export default App;
