import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
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

    return (
        <>
            <p id="title">ETH: {ethbalance === null ? 'Error' : ethbalance ? `${ethbalance}` : ''}</p>
        </>
    );
};

const Footer = () => {
    const { account, library } = useWeb3React();
    if (!account || !library) {
        return (
            <>
                <div id="footer">
                    <div className="row">
                        <div className="ml-5 col-3">
                            <p id="title">Welcome to HugiRIS</p>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div id="footer">
                    <div className="row">
                        <div className="col-3">
                            <p id="title">Wallet Connected</p>
                        </div>
                        {/* <div className="col-3">
                            <BTCBalance />
                        </div> */}
                        <div className="col-3">
                            <ETHBalance />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Footer;
