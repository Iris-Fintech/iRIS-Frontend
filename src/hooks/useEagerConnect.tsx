import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useAppDispatch } from '../redux/hook';
import { bscConnector } from '../utils/connectors';
import { ConnectorNames } from '../utils/connectorNames';
import { setState } from '../redux/triedEager';
import useAuth from './useAuth';

const useEagerConnect = () => {
    // const triedEager = useAppSelector((state) => state.triedEager.tried);
    const { activate } = useWeb3React();
    const dispatch = useAppDispatch();
    const { login } = useAuth();

    useEffect(() => {
        const connecetedWallet = localStorage.getItem('Wallet');

        if (connecetedWallet == ConnectorNames.BSC) {
            bscConnector.isAuthorized().then((isAuthorized: boolean) => {
                if (isAuthorized) {
                    activate(bscConnector, undefined, true).catch(() => {
                        dispatch(setState(true));
                    });
                } else {
                    if (window.ethereum) {
                        activate(bscConnector, undefined, true).catch(() => {
                            dispatch(setState(true));
                        });
                    } else {
                        dispatch(setState(false));
                    }
                    dispatch(setState(false));
                }
            });
        } else if (connecetedWallet == ConnectorNames.Injected) {
            login(connecetedWallet);
        } else {
            localStorage.removeItem('Wallet');
        }
    }, []); // intentionally only running on mount (make sure it's only mounted once :))
};

export default useEagerConnect;
