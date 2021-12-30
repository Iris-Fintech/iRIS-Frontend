import { getChainID, getRPCNodeUrl } from '../utils/getRPC';
import { ConnectorNames } from '../utils/connectorNames';

export const setupNetwork = async () => {
    const provider = window.ethereum;
    const connectedWallet = localStorage.getItem('Wallet');

    if (provider && connectedWallet === ConnectorNames.Injected) {
        const chainId = getChainID();
        try {
            await provider.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId: `0x${chainId.toString(16)}`,
                        chainName: 'Binance Smart Chain Mainnet',
                        nativeCurrency: {
                            name: 'BNB',
                            symbol: 'bnb',
                            decimals: 18,
                        },
                        rpcUrls: [getRPCNodeUrl()],
                        blockExplorerUrls: ['https://bscscan.com/'],
                    },
                ],
            });
            return true;
        } catch (error) {
            console.error('setup', error);
            return false;
        }
    } else {
        console.error("Can't setup the BSC network on metamask because window.ethereum is undefined");
        return false;
    }
};

export const registerToken = async (
    tokenAddress: string,
    tokenSymbol: string,
    tokenDecimals: number,
    tokenImage: string,
) => {
    const provider = window.ethereum;

    const tokenAdded = await (provider as any).request({
        method: 'wallet_watchAsset',
        params: {
            type: 'ERC20',
            options: {
                address: tokenAddress,
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image: tokenImage,
            },
        },
    });

    return tokenAdded;
};
