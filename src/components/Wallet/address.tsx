import { useWeb3React } from '@web3-react/core';

const WalletAddressAbbrev = () => {
    const { account } = useWeb3React();

    return account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : '';
};

const WalletAddress = () => {
    const { account } = useWeb3React();

    return account;
};

export { WalletAddress, WalletAddressAbbrev };
