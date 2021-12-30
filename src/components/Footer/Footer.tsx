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
    }, [account, library]);
    console.log(ethbalance);
    return (
        <>
            <p id="title">ETH: {ethbalance === null ? 'Error' : ethbalance ? `${ethbalance}` : ''}</p>
        </>
    );
};

// const BTCBalance = () => {
//     const { account, library, chainId } = useWeb3React();
//     const [btcbalance, setBtcbalance] = React.useState<number>();
//     const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

//     const Address = '0x5aF03DbdD8273A81B9e713AF821D25e819d31894';
//     const BitcoinABI = JSON.parse(JSON.stringify(require('./BitcoinABI.json')));
//     const BTCcontract = new web3.eth.Contract(BitcoinABI, Address);
//     React.useEffect((): any => {
//         if (!!account && !!library) {
//             let stale = false;

//             BTCcontract.methods
//                 .balanceOf(account)
//                 .call()
//                 .then((balance: any) => {
//                     if (!stale) {
//                         setBtcbalance(balance);
//                     }
//                 })
//                 .catch(() => {
//                     if (!stale) {
//                         setBtcbalance(NaN);
//                     }
//                 });

//             return () => {
//                 setBtcbalance(undefined);
//             };
//         }
//     }, [account, library, chainId, BTCcontract.methods]);
//     // console.log(btcbalance);
//     return (
//         <>
//             <p id="title">BTC: {btcbalance === null ? 'Error' : btcbalance ? `${btcbalance}` : ''}</p>
//         </>
//     );
// };

const Footer = () => {
    const { account, library } = useWeb3React();
    if (!account || !library) {
        return (
            <>
                <div id="footer">
                    <div className="row">
                        <div className="col-3">
                            <p id="title">Welcome to Iris Fintech</p>
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
