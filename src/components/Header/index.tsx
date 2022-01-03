import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ConnectButton from '../ConnectButton';
import './index.css';
import iris_banner from '../../assets/iris_banner_light.svg';

// expand="lg" variant="dark" sticky="top"
const Header = () => {
    return (
        <>
            <Navbar id="Nav" sticky="top" expand="lg" variant="dark">
                <Container className="mx-3 my-1" fluid>
                    <Navbar.Brand href="/" style={{ marginLeft: '1%' }}>
                        <img src={iris_banner} width="90" height="36" alt="iRIS Fintech" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Item style={{ marginLeft: '1%' }}>
                                <Nav.Link style={{ color: 'rgb(230, 230, 250)' }} href="#home">
                                    HOME
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginLeft: '1%' }}>
                                <Nav.Link style={{ color: 'rgb(230, 230, 250)' }} href="#story">
                                    STORY
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginLeft: '1%' }}>
                                <Nav.Link style={{ color: 'rgb(230, 230, 250)' }} href="#roadmap">
                                    ROADMAP
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginLeft: '1%' }}>
                                <Nav.Link style={{ color: 'rgb(230, 230, 250)' }} href="#team">
                                    TEAM
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginLeft: '1%' }}>
                                <Nav.Link style={{ color: 'rgb(230, 230, 250)' }} href="#contact">
                                    CONTACT
                                </Nav.Link>
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
