import { useCallback } from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import { connectorsByName } from '../utils/connectors';
import { useAppDispatch } from '../redux/hook';
import { setState } from '../redux/triedEager';
import { setupNetwork } from './walletTokenNetwork';

const useAuth = () => {
    const dispatch = useAppDispatch();
    const { activate, deactivate } = useWeb3React();

    const logout = useCallback(() => {
        dispatch(setState(false));
        deactivate();

        const connecetedWallet = localStorage.getItem('Wallet') ?? 'WalletConnect';

        if (window.localStorage.getItem('walletconnect')) {
            connectorsByName[connecetedWallet].walletConnectProvider = undefined;
            connectorsByName[connecetedWallet].close();
            localStorage.removeItem('walletconnect');
        }

        localStorage.removeItem('Wallet');
    }, [deactivate, dispatch]);

    const login = useCallback(
        (connectorID: string) => {
            const connector = connectorsByName[connectorID];
            if (connector) {
                activate(connector, async (error: Error) => {
                    if (error instanceof UnsupportedChainIdError) {
                        const hasSetup = await setupNetwork();

                        if (hasSetup) {
                            activate(connector, undefined, true).catch(() => {
                                dispatch(setState(true));
                            });
                        } else {
                            console.log('logout');
                            logout();
                        }
                    } else {
                        // window.localStorage.removeItem('Wallet');
                        if (error instanceof NoEthereumProviderError) {
                            console.log('Provider Error', 'No provider was found');
                        } else if (error instanceof UserRejectedRequestErrorInjected) {
                            console.log('Authorization Error', 'Please authorize to access your account');
                        } else {
                            console.log(error.name, error.message);
                        }
                        logout();
                    }
                }).catch(() => {
                    dispatch(setState(true));
                });
            } else {
                console.log("Can't find connector", 'The connector config is wrong');
            }
        },
        [activate, dispatch, logout],
    );

    return { login, logout };
};

export default useAuth;
