import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Button from 'react-bootstrap/Button';

import { ConnectorNames } from '../../utils/connectorNames';
import { changeState } from '../../redux/modalShowSlice';
import { connectorsByName } from '../../utils/connectors';
import { getErrorMessage } from '../../utils/getEthErrorMessage';
import { useAppDispatch } from '../../redux/hook';

const ConnectButton = () => {
    const { connector, deactivate, active, error } = useWeb3React();

    const dispatch = useAppDispatch();

    const closeConnect = () => {
        if (connector === connectorsByName[ConnectorNames.WalletConnect]) (connector as any).close();

        deactivate();
    };

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
                {!active && !error && (
                    <Button variant="primary" onClick={() => dispatch(changeState())}>
                        Launch demo modal
                    </Button>
                )}
            </div>

            {!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>{getErrorMessage(error)}</h4>}
        </>
    );
};

export default ConnectButton;
