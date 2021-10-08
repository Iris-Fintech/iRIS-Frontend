import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import { ConnectorNames } from '../../utils/connectorNames';
import { connectorsByName } from '../../utils/connectors';
import { getErrorMessage } from '../../utils/getEthErrorMessage';
import { connectorLocalStorageKey } from '../WalletModal/metaInfo';

const Account = () => {
    const context = useWeb3React<Web3Provider>();
    const { connector, library, account, deactivate, active, error } = context;
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {(active || error) && (
                    <button
                        style={{
                            height: '3rem',
                            marginTop: '2rem',
                            borderRadius: '1rem',
                            borderColor: 'red',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            deactivate();
                            window.localStorage.removeItem(connectorLocalStorageKey);
                        }}
                    >
                        Deactivate
                    </button>
                )}

                {!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>{getErrorMessage(error)}</h4>}
            </div>

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
                            library
                                .getSigner(account)
                                .signMessage('👋')
                                .then((signature: any) => {
                                    window.alert(`Success!\n\n${signature}`);
                                })
                                .catch((error: any) => {
                                    window.alert(`Failure!${error && error.message ? `\n\n${error.message}` : ''}`);
                                });
                        }}
                    >
                        Sign Message
                    </button>
                )}
                {connector === connectorsByName[ConnectorNames.WalletConnect] && (
                    <button
                        type="button"
                        style={{
                            height: '3rem',
                            borderRadius: '1rem',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            (connector as any).close();
                        }}
                    >
                        Kill WalletConnect Session
                    </button>
                )}
                {connector === connectorsByName[ConnectorNames.WalletLink] && (
                    <button
                        type="button"
                        style={{
                            height: '3rem',
                            borderRadius: '1rem',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            (connector as any).close();
                        }}
                    >
                        Kill WalletLink Session
                    </button>
                )}
            </div>
        </>
    );
};

export default Account;
