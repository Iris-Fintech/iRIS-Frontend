import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { changeState } from '../../redux/modalShowSlice';

import { connectorsByName } from '../../utils/connectors';
import WalletCard from './WalletCard';
import metaInfo, { Config } from './metaInfo';
const WalletModal = () => {
    const { connector, activate, error } = useWeb3React();

    const show = useAppSelector((state) => state.modalShow.show);
    const triedEager = useAppSelector((state) => state.triedEager.tried);
    const dispatch = useAppDispatch();

    return (
        <>
            <Modal show={show} onHide={() => dispatch(changeState())} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Wallet Connection</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {metaInfo.map((entry: Config) => {
                        const currentConnector = connectorsByName[entry.connectorId];
                        const connected = currentConnector === connector;

                        const disabled = triedEager || connected || error;

                        console.log(triedEager, connected, error);

                        return (
                            <div key={entry.title} onClick={() => dispatch(changeState())}>
                                <WalletCard
                                    walletMetaInfo={entry}
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
