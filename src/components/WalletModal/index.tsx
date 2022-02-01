import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { changeState } from '../../redux/modalShowSlice';

import WalletCard from './walletCard';
import Config from './metaInfo';
import './index.css';

const WalletModal = () => {
    const show = useAppSelector((state) => state.modalShow.show);
    const dispatch = useAppDispatch();

    return (
        <>
            <Modal show={show} onHide={() => dispatch(changeState())} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Connect your wallet</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container className="justify-content-md-center">
                        <Row>
                            <Col>
                                <div key={Config[0].title} onClick={() => dispatch(changeState())}>
                                    <WalletCard walletMetaInfo={Config[0]} />
                                </div>
                            </Col>
                            <Col>
                                <div key={Config[1].title} onClick={() => dispatch(changeState())}>
                                    <WalletCard walletMetaInfo={Config[1]} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="justify-content-md-center"></Modal.Footer>
            </Modal>
        </>
    );
};

export default WalletModal;
