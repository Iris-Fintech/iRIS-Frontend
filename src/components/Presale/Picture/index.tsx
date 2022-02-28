import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './index.css';
import outline from '../../../assets/profile/outline.svg';

export default class Picture extends React.Component<{}, {}> {
    render() {
        return (
            <Container className="px-0 h-100">
                <h3 className="card-title">HugiRIS Demo</h3>
                <Card className="mt-3 public-card px-0">
                    <h3 className="card-dis mb-0">MINT a HugiRIS</h3>
                    <hr className="card-hr" />
                    <Card.Body className="mx-3">
                        <Row>
                            <Col>
                                <img className="rounded mx-auto d-block public-mint-img" src={outline} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}
