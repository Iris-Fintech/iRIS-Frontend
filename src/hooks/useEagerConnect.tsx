import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useAppDispatch } from '../redux/hook';
import { ConnectorNames } from '../utils/connectorNames';
import useAuth from './useAuth';

const useEagerConnect = () => {
    // const triedEager = useAppSelector((state) => state.triedEager.tried);
    const { activate } = useWeb3React();
    const dispatch = useAppDispatch();
    const { login } = useAuth();

    useEffect(() => {
        const connecetedWallet = localStorage.getItem('Wallet');
        if (
            connecetedWallet == ConnectorNames.BSC ||
            connecetedWallet == ConnectorNames.Injected ||
            connecetedWallet == ConnectorNames.WalletConnect
        ) {
            login(connecetedWallet);
        }
    }, [activate, dispatch, login]); // intentionally only running on mount (make sure it's only mounted once :))
};

export default useEagerConnect;
