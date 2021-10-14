import React from 'react';
import { useWeb3React } from '@web3-react/core';

import { signMessage } from '../../utils/connectors';

const Account = () => {
    const { library, account } = useWeb3React();

    return (
        <>
            <hr style={{ margin: '2rem' }} />

            <div
                style={{
                    display: 'grid',
                    gridGap: '1rem',
                    gridTemplateColumns: 'fit-content',
                    maxWidth: '20rem',
                    margin: 'auto',
                }}
            >
                {!!(library && account) && (
                    <button
                        style={{
                            height: '3rem',
                            borderRadius: '1rem',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            signMessage(library, account, 'Test');
                        }}
                    >
                        Sign Message
                    </button>
                )}
            </div>
        </>
    );
};

export default Account;
