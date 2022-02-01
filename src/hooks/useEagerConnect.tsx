import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useAppDispatch } from '../redux/hook';
import useAuth from './useAuth';

const useEagerConnect = () => {
    const { activate } = useWeb3React();
    const dispatch = useAppDispatch();
    const { login } = useAuth();

    useEffect(() => {
        const connecetedWallet = localStorage.getItem('_iris_fintech_');

        if (connecetedWallet) {
            login('useEagerConnect');
        }
    }, [activate, dispatch, login]); // intentionally only running on mount (make sure it's only mounted once :))
};

export default useEagerConnect;
