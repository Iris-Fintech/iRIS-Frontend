import React, { ReactNode, lazy } from 'react';

const WalletModal = lazy(() => import('./components/WalletModal'));
const WalletInfo = lazy(() => import('./components/Wallet'));
const Account = lazy(() => import('./components/Account'));
const ConnectButton = lazy(() => import('./components/ConnectButton'));

import injectedConnector from './utils/injectConnection';

const App = ({ children }: { children: ReactNode | undefined }) => {
    injectedConnector();

    return (
        <div>
            {children}
            <ConnectButton />
            <WalletInfo />
            <WalletModal />
            <Account />
        </div>
    );
};

export default App;
