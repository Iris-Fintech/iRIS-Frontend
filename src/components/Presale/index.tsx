import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { WhiteList } from './WhiteList';
import Picture from './Picture';
import Balance from './Balance';
import './index.css';

const Presale = () => {
    return (
        <>
            <Container className="public-mint-con pt-1 px-4" fluid>
                <Row className="flex" lg={8}>
                    <Col className="flex-cell" xl={4}>
                        <Picture />
                    </Col>
                    <Col className="flex-cell-2" xl={4}>
                        <WhiteList />
                    </Col>
                    <Col className="flex-cell" xl={4}>
                        <Balance />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Presale;
