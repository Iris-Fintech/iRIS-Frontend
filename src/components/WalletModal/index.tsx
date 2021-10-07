import React from 'react';
import { useWeb3React } from '@web3-react/core';

import { Web3Provider } from '@ethersproject/providers';

import { useEagerConnect, useInactiveListener } from '../../hooks/connect-hook';
import { ConnectorNames } from '../../utils/connectorNames';
import { connectorsByName } from '../../utils/connectors';

import { getErrorMessage } from '../../utils/getEthErrorMessage';

const WalletModal = () => {
    const context = useWeb3React<Web3Provider>();
    const { connector, library, account, activate, deactivate, active, error } = context;

    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = React.useState<any>();
    React.useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useEagerConnect();

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector);

    return (
        <>
            <hr style={{ margin: '2rem' }} />
            <div
                style={{
                    display: 'grid',
                    gridGap: '1rem',
                    gridTemplateColumns: '1fr 1fr',
                    maxWidth: '20rem',
                    margin: 'auto',
                }}
            >
                {Object.keys(connectorsByName).map((name) => {
                    const currentConnector = connectorsByName[name];
                    const activating = currentConnector === activatingConnector;
                    const connected = currentConnector === connector;
                    const disabled = !triedEager || !!activatingConnector || connected || !!error;

                    return (
                        <button
                            style={{
                                height: '3rem',
                                borderRadius: '1rem',
                                borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
                                cursor: disabled ? 'unset' : 'pointer',
                                position: 'relative',
                            }}
                            // disabled={disabled}
                            key={name}
                            onClick={() => {
                                alert('click');
                                setActivatingConnector(currentConnector);
                                activate(connectorsByName[name]);
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'black',
                                    margin: '0 0 0 1rem',
                                }}
                            >
                                {activating && <div>connector</div>}
                                {connected && (
                                    <span role="img" aria-label="check">
                                        ✅
                                    </span>
                                )}
                            </div>
                            {name}
                        </button>
                    );
                })}
            </div>
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

export default WalletModal;
