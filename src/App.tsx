import React, { lazy } from 'react';

const WalletModal = lazy(() => import('./components/WalletModal'));
const WalletInfo = lazy(() => import('./components/Wallet'));
const Account = lazy(() => import('./components/Account'));
const Routes = lazy(() => import('./route'));
import Header from './components/Header';
import injectedConnector from './utils/injectConnection';

const App = () => {
    injectedConnector();

    return (
        <div>
            <Header />
            <Routes />
            <WalletInfo />
            <WalletModal />
            <Account />
        </div>
    );
};

export default App;
