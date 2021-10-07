import React, { ReactNode } from 'react';
import { Web3ReactProvider } from '@web3-react/core';

import { getLibrary } from './utils/connectors';

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
        </>
    );
};

export default Provider;
