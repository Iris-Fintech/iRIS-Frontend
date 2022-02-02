import React from 'react';
import { useWeb3React } from '@web3-react/core';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import { getErrorMessage } from '../../utils/getEthErrorMessage';
import useAuth from '../../hooks/useAuth';
import { WalletAddress, WalletAddressAbbrev } from '../Wallet/address';
import { changeState } from '../../redux/modalShowSlice';
import { useAppDispatch } from '../../redux/hook';
import './index.css';

const ConnectButton = () => {
    const { active, error } = useWeb3React();

    const { logout } = useAuth();
    const dispatch = useAppDispatch();

    const addressAbbrev = WalletAddressAbbrev();

    const address = WalletAddress();
    const etherscanURL = 'https://etherscan.io/address/' + address;
    const openseaURL = 'https://opensea.io/' + address;

    return (
        <>
            <div
                style={{
                    display: 'grid',
                    gridGap: '2vw',
                    gridTemplateColumns: 'fit-content',
                    maxWidth: '20vw',
                    margin: 'auto',
                }}
            >
                {active && (
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="flat" id="dropdown-basic">
                            {addressAbbrev}
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item href={etherscanURL} target="_blank">
                                Wallet
                            </Dropdown.Item>
                            <Dropdown.Item href={openseaURL} target="_blank">
                                Transactions
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={logout}>Disconnect</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )}
                {!active && !error && (
                    <Button
                        variant="flat"
                        onClick={() => {
                            dispatch(changeState());
                        }}
                    >
                        Connect Wallet
                    </Button>
                )}
            </div>

            {!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>{getErrorMessage(error)}</h4>}
        </>
    );
};

export default ConnectButton;
