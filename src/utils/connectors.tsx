// Library Import
import { InjectedConnector } from '@web3-react/injected-connector';
import { ethers } from 'ethers';

// Import TSX File
import { getRPCNodeUrl, getChainID } from './getRPC';

// Define Constants
// const POLLING_INTERVAL: number = 12000;
const RPC_URL: string | undefined = getRPCNodeUrl();
const CHAIN_ID: number = getChainID();

// Type Check: RPC_URL should be valid string
if (RPC_URL === undefined) {
    throw new Error('URL Type Error: should be string');
}

// Type Check: CHAIN_ID should be valid Number
if (CHAIN_ID === NaN) {
    throw new Error('Invalid Numneric Error: should be a valid number');
}

// Connect to Inject Connector
export const injected = new InjectedConnector({
    supportedChainIds: [CHAIN_ID],
});

//@ts-ignore
injected.handleChainChanged = (newChainID: string | number) => {
    if (newChainID != CHAIN_ID) {
        console.log('error');

        localStorage.removeItem('Wallet');

        //@ts-ignore
        injected.emitDeactivate();

        return;
    }

    //@ts-ignore
    injected.emitUpdate({ chainId: newChainID, provider: window.BinanceChain });

    window.location.reload();
};

// getLibrary function for Web3Provider
export const getLibrary = (provider: any): ethers.providers.Web3Provider => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
};

export const signMessage = async (provider: any, account: string, message: string): Promise<string> => {
    return provider.getSigner(account).signMessage(message);
};
