import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector';
import { UnsupportedChainIdError } from '@web3-react/core';

const getErrorMessage = (error: Error) => {
    if (error instanceof NoEthereumProviderError) {
        return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
    }
    if (error instanceof UnsupportedChainIdError) {
        return 'You are connected to an unsupported network.';
    }
    if (error instanceof UserRejectedRequestErrorInjected || error instanceof UserRejectedRequestErrorWalletConnect) {
        return 'Please authorize this website to access your Ethereum account.';
    }

    console.error(error);
    return 'An unknown error occurred. Check the console for more details.';
};

export { getErrorMessage };
