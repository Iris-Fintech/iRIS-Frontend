import React, { ReactNode, lazy } from 'react';

const WalletModal = lazy(() => import('./components/WalletModal'));
const WalletInfo = lazy(() => import('./components/Wallet'));

const App = ({ children }: { children: ReactNode | undefined }) => {
    return (
        <div>
            {children}
            <WalletInfo />
            <WalletModal />
        </div>
    );
};

export default App;
