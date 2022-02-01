// import necessary library
import { useCallback } from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';

import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector';

// import local components
import { injected, walletconnect } from '../utils/connectors';
import { useAppDispatch } from '../redux/hook';
import { setState } from '../redux/triedEager';
import { setupNetwork } from './walletTokenNetwork';

const useAuth = () => {
    const dispatch = useAppDispatch();
    const { active, connector, activate, deactivate } = useWeb3React();

    if (active) {
        if (connector == injected) {
            localStorage.setItem('_iris_fintech_', 'Injected');
        } else if (connector == walletconnect) {
            localStorage.setItem('_iris_fintech_', 'WalletConnect');
        }
    }

    const logout = useCallback(() => {
        dispatch(setState(false));
        deactivate();

        if (localStorage.getItem('_iris_fintech_') == 'WalletConnect') {
            (walletconnect as any).handleDisconnect();
        }

        localStorage.removeItem('_iris_fintech_');
        localStorage.removeItem('walletconnect');
    }, [deactivate, dispatch]);

    const login = useCallback(
        (connectorId) => {
            var currentConnector: any;
            if (connectorId == 'Injected') {
                currentConnector = injected;
            } else if (connectorId == 'WalletConnect') {
                currentConnector = walletconnect;
            } else {
                const connectorType = localStorage.getItem('_iris_fintech_');
                if (connectorType == 'Injected') {
                    currentConnector = injected;
                } else if (connectorType == 'WalletConnect') {
                    currentConnector = walletconnect;
                }
            }

            if (currentConnector) {
                activate(currentConnector, async (error: Error) => {
                    if (error instanceof UnsupportedChainIdError) {
                        if (currentConnector == injected) {
                            const hasSetup = await setupNetwork();

                            if (hasSetup) {
                                activate(currentConnector, undefined, true).catch(() => {
                                    dispatch(setState(true));
                                });
                            } else {
                                console.log('logout');
                                logout();
                            }
                        } else if (currentConnector == walletconnect) {
                            currentConnector.handleDisconnect();
                            console.log('logout');
                            logout();
                        }
                    } else {
                        // window.localStorage.removeItem('Wallet');
                        if (error instanceof NoEthereumProviderError) {
                            console.log('Provider Error', 'No provider was found');
                        } else if (error instanceof UserRejectedRequestErrorInjected) {
                            console.log('Authorization Error', 'Please authorize to access your account');
                        } else if (error instanceof UserRejectedRequestErrorWalletConnect) {
                            currentConnector.handleDisconnect();
                            console.log('Authorization Error', 'Please authorize to access your account');
                        } else {
                            console.log(error.name, error.message);
                        }
                        logout();
                    }
                }).catch(() => {
                    dispatch(setState(true));
                    logout();
                });
            } else {
                console.log("Can't find connector", 'The connector config is wrong');
                logout();
            }
        },
        [activate, dispatch, logout],
    );

    return { login, logout };
};

export default useAuth;
