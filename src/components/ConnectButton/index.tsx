import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import { changeState } from '../../redux/modalShowSlice';
import { getErrorMessage } from '../../utils/getEthErrorMessage';
import { useAppDispatch } from '../../redux/hook';
import useAuth from '../../hooks/useAuth';

import WalletAddress from '../Wallet/address';

const ConnectButton = () => {
    const { active, error } = useWeb3React();

    const dispatch = useAppDispatch();

    const { logout } = useAuth();

    const address = WalletAddress();

    return (
        <>
            <div
                style={{
                    display: 'grid',
                    gridGap: '1rem',
                    gridTemplateColumns: 'fit-content',
                    maxWidth: '20rem',
                    margin: 'auto',
                }}
            >
                {active && (
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            {address}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Wallet</Dropdown.Item>
                            <Dropdown.Item>Transactions</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={logout}>Disconnect</Dropdown.Item>
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
