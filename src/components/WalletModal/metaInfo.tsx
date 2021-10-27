import Icon from './icon';
import Metamask from '../../assets/connectors/metamask-icon.svg';
import TrustWallet from '../../assets/connectors/trustwallet-icon.svg';
import MathWallet from '../../assets/connectors/mathwallet-icon.svg';
import TokenPocket from '../../assets/connectors/tokenpocket-icon.svg';
import WalletConnect from '../../assets/connectors/walletconnect-icon.svg';
import BinanceWallet from '../../assets/connectors/binancewallet-icon.svg';
import MoreIcon from '../../assets/utils/more-icon.svg';

import { ConnectorNames } from '../../utils/connectorNames';

export interface Config {
    title: string;
    icon: React.ReactNode;
    connectorId: ConnectorNames;
}

const config: Config[] = [
    {
        title: 'Metamask',
        icon: Icon(Metamask),
        connectorId: ConnectorNames.Injected,
    },
    {
        title: 'TrustWallet',
        icon: Icon(TrustWallet),
        connectorId: ConnectorNames.Injected,
    },
    {
        title: 'MathWallet',
        icon: Icon(MathWallet),
        connectorId: ConnectorNames.Injected,
    },
    {
        title: 'TokenPocket',
        icon: Icon(TokenPocket),
        connectorId: ConnectorNames.Injected,
    },
    {
        title: 'WalletConnect',
        icon: Icon(WalletConnect),
        connectorId: ConnectorNames.WalletConnect,
    },
    {
        title: 'Binance-Chain',
        icon: Icon(BinanceWallet),
        connectorId: ConnectorNames.BSC,
    },
];

export const moreIcon = {
    title: 'More Icon',
    icon: Icon(MoreIcon),
};

export default config;
