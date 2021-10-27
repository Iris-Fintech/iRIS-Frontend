// Library Import
import { InjectedConnector } from '@web3-react/injected-connector';
import { BscConnector } from '@binance-chain/bsc-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

import { ethers } from 'ethers';

// Import TSX File
import { getRPCNodeUrl, getChainID } from './getRPC';
import { ConnectorNames } from './connectorNames';

// Define Constants
const POLLING_INTERVAL: number = 12000;
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

export const bscConnector = new BscConnector({ supportedChainIds: [CHAIN_ID] });

//@ts-ignore
bscConnector.handleChainChanged = (newChainID: string | number) => {
    if (newChainID != CHAIN_ID) {
        console.log('error');

        localStorage.removeItem('Wallet');

        //@ts-ignore
        bscConnector.emitDeactivate();
        return;
    }

    //@ts-ignore
    bscConnector.emitUpdate({ chainId: newChainID, provider: window.BinanceChain });

    window.location.reload();
};

export const walletconnect = new WalletConnectConnector({
    rpc: { [CHAIN_ID]: RPC_URL },
    chainId: CHAIN_ID,
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
});

//@ts-ignore
walletconnect.handleChainChanged = (newChainID: string | number) => {
    if (newChainID != CHAIN_ID) {
        console.log('error');

        localStorage.removeItem('Wallet');

        //@ts-ignore
        walletconnect.emitDeactivate();
        return;
    }

    //@ts-ignore
    walletconnect.emitUpdate({ chainId: newChainID, provider: window.BinanceChain });

    window.location.reload();
};

// Connectors dictionary for fast lookup
export const connectorsByName: { [connectorName: string]: any } = {
    [ConnectorNames.Injected]: injected,
    [ConnectorNames.WalletConnect]: walletconnect,
    [ConnectorNames.BSC]: bscConnector,
};

// getLibrary function for Web3Provider
export const getLibrary = (provider: any): ethers.providers.Web3Provider => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
};

export const signMessage = async (provider: any, account: string, message: string): Promise<string> => {
    const connecetedWallet = localStorage.getItem('Wallet');

    // https://docs.binance.org/smart-chain/wallet/wallet_api.html#binancechainbnbsignaddress-string-message-string-promisepublickey-string-signature-string
    if (connecetedWallet == ConnectorNames.BSC && window.BinanceChain) {
        const { signature } = await window.BinanceChain.bnbSign(account, message);
        return signature;
    }

    // https://github.com/WalletConnect/walletconnect-monorepo/issues/462
    if (connecetedWallet == ConnectorNames.WalletConnect && provider.provider?.wc) {
        const wcMessage = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message));
        const signature = await provider.provider?.wc.signPersonalMessage([wcMessage, account]);
        return signature;
    }

    return provider.getSigner(account).signMessage(message);
};
