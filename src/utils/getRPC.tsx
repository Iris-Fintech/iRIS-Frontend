import sample from 'lodash/sample';

// Error check ".env" file for BSC_RPC_URL
if (
    !process.env.REACT_APP_BSC_RPC_URL_1 ||
    !process.env.REACT_APP_BSC_RPC_URL_2 ||
    !process.env.REACT_APP_BSC_RPC_URL_3
) {
    throw Error('BSC_RPC_URLs is undefined');
}

// Array of available nodes to connect to Binance Smart Chain
export const RPC_NODES = [
    process.env.REACT_APP_BSC_RPC_URL_1,
    process.env.REACT_APP_BSC_RPC_URL_2,
    process.env.REACT_APP_BSC_RPC_URL_3,
];

const getRPCNodeUrl = (): string | undefined => {
    // get URL
    const url = sample(RPC_NODES);

    // return undefined if failed to extract valid URL
    if (url == undefined) {
        return undefined;
    }

    // return valid string URL
    return url;
};

// Error check ".env" file for BSC_CHAIN_ID
if (process.env.REACT_APP_BSC_CHAIN_ID == undefined) {
    throw new Error('BSC_CHAIN_ID is undefined');
}

const chainID = process.env.REACT_APP_BSC_CHAIN_ID;

const getChainID = () => {
    return parseInt(chainID, 10);
};

export { getRPCNodeUrl, getChainID };
