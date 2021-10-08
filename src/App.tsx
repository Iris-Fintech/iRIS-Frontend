import React, { ReactNode, lazy } from 'react';

const WalletModal = lazy(() => import('./components/WalletModal'));
const WalletInfo = lazy(() => import('./components/Wallet'));
const Account = lazy(() => import('./components/Account'));

const App = ({ children }: { children: ReactNode | undefined }) => {
    return (
        <div>
            {children}
            <WalletInfo />
            <WalletModal />
            <Account />
        </div>
    );
};

export default App;
