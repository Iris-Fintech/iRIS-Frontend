import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ConnectButton from '../ConnectButton';
import './index.css';
import iris_banner from '../../assets/iris_banner_light.svg';
import twitter from '../../assets/twitter.svg';
import discord from '../../assets/discord.svg';

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
                                    FEATURE
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
                            <Nav.Item style={{ marginLeft: '1%', marginRight: '2%' }}>
                                <Nav.Link style={{ color: 'rgb(230, 230, 250)' }} href="#contact">
                                    CONTACT
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginLeft: '1%', marginRight: '2%' }}>
                                <Nav.Link
                                    style={{ color: 'rgb(230, 230, 250)' }}
                                    href="https://twitter.com/hugiRIS_nft"
                                    target="_blank"
                                >
                                    <img src={twitter} id="nav-image-twitter" alt="Twitter" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginLeft: '1%' }}>
                                <Nav.Link
                                    style={{ color: 'rgb(230, 230, 250)' }}
                                    href="https://discord.gg/XNYGByFGGQ"
                                    target="_blank"
                                >
                                    <img src={discord} id="nav-image-discord" alt="Discord" />
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
