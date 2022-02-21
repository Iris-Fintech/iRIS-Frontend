import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './index.css';

const Balance = () => {
    return (
        <>
            <Container className="px-0" fluid>
                <h3 className="card-title">Account Info</h3>
                <Card className="mt-3 public-card">
                    <Card.Title>Your Account</Card.Title>
                    <Card.Body>
                        <Card.Text>Hi</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Balance;
