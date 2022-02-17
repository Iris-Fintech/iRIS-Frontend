import sample from 'lodash/sample';
import config from '../config';

// Error check ".env" file for BSC_RPC_URL
if (!config.rpc_url1 || !config.rpc_url2) {
    throw Error('ETH_RPC_URLs is undefined');
}

// Array of available nodes to connect to Binance Smart Chain
export const RPC_NODES = [config.rpc_url1, config.rpc_url2];

const getRPCNodeUrl = (): string | undefined => {
    // get URL
    const url = sample(RPC_NODES);

    // return undefined if failed to extract valid URL
    if (url === undefined) {
        return undefined;
    }

    // return valid string URL
    return url;
};

// Error check ".env" file for BSC_CHAIN_ID
if (config.chainId === undefined) {
    throw new Error('BSC_CHAIN_ID is undefined');
}

const chainID = config.chainId;

const getChainID = () => {
    return parseInt(chainID, 10);
};

export { getRPCNodeUrl, getChainID };
