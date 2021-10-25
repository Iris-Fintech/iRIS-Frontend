import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import { ConnectorNames } from '../../utils/connectorNames';
import { changeState } from '../../redux/modalShowSlice';
import { connectorsByName } from '../../utils/connectors';
import { getErrorMessage } from '../../utils/getEthErrorMessage';
import { useAppDispatch } from '../../redux/hook';

import WalletAddress from '../Wallet/address';

const ConnectButton = () => {
    const { connector, deactivate, active, error } = useWeb3React();

    const dispatch = useAppDispatch();

    const closeConnect = () => {
        if (connector === connectorsByName[ConnectorNames.WalletConnect]) (connector as any).close();

        deactivate();

        localStorage.removeItem('Wallet');
    };

    return (
        <>
            {/* <hr style={{ margin: '2rem' }} /> */}
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
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            {WalletAddress()}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Wallet</Dropdown.Item>
                            <Dropdown.Item>Transactions</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={closeConnect}>Disconnect</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )}
                {!active && !error && (
                    <Button variant="primary" onClick={() => dispatch(changeState())}>
                        Connect Wallet
                    </Button>
                )}
            </div>

            {!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>{getErrorMessage(error)}</h4>}
        </>
    );
};

export default ConnectButton;
