import { useWeb3React } from '@web3-react/core';

const WalletAddress = () => {
    const { account } = useWeb3React();

    return account ? account : '';
};

export default WalletAddress;
