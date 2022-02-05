import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);

export const signMessage = async (
    library: any,
    recipient: string,
    amount: number[],
    nonce: string,
    contractAddress: string,
) => {
    // Hash message
    var msgHash =
        library.utils.soliditySha3(
            { t: 'address', v: recipient },
            { t: 'uint256', v: amount },
            { t: 'string', v: nonce },
            { t: 'address', v: contractAddress },
        ) || '';

    console.log(msgHash, recipient, amount, contractAddress, nonce);

    library.eth.personal
        .sign(msgHash, recipient)
        .then((response: any) => {
            console.log(response);

            web3.eth.personal
                .ecRecover(msgHash, response)
                .then((res: any) => {
                    console.log(res);
                })
                .catch((err: any) => {
                    console.log(err);
                });
        })
        .catch((error: any) => {
            console.log(error);
        });

    // return provider.eth.sign(provider.utils.utf8ToHex(message), account);
    // const prefix = '\x19Ethereum Signed Message:\n' + msg.length;
    // const msgHash = Web3.utils.keccak256(prefix + msg);

    // await provider
    //     .request({
    //         method: 'personal_sign',
    //         params: [account, msgHash],
    //     })
    //     .then((response: any) => {
    //         console.log(response);

    //         web3.eth.personal
    //             .ecRecover(msgHash, response)
    //             .then((res: any) => {
    //                 console.log(res);
    //             })
    //             .catch((err: any) => {
    //                 console.log(err);
    //             });
    //     })
    //     .catch((error: any) => {
    //         console.log(error);
    //     });
};
