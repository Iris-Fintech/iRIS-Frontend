import React from 'react';
import { Container, Card, Form, Row, Col, ProgressBar, Button } from 'react-bootstrap';
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
        const { amount } = this.state;
        const NowSaled = 2000;

        return (
            <>
                <Container className="px-0" fluid>
                    <h3 className="card-title">Public Mint</h3>
                    <Card className="mt-3 public-card px-0">
                        <h3 className="card-dis mb-0">🌋 MINT a HugiRIS</h3>
                        <hr className="card-hr" />
                        <Card.Body className="mx-3">
                            <Row>
                                <Col lg={6}>
                                    <img className="rounded mx-auto d-block public-mint-img" src={outline} />
                                </Col>
                                <Col className="mx-0 midcol">
                                    <h5 className="card-content">HugiRIS Minted: {NowSaled}/10000</h5>
                                    <p className="card-heade">Your Remaining Mint Quota: 3</p>
                                    <ProgressBar variant={'bar'} now={NowSaled} striped min={0} max={10000} />
                                    <Row className="pt-3">
                                        <Col>
                                            <Button className="mint-button">Mint</Button>
                                        </Col>
                                        <Col>
                                            <Form>
                                                <Form.Group>
                                                    <Form.Control
                                                        className="form-control"
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
