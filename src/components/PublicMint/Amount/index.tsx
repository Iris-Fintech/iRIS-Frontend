import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Container, Card, Form, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import './index.css';
import outline from '../../../assets/profile/outline.svg';
import { MainContractABI } from '../../../config';

const GetMintedNumber = async (nowSupply: any, setNowSupply: any) => {
    const { account, library } = useWeb3React();
    const web3 = new Web3(Web3.givenProvider);
    // const [mainContract, setMainContract] = React.useState({});

    React.useEffect((): any => {
        if (!account || !library) {
            return -1;
        }

        var myContract = new web3.eth.Contract(
            MainContractABI as AbiItem[],
            '0x29A9621c1F5942b9C712ECDca90735FA7aCb4e3B',
            {
                from: account, // default from address
            },
        );
        myContract.defaultAccount = account;

        myContract.methods
            .totalSupply()
            .call()
            .then((result: any) => {
                setNowSupply(result);
            });
        console.log(nowSupply);
    }, [account, library, nowSupply, setNowSupply, web3.eth.Contract]);
};

export default function Amount() {
    const [amount, setAmount] = useState(1);
    const [nowSupply, setNowSupply] = React.useState(0);

    GetMintedNumber(nowSupply, setNowSupply);

    return (
        <Container className="px-0 h-100">
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
                            <h5 className="card-content">HugiRIS Minted: {nowSupply}/10000</h5>
                            <p className="card-heade">Your Remaining Mint Quota: 3</p>
                            <ProgressBar variant={'bar'} now={nowSupply} striped min={0} max={10000} />
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
                                                onChange={() => setAmount(amount + 1)}
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
    );
}
