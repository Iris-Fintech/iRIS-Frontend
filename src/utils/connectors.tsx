// Library Import
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import Web3 from 'web3';

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
        localStorage.removeItem('_iris_fintech_');

        //@ts-ignore
        injected.emitDeactivate();

        return;
    }

    //@ts-ignore
    injected.emitUpdate({ chainId: newChainID, provider: window.BinanceChain });

    window.location.reload();
};

// Connect to Walletconnect Connector
const POLLING_INTERVAL = 12000;

export const walletconnect = new WalletConnectConnector({
    rpc: { 1: RPC_URL },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
});

// getLibrary function for Web3Provider
export const getLibrary = (provider: any): Web3 => {
    const library = new Web3(provider);
    return library;
};
