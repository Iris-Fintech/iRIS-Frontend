import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import './index.css';

const ETHBalance = () => {
    const { account, library } = useWeb3React();
    const [ethbalance, setEthbalance] = React.useState<string>();
    const web3 = new Web3(Web3.givenProvider);

    React.useEffect((): any => {
        if (!!account && !!library) {
            let stale = false;

            web3.eth
                .getBalance(account)
                .then((wei: any) => {
                    var balance = web3.utils.fromWei(wei, 'ether');
                    if (!stale) {
                        setEthbalance(balance);
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setEthbalance('NaN');
                    }
                });

            return () => {
                setEthbalance(undefined);
            };
        }
    }, [account, library]); // eslint-disable-line react-hooks/exhaustive-deps

    if (!account || !ethbalance) {
        return <></>;
    } else {
        const Ethbalance = parseFloat(ethbalance).toPrecision(3);

        return (
            <>
                <p className="card-address">Account Address: {account}</p>
                <p className="card-account">ETH Balance: {`${Ethbalance}`}</p>
            </>
        );
    }
};

const Balance = () => {
    return (
        <>
            <Container className="px-0 h-100">
                <h3 className="card-title">Wallet</h3>
                <Card className="mt-3 public-card px-0">
                    <h3 className="card-dis mb-0">🔐 Account</h3>
                    <hr className="card-hr" />
                    <Card.Body className="mx-3">
                        <ETHBalance />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Balance;
