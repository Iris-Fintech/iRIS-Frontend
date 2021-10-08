import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { useEagerConnect, useInactiveListener } from '../../hooks/connect-hook';
import { connectorsByName } from '../../utils/connectors';
import { ConnectorNames } from '../../utils/connectorNames';
import WalletCard from './WalletCard';
import metaInfo, { Config, connectorLocalStorageKey } from './metaInfo';
import { getErrorMessage } from '../../utils/getEthErrorMessage';

const WalletModal = () => {
    const context = useWeb3React<Web3Provider>();
    const { connector, activate, deactivate, active, error } = context;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const closeConnect = () => {
        if (
            connector === connectorsByName[ConnectorNames.WalletConnect] ||
            connector === connectorsByName[ConnectorNames.WalletLink]
        )
            (connector as any).close();
        deactivate();

        window.localStorage.removeItem(connectorLocalStorageKey);
    };

    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = useState<any>();
    useEffect(() => {
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
                    gridTemplateColumns: 'fit-content',
                    maxWidth: '20rem',
                    margin: 'auto',
                }}
            >
                {(active || error) && (
                    <Button variant="primary" onClick={closeConnect}>
                        Disconnect
                    </Button>
                )}
                {!active && (
                    <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                    </Button>
                )}
            </div>
            {!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>{getErrorMessage(error)}</h4>}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Wallet Connection</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {metaInfo.map((entry: Config) => {
                        const currentConnector = connectorsByName[entry.title];
                        const connected = currentConnector === connector;
                        const disabled = !triedEager || !!activatingConnector || connected || !!error;

                        return (
                            <div key={entry.title} onClick={handleClose}>
                                <WalletCard
                                    walletMetaInfo={entry}
                                    setActivatingConnector={setActivatingConnector}
                                    activate={activate}
                                    currentConnector={currentConnector}
                                    disabled={disabled}
                                />
                            </div>
                        );
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button>How to connect?</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default WalletModal;
