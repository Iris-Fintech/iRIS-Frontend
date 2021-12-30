import React from 'react';
import { Container } from 'react-bootstrap';
import Home from './Home';
import Story from './Story';
import Roadmap from './Roadmap';
import Team from './Team';
import Contact from './Contact';
import './index.css';

const Main = () => {
    return (
        <>
            <Container className="main" fluid>
                <div id="home">
                    <Home />
                </div>
                <div id="story">
                    <Story />
                </div>
                <div id="roadmap">
                    <Roadmap />
                </div>
                <div id="team">
                    <Team />
                </div>
                <div id="contact">
                    <Contact />
                </div>
            </Container>
        </>
    );
};

export default Main;
