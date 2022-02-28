import React, { lazy } from 'react';

const WalletModal = lazy(() => import('./components/WalletModal'));
const Routes = lazy(() => import('./route'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Ending = lazy(() => import('./components/Ending'));
// const Account = lazy(() => import('./components/Account'));

import BaseConnector from './utils/baseConnection';

const App = () => {
    BaseConnector();

    return (
        <div>
            <Header />
            <Routes />
            <WalletModal />
            {/* <Account /> */}
            <Ending />
            <Footer />
        </div>
    );
};

export default App;
