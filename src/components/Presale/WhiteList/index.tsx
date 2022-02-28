import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';
import { Container, Card, Form, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import './index.css';
import { MainContractABI } from '../../../config';

interface AmountState {
    account: string | null | undefined;
    library: any;
    nowSupply: number;
    remainNumber: number;
    mainContract: Contract | null;
    WLAmount: number;
    FCAmount: number;
    error: undefined | string;
}

interface AmountProp {
    account: string | null | undefined;
    library: any;
}

class AmountClass extends React.Component<AmountProp, AmountState> {
    constructor(props: AmountProp) {
        super(props);
        this.state = {
            account: undefined,
            library: undefined,
            error: undefined,
            WLAmount: 1,
            FCAmount: 1,
            nowSupply: 0,
            remainNumber: 0,
            mainContract: null,
        };
    }

    componentDidMount = async () => {
        const { account, library } = this.props;
        await this.setState({ account: account, library: library });
        await this.SetMainContract();
        await this.GetMintedNumber();
        await this.GetRemainMintNumber();
    };

    componentDidUpdate = async (prevProps: AmountProp) => {
        if (this.props.account !== prevProps.account) {
            const { account, library } = this.props;
            await this.setState({ account: account, library: library });
            await this.SetMainContract();
            await this.GetMintedNumber();
            await this.GetRemainMintNumber();
        }
    };

    SetMainContract = async () => {
        const web3 = new Web3(Web3.givenProvider);
        const { account, library } = this.state;
        if (account === undefined || account === null || library === undefined) {
            this.setState({ error: 'No account' });
        } else {
            var myContract = await new web3.eth.Contract(
                MainContractABI as AbiItem[],
                '0x29A9621c1F5942b9C712ECDca90735FA7aCb4e3B',
                {
                    from: account, // default from address
                },
            );
            myContract.defaultAccount = account;
            this.setState({ mainContract: myContract, error: undefined });
        }
    };

    GetMintedNumber = async () => {
        const mainContract = this.state.mainContract;
        if (mainContract === null) {
            this.setState({ error: 'No contract!' });
        } else {
            await mainContract.methods
                .totalSupply()
                .call()
                .then((result: any) => {
                    this.setState({ nowSupply: result, error: undefined });
                });
        }
    };

    GetRemainMintNumber = async () => {
        const { mainContract, account } = this.state;
        if (mainContract === null) {
            this.setState({ error: 'No contract!' });
        } else {
            await mainContract.methods
                .balanceOf(account)
                .call()
                .then((result: any) => {
                    this.setState({ remainNumber: 10 - result, error: undefined });
                });
        }
    };

    render() {
        const { nowSupply, remainNumber, error, WLAmount, FCAmount } = this.state;
        if (error != undefined) {
            return (
                <Container className="px-0 h-100">
                    <h3 className="card-title">Mint</h3>
                    <Card className="mt-3 wl-card px-0">
                        <h3 className="card-dis mb-0">WL Mint</h3>
                        <hr className="card-hr" />
                    </Card>
                </Container>
            );
        } else {
            return (
                <Container className="px-0 h-100">
                    <h3 className="card-title">Mint</h3>
                    <Card className="mt-3 wl-card px-0">
                        <h5 className="card-dis mb-0">WL Mint</h5>
                        <hr className="card-hr" />
                        <Card.Body className="mx-1 py-0">
                            <Row>
                                <Col className="mx-0 midcol">
                                    <h5 className="card-content">HugiRIS Minted: {nowSupply}/10000</h5>
                                    <ProgressBar variant={'bar'} now={nowSupply} striped min={0} max={10000} />
                                    <p className="mb-0 mt-1 card-heade">Your Remaining Mint Quota: {remainNumber}</p>
                                    <p className="my-0 card-heade">
                                        Estimate price: {(WLAmount * 0.08).toPrecision(2)} ETH
                                    </p>
                                    <Row className="mt-2 pt-0">
                                        <Col>
                                            <Form>
                                                <Form.Group>
                                                    <Form.Control
                                                        className="form-control"
                                                        required
                                                        type="number"
                                                        max={remainNumber}
                                                        min={0}
                                                        value={WLAmount}
                                                        onChange={(e) =>
                                                            this.setState({ WLAmount: parseInt(e.target.value) })
                                                        }
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col>
                                            <Button className="mint-button">Mint</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3 fc-card px-0">
                        <h5 className="card-dis mb-0">Free Claim Mint</h5>
                        <hr className="card-hr" />
                        <Card.Body className="mx-1 py-0">
                            <Row>
                                <Col className="mx-0 midcol">
                                    <p className="mb-1 mt-0 card-heade">Your Remaining Mint Quota: {remainNumber}</p>
                                    <Row className="mt-2">
                                        <Col>
                                            <Form>
                                                <Form.Group>
                                                    <Form.Control
                                                        className="form-control"
                                                        required
                                                        type="number"
                                                        max={remainNumber}
                                                        min={0}
                                                        value={FCAmount}
                                                        onChange={(e) =>
                                                            this.setState({ FCAmount: parseInt(e.target.value) })
                                                        }
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col>
                                            <Button className="mint-button">Mint</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            );
        }
    }
}

export const WhiteList = () => {
    const { account, library } = useWeb3React();
    const [newAccount, setNewAccount] = React.useState<string | null | undefined>(null);
    const [newLibrary, setNewLibrary] = React.useState<any>();

    React.useEffect((): any => {
        if (account && library) {
            setNewAccount(account);
            setNewLibrary(library);
        }
    }, [account, library]);
    return <AmountClass account={newAccount} library={newLibrary} />;
};
