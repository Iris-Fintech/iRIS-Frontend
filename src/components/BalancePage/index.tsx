import React from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import './index.css';

let address = '';

const EthBalance = () => {
    const { library } = useWeb3React();
    const [sethbalance, setSethbalance] = React.useState<string>();
    const web3 = new Web3(Web3.givenProvider);
    React.useEffect((): any => {
        if (!!address && !!library) {
            let stale = false;

            web3.eth
                .getBalance(address)
                .then((wei: any) => {
                    var balance = web3.utils.fromWei(wei, 'ether');
                    console.log('wowo', balance);
                    if (!stale) {
                        setSethbalance(balance);
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setSethbalance('NaN');
                    }
                });

            return () => {
                setSethbalance(undefined);
            };
        }
    }, [address, library]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className="label">ETH: {sethbalance === null ? 'Error' : sethbalance ? `${sethbalance}` : ''}</div>
        </>
    );
};

const BTCBalance = () => {
    const { library, chainId } = useWeb3React();
    const [btcbalance, setBtcbalance] = React.useState<number>();
    const web3 = new Web3(Web3.givenProvider);

    const Address = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599';
    const BitcoinABI = JSON.parse(JSON.stringify(require('./BitcoinABI.json')));
    const BTCcontract = new web3.eth.Contract(BitcoinABI, Address);
    React.useEffect((): any => {
        if (!!address && !!library) {
            let stale = false;

            BTCcontract.methods
                .balanceOf(address)
                .call()
                .then((balance: any) => {
                    if (!stale) {
                        setBtcbalance(balance);
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setBtcbalance(NaN);
                    }
                });

            return () => {
                setBtcbalance(undefined);
            };
        }
    }, [address, library, chainId]);
    return (
        <>
            <div className="label">
                BTC: {btcbalance === null ? 'Error' : btcbalance ? `${btcbalance / 1000000000000000000}` : ''}
            </div>
        </>
    );
};

const USTBalance = () => {
    const { library, chainId } = useWeb3React();
    const [ustbalance, setUstbalance] = React.useState<number>();
    const web3 = new Web3(Web3.givenProvider);

    const Address = '0xa47c8bf37f92aBed4A126BDA807A7b7498661acD';
    const UstcoinABI = JSON.parse(JSON.stringify(require('./UstcoinABI.json')));
    const USTcontract = new web3.eth.Contract(UstcoinABI, Address);
    React.useEffect((): any => {
        if (!!address && !!library) {
            let stale = false;

            USTcontract.methods
                .balanceOf(address)
                .call()
                .then((balance: any) => {
                    if (!stale) {
                        setUstbalance(balance);
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setUstbalance(NaN);
                    }
                });

            return () => {
                setUstbalance(undefined);
            };
        }
    }, [address, library, chainId]);
    return (
        <>
            <div className="label">
                UST: {ustbalance === null ? 'Error' : ustbalance ? `${ustbalance / 1000000000000000000}` : ''}
            </div>
        </>
    );
};

const BNBBalance = () => {
    const { library, chainId } = useWeb3React();
    const [bnbbalance, setBnbbalance] = React.useState<number>();
    const web3 = new Web3(Web3.givenProvider);

    const Address = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52';
    const BnbcoinABI = JSON.parse(JSON.stringify(require('./BnbcoinABI.json')));
    const BNBcontract = new web3.eth.Contract(BnbcoinABI, Address);
    React.useEffect((): any => {
        if (!!address && !!library) {
            let stale = false;

            BNBcontract.methods
                .balanceOf(address)
                .call()
                .then((balance: any) => {
                    if (!stale) {
                        setBnbbalance(balance);
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setBnbbalance(NaN);
                    }
                });

            return () => {
                setBnbbalance(undefined);
            };
        }
    }, [address, library, chainId]);
    return (
        <>
            <div className="label">
                BNB: {bnbbalance === null ? 'Error' : bnbbalance ? `${bnbbalance / 1000000000000000000}` : ''}
            </div>
        </>
    );
};

const USDTBalance = () => {
    const { library, chainId } = useWeb3React();
    const [usdtbalance, setUsdtbalance] = React.useState<number>();
    const web3 = new Web3(Web3.givenProvider);

    const Address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
    const UsdtcoinABI = JSON.parse(JSON.stringify(require('./UsdtcoinABI.json')));
    const USDTcontract = new web3.eth.Contract(UsdtcoinABI, Address);
    React.useEffect((): any => {
        if (!!address && !!library) {
            let stale = false;

            USDTcontract.methods
                .balanceOf(address)
                .call()
                .then((balance: any) => {
                    if (!stale) {
                        setUsdtbalance(balance);
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setUsdtbalance(NaN);
                    }
                });

            return () => {
                setUsdtbalance(undefined);
            };
        }
    }, [address, library, chainId]);
    return (
        <>
            <div className="label">
                USDT: {usdtbalance === null ? 'Error' : usdtbalance ? `${usdtbalance / 1000000000000000000}` : ''}
            </div>
        </>
    );
};

const LUNABalance = () => {
    const { library, chainId } = useWeb3React();
    const [lunabalance, setLunabalance] = React.useState<number>();
    const web3 = new Web3(Web3.givenProvider);

    const Address = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
    const LunacoinABI = JSON.parse(JSON.stringify(require('./LunacoinABI.json')));
    const LUNAcontract = new web3.eth.Contract(LunacoinABI, Address);
    React.useEffect((): any => {
        if (!!address && !!library) {
            let stale = false;

            LUNAcontract.methods
                .balanceOf(address)
                .call()
                .then((balance: any) => {
                    if (!stale) {
                        setLunabalance(balance);
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setLunabalance(NaN);
                    }
                });

            return () => {
                setLunabalance(undefined);
            };
        }
    }, [address, library, chainId]);
    return (
        <>
            <div className="label">
                LUNA: {lunabalance === null ? 'Error' : lunabalance ? `${lunabalance / 1000000000000000000}` : ''}
            </div>
        </>
    );
};

const AllBalance = () => {
    return (
        <>
            <Row className="py-2">
                <Col>
                    <EthBalance />
                </Col>
                <Col>
                    <USTBalance />
                </Col>
            </Row>
            <Row className="py-2">
                <Col>
                    <BTCBalance />
                </Col>
                <Col>
                    <USDTBalance />
                </Col>
            </Row>
            <Row className="py-2">
                <Col>
                    <BNBBalance />
                </Col>
                <Col>
                    <LUNABalance />
                </Col>
            </Row>
        </>
    );
};

const BalancePage = () => {
    const [checkaddress, setCheckaddress] = React.useState<string>('');

    function handlesubmit(e: any) {
        e.preventDefault();
        address = checkaddress;
        setCheckaddress(address);
    }

    return (
        <>
            <div className="pt-3">
                <h3 className="px-5 pb-3 story-title"> Please Enter the address you want to check balance </h3>
                <Container fluid>
                    <Form>
                        <div className="row px-5 pt-2">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <Form.Group className="mb-3" controlId="FirstName">
                                    <Form.Label className="label">Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={checkaddress}
                                        onChange={(e) => setCheckaddress(e.target.value)}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                        <div className="row px-5 pt-2 pb-5">
                            <div className="col-sm-10"></div>
                            <div className="col-sm-1 px-1">
                                <Button
                                    className="label"
                                    variant="outline-light"
                                    type="submit"
                                    onClick={(e) => handlesubmit(e)}
                                >
                                    Submit
                                </Button>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Form>
                </Container>
                <Container className="px-5 pb-3" fluid>
                    <AllBalance />
                </Container>
            </div>
        </>
    );
};

export default BalancePage;
