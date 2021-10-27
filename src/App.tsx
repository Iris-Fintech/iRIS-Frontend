import React, { ReactNode, lazy } from 'react';

const WalletModal = lazy(() => import('./components/WalletModal'));
const WalletInfo = lazy(() => import('./components/Wallet'));
const Account = lazy(() => import('./components/Account'));
const ConnectButton = lazy(() => import('./components/ConnectButton'));

import injectedConnector from './utils/injectConnection';
import { Footer } from './components/Footer/Footer';

const App = ({ children }: { children: ReactNode | undefined }) => {
    injectedConnector();

    return (
        <div>
            {children}
            <ConnectButton />
            <WalletInfo />
            <WalletModal />
            <Account />
            <Footer />
        </div>
    );
};

export default App;
