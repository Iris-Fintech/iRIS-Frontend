import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Amount } from './Amount';
import Balance from './Balance';
import './index.css';

const PublicMint = () => {
    return (
        <>
            <Container className="public-mint-con pt-3 px-4" fluid>
                <Row lg={8}>
                    <Col xl={8}>
                        <Amount />
                    </Col>
                    <Col xl={4}>
                        <Balance />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PublicMint;
