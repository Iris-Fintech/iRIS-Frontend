import React, { ReactNode } from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { Provider } from 'react-redux';

import { getLibrary } from './utils/connectors';
import reduxStore from './redux/store';

const Web3Provider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Provider store={reduxStore}>
                <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
            </Provider>
        </>
    );
};

export default Web3Provider;
