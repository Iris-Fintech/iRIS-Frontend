import { getChainID, getRPCNodeUrl } from '../utils/getRPC';

export const setupNetwork = async () => {
    const provider = window.ethereum;

    if (provider) {
        const chainId = getChainID();
        try {
            try {
                console.log(`0x${chainId.toString(16)}`);
                await provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: `0x${chainId.toString(16)}` }],
                });
                return true;
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if ((switchError as any).code === 4902) {
                    try {
                        await provider.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: `0x${chainId.toString(16)}`,
                                    chainName: 'Ethereum Mainnet',
                                    nativeCurrency: {
                                        name: 'ETH',
                                        symbol: 'eth',
                                        decimals: 18,
                                    },
                                    rpcUrls: [getRPCNodeUrl()],
                                    blockExplorerUrls: ['https://etherscan.io'],
                                },
                            ],
                        });
                        return true;
                    } catch (addError) {
                        // handle "add" error
                        console.error('add', addError);
                        return false;
                    }
                } else {
                    return false;
                }
            }
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
