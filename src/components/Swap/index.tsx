import React from 'react';
import { Card, Form, Button, Image, Modal } from 'react-bootstrap';
// import { useWeb3React } from '@web3-react/core';
// import Web3 from 'web3';
import './index.css';
import GIS from './GIS.jpg';
import GIS_banner from './GIS_banner.jpg';

const SwapForm = () => {
    const [swapvalue, setSwapvalue] = React.useState<number>();
    const [swapfrom, setSwapfrom] = React.useState();
    const [swapto, setSwapto] = React.useState();
    const onInput = (event: any) => setSwapvalue(event.target.value);

    const onFrom = (event: any) => setSwapfrom(event.target.value);

    const onTo = (event: any) => setSwapto(event.target.value);

    const onSubmit = () => {
        console.log(swapvalue, swapfrom, swapto);
    };

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formToekn" onChange={onFrom}>
                    <Form.Label>Swap Token From</Form.Label>
                    <Form.Select>
                        <option>Choose a token</option>
                        <option value="BTC">Bitcoin</option>
                        <option value="ETH">Ether</option>
                        <option value="USDC">US Dollars</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formValue" onChange={onInput}>
                    <Form.Label>Swap Value</Form.Label>
                    <Form.Control type="number" placeholder="Enter a number" />
                    <Form.Text className="text-muted">Please make sure you have enough balance</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formToekn" onChange={onTo}>
                    <Form.Label>Swap Token to</Form.Label>
                    <Form.Select>
                        <option>Choose a Token</option>
                        <option value="BTC">Bitcoin</option>
                        <option value="ETH">Ether</option>
                        <option value="USDC">US Dollars</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="outline-warning" onClick={onSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default function Swap(): any {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Card className="mx-3 my-2 px-1 py-1">
                        <Card.Title>
                            <p id="CardTitle">Swap</p>
                        </Card.Title>
                        <Card.Body>
                            <SwapForm />
                        </Card.Body>
                    </Card>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-12">
                    <Card className="mx-3 my-2 px-1 py-1">
                        <Image src={GIS_banner} rounded />
                    </Card>
                </div>
            </div>
            <Modal show={true}>
                <h2 id="Test">Sponsorship</h2>
                <Image id="IMAGE" src={GIS} fluid />
            </Modal> */}
        </>
    );
}
