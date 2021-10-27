import React, { lazy } from 'react';

const WalletModal = lazy(() => import('./components/WalletModal'));
const WalletInfo = lazy(() => import('./components/Wallet'));
const Account = lazy(() => import('./components/Account'));
const Routes = lazy(() => import('./route'));
import Header from './components/Header';
import injectedConnector from './utils/injectConnection';
import { Footer } from './components/Footer/Footer';

const App = () => {
    injectedConnector();

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
