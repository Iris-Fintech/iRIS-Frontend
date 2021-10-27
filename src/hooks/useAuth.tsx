import { useCallback } from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { NoBscProviderError } from '@binance-chain/bsc-connector';
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import {
    UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
    WalletConnectConnector,
} from '@web3-react/walletconnect-connector';
import { connectorsByName } from '../utils/connectors';
import { useAppDispatch } from '../redux/hook';
import { setState } from '../redux/triedEager';
import { setupNetwork } from './walletTokenNetwork';
import { ConnectorNames } from '../utils/connectorNames';

const useAuth = () => {
    const dispatch = useAppDispatch();
    const { activate, deactivate } = useWeb3React();

    const logout = useCallback(() => {
        const connecetedWallet = localStorage.getItem('Wallet');
        if (connecetedWallet == ConnectorNames.WalletConnect) {
            connectorsByName[connecetedWallet].close();
        }

        localStorage.removeItem('Wallet');

        dispatch(setState(false));
        deactivate();
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
                        }
                    } else {
                        window.localStorage.removeItem('Wallet');
                        if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
                            console.log('Provider Error', 'No provider was found');
                        } else if (
                            error instanceof UserRejectedRequestErrorInjected ||
                            error instanceof UserRejectedRequestErrorWalletConnect
                        ) {
                            if (connector instanceof WalletConnectConnector) {
                                const walletConnector = connector as WalletConnectConnector;
                                walletConnector.walletConnectProvider = null;
                            }
                            console.log('Authorization Error', 'Please authorize to access your account');
                        } else {
                            console.log(error.name, error.message);
                        }
                    }
                }).catch(() => {
                    dispatch(setState(true));
                });
            } else {
                console.log("Can't find connector", 'The connector config is wrong');
            }
        },
        [activate, dispatch],
    );

    return { login, logout };
};

export default useAuth;
