/// <reference types="react-scripts" />

interface Window {
    ethereum?: {
        isMetaMask?: true;
        request: (...args: any[]) => Promise<void>;
    };
}

type SerializedBigNumber = string;
