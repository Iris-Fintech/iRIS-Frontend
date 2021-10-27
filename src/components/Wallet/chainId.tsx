import { useWeb3React } from '@web3-react/core';

const ConnectChainId = () => {
    const { chainId } = useWeb3React();

    return chainId ?? '';
};

export default ConnectChainId;
