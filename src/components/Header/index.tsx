import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ConnectButton from '../ConnectButton';

const Header = () => {
    return (
        <>
            <Navbar bg="black" expand="lg" variant="dark" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/" style={{ marginLeft: '1%' }}>
                        Iris Fintech
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Item style={{ marginLeft: '1%' }}>
                                <Nav.Link href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginLeft: '1%' }}>
                                <Nav.Link href="/swap">Swap</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginLeft: '1%' }}>
                                <Nav.Link href="/lending">Lending</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav>
                            <Nav.Item>
                                <ConnectButton />
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
