import Icon from './icon';
import Metamask from '../../assets/connectors/metamask-icon.svg';
import WalletConnect from '../../assets/connectors/walletconnect-icon.svg';

export interface Config {
    title: string;
    icon: React.ReactNode;
    connectorId: string;
}

const config: Config[] = [
    {
        title: 'Metamask',
        icon: Icon(Metamask),
        connectorId: 'Injected',
    },
    {
        title: 'WalletConnect',
        icon: Icon(WalletConnect),
        connectorId: 'WalletConnect',
    },
];

export default config;
