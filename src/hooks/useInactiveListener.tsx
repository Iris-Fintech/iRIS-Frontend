import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import useAuth from './useAuth';

const useInactiveListener = (suppress: boolean = false) => {
    const { connector, active, error } = useWeb3React();
    const connectedWallet = localStorage.getItem('_iris_fintech_') ?? '';
    const { login } = useAuth();

    useEffect((): any => {
        if (connector && connector.on && !active && !error && !suppress) {
            const handleConnect = () => {
                console.log("Handling 'connect' event");
                login('useInactiveListener');
            };
            const handleChainChanged = (chainId: string | number) => {
                console.log("Handling 'chainChanged' event with payload", chainId);
                window.location.reload();
                login('useInactiveListener');
            };
            const handleAccountsChanged = (accounts: string[]) => {
                console.log("Handling 'accountsChanged' event with payload", accounts);
                if (accounts.length > 0) {
                    login('useInactiveListener');
                }
            };
            const handleNetworkChanged = (networkId: string | number) => {
                console.log("Handling 'networkChanged' event with payload", networkId);
                login('useInactiveListener');
            };

            connector.on('connect', handleConnect);
            connector.on('chainChanged', handleChainChanged);
            connector.on('accountsChanged', handleAccountsChanged);
            connector.on('networkChanged', handleNetworkChanged);

            return () => {
                if (connector.removeListener) {
                    connector.removeListener('connect', handleConnect);
                    connector.removeListener('chainChanged', handleChainChanged);
                    connector.removeListener('accountsChanged', handleAccountsChanged);
                    connector.removeListener('networkChanged', handleNetworkChanged);
                }
            };
        }
    }, [active, error, suppress, connector, login, connectedWallet]);
};

export default useInactiveListener;
