import Metamask from './icons/Metamask';
import MathWallet from './icons/MathWallet';
import TokenPocket from './icons/TokenPocket';
import TrustWallet from './icons/TrustWallet';
import WalletConnect from './icons/WalletConnect';
import BinanceChain from './icons/BinanceChain';
// import SafePalWallet from './icons/SafePalWallet';
// import WalletLink from './icons/WalletLink';
import LedgerWallet from './icons/LedgerWallet';

import { ConnectorNames } from '../../utils/connectorNames';

export interface Config {
    title: string;
    icon: React.ReactNode;
    connectorId: ConnectorNames;
}

const config: Config[] = [
    {
        title: 'Metamask',
        icon: Metamask(),
        connectorId: ConnectorNames.Injected,
    },
    {
        title: 'TrustWallet',
        icon: TrustWallet(),
        connectorId: ConnectorNames.Injected,
    },
    {
        title: 'MathWallet',
        icon: MathWallet(),
        connectorId: ConnectorNames.Injected,
    },
    {
        title: 'TokenPocket',
        icon: TokenPocket(),
        connectorId: ConnectorNames.Injected,
    },
    {
        title: 'WalletConnect',
        icon: WalletConnect(),
        connectorId: ConnectorNames.WalletConnect,
    },
    {
        title: 'Binance Chain Wallet',
        icon: BinanceChain(),
        connectorId: ConnectorNames.BSC,
    },
    // {
    //     title: 'SafePal Wallet',
    //     icon: SafePalWallet(),
    //     connectorId: ConnectorNames.Injected,
    // },
    // {
    //     title: 'Wallet Link',
    //     icon: WalletLink(),
    //     connectorId: ConnectorNames.WalletLink,
    // },
    {
        title: 'Ledger Wallet',
        icon: LedgerWallet(),
        connectorId: ConnectorNames.Ledger,
    },
];

export default config;
export const connectorLocalStorageKey = 'connectorId';