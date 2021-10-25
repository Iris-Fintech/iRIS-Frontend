import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
import ConnectButton from '../ConnectButton';

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" variant="light" sticky="top">
                <Navbar.Brand href="/" style={{ marginLeft: '1%' }}>
                    DeFite Button
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="container-fluid">
                        <Nav.Item style={{ marginLeft: '1%' }}>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ marginLeft: '1%' }}>
                            <Nav.Link href="/swap">Swap</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ marginLeft: '1%' }}>
                            <Nav.Link href="/lending">Lending</Nav.Link>
                        </Nav.Item>

                        <Nav.Item className="ms-auto">
                            <ConnectButton />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;
