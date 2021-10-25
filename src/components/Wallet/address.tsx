import { useWeb3React } from '@web3-react/core';

const WalletAddress = () => {
    const { account } = useWeb3React();

    return account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : '';
};

export default WalletAddress;
