import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { changeState } from '../../redux/modalShowSlice';
import { setExpand } from '../../redux/modalExpand';

import { connectorsByName } from '../../utils/connectors';
import WalletCard from './WalletCard';
import metaInfo, { Config, moreIcon } from './metaInfo';

const WalletModal = () => {
    const { connector, activate, error } = useWeb3React();

    const show = useAppSelector((state) => state.modalShow.show);
    const triedEager = useAppSelector((state) => state.triedEager.tried);
    const expand = useAppSelector((state) => state.modalExpand.expand);
    const dispatch = useAppDispatch();

    const currentConnector = metaInfo.map((entry: Config) => connectorsByName[entry.connectorId]);

    return (
        <>
            <Modal
                show={show}
                onHide={() => dispatch(changeState())}
                onExited={() => dispatch(setExpand(false))}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Wallet Connection</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container className="justify-content-md-center">
                        <Row>
                            <Col>
                                <div key={metaInfo[0].title} onClick={() => dispatch(changeState())}>
                                    <WalletCard
                                        walletMetaInfo={metaInfo[0]}
                                        activate={activate}
                                        currentConnector={currentConnector[0]}
                                        disabled={triedEager || error || currentConnector[0] === connector}
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div key={metaInfo[1].title} onClick={() => dispatch(changeState())}>
                                    <WalletCard
                                        walletMetaInfo={metaInfo[1]}
                                        activate={activate}
                                        currentConnector={currentConnector[1]}
                                        disabled={triedEager || error || currentConnector[1] === connector}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col>
                                <div key={metaInfo[2].title} onClick={() => dispatch(changeState())}>
                                    <WalletCard
                                        walletMetaInfo={metaInfo[2]}
                                        activate={activate}
                                        currentConnector={currentConnector[2]}
                                        disabled={triedEager || error || currentConnector[2] === connector}
                                    />
                                </div>
                            </Col>
                            <Col>
                                {expand && (
                                    <div
                                        key={metaInfo[3].title}
                                        onClick={() => dispatch(changeState())}
                                        // style={{ display: expand ? 'block' : 'none' }}
                                    >
                                        <WalletCard
                                            walletMetaInfo={metaInfo[3]}
                                            activate={activate}
                                            currentConnector={currentConnector[3]}
                                            disabled={triedEager || error || currentConnector[3] === connector}
                                        />
                                    </div>
                                )}
                                {!expand && (
                                    <div
                                        className="row mt-2 justify-content-center"
                                        onClick={() => dispatch(setExpand(true))}
                                        // style={{ display: !expand ? 'block' : 'none' }}
                                    >
                                        <div className="d-grid gap-2">
                                            <Button variant="outline-light" style={{ color: 'black' }}>
                                                <Row className="justify-content-center">{moreIcon.icon}</Row>
                                                <Row className="justify-content-center">{moreIcon.title}</Row>
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </Col>
                        </Row>
                        {expand && (
                            <Row className="justify-content-md-center">
                                <Col>
                                    <div key={metaInfo[4].title} onClick={() => dispatch(changeState())}>
                                        <WalletCard
                                            walletMetaInfo={metaInfo[4]}
                                            activate={activate}
                                            currentConnector={currentConnector[4]}
                                            disabled={triedEager || error || currentConnector[4] === connector}
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div key={metaInfo[5].title} onClick={() => dispatch(changeState())}>
                                        <WalletCard
                                            walletMetaInfo={metaInfo[5]}
                                            activate={activate}
                                            currentConnector={currentConnector[5]}
                                            disabled={triedEager || error || currentConnector[5] === connector}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        )}
                    </Container>
                </Modal.Body>
                <Modal.Footer className="justify-content-md-center">
                    <Button>How to connect?</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default WalletModal;
