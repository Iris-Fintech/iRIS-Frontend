import React from 'react';
import { Container, Card, Form, Row, Col } from 'react-bootstrap';
import './index.css';
import outline from '../../../assets/profile/outline.svg';

interface AmountState {
    amount: number;
    address: string | undefined;
}

export default class Amount extends React.Component<{}, AmountState> {
    constructor(props: any) {
        super(props);
        this.state = {
            amount: 1,
            address: undefined,
        };
        this.onChangeAmount = this.onChangeAmount.bind(this);
    }

    onChangeAmount(event: any) {
        this.setState({ amount: event.target.value });
    }

    render() {
        const { amount, address } = this.state;

        return (
            <>
                <Container className="px-0" fluid>
                    <h3 className="card-title">Public Mint</h3>
                    <Card className="mt-3 public-card">
                        <Card.Title>MINT a HugIRIS {address}</Card.Title>
                        <Card.Body>
                            <Row>
                                <Col lg={6}>
                                    <img className="rounded mx-auto d-block public-mint-img" src={outline} />
                                </Col>
                                <Col>
                                    <h4 className="card-content">Total HugiRIS Minted</h4>
                                    <Row>
                                        <Col></Col>
                                        <Col>
                                            <Form>
                                                <Form.Group>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        maxLength={10}
                                                        value={amount}
                                                        onChange={(e) => this.onChangeAmount(e)}
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </>
        );
    }
}
