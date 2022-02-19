// require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
    if (!process.env.REACT_APP_ETH_MAINNET_RPC_URL_1 || !process.env.REACT_APP_ETH_MAINNET_RPC_URL_2) {
        console.error('Missing RPC url!!');
        process.exit(1);
    }
    if (!process.env.REACT_APP_BACKEND_URL) {
        console.error('Missing backend url!!');
        process.exit(1);
    }
}

const config = {
    chainId: process.env.REACT_APP_ETH_MAINNET_CHAIN_ID || '1',
    rpc_url1: process.env.REACT_APP_ETH_MAINNET_RPC_URL_1 || '',
    rpc_url2: process.env.REACT_APP_ETH_MAINNET_RPC_URL_2 || '',

    backend_url: process.env.REACT_APP_BACKEND_URL || '',
};

export default config;
