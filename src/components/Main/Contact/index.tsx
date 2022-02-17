import React, { Component } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import './index.css';
import axios from 'axios';
import config from '../../../config';

enum State {
    NONE,
    SUCCESS,
    ERROR,
}

interface ContactInfo {
    Firstname: string;
    Lastname: string;
    Email: string;
    Message: string;
    Alertshow: State;
}

class Contact extends Component<{}, ContactInfo> {
    constructor(props: any) {
        super(props);
        this.state = {
            Firstname: '',
            Lastname: '',
            Email: '',
            Message: '',
            Alertshow: State.NONE,
        };
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    async onHandleSubmit(event: any) {
        event.preventDefault();

        if (
            this.state.Firstname == '' ||
            this.state.Lastname == '' ||
            this.state.Email == '' ||
            this.state.Message == ''
        ) {
            this.setState({
                Alertshow: State.ERROR,
            });
        } else {
            const hostname = config.backend_url;
            const endpoint = new URL(`/api/add-response`, hostname).href;
            const data = {
                Lastname: this.state.Lastname,
                Firstname: this.state.Firstname,
                Email: this.state.Email,
                Content: this.state.Message,
            };

            const response = await axios.post(endpoint, data);
            if (response.status === 200) {
                this.setState({
                    Firstname: '',
                    Lastname: '',
                    Email: '',
                    Message: '',
                    Alertshow: State.SUCCESS,
                });
            } else {
                this.setState({
                    Firstname: '',
                    Lastname: '',
                    Email: '',
                    Message: '',
                    Alertshow: State.ERROR,
                });
            }
        }
    }

    onHandleClose() {
        this.setState({ Alertshow: State.NONE });
    }

    render() {
        const { Firstname, Lastname, Email, Message, Alertshow } = this.state;
        return (
            <>
                <div className="pt-3">
                    <h3 className="px-5 story-title"> Contact Us </h3>
                    <Container fluid>
                        <div className="row px-5 pt-2">
                            <div className="col-1"></div>
                            <div className="col-sm-10">
                                <h5 className="pt-5 pb-2 story-content"> Please feel free to reach out to us!</h5>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <Form>
                            <div className="row px-5 pt-2">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-5">
                                    <Form.Group className="mb-3" controlId="FirstName">
                                        <Form.Label className="label">First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={Firstname}
                                            onChange={(e) => this.setState({ Firstname: e.target.value })}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-sm-5">
                                    <Form.Group className="mb-3" controlId="LastName">
                                        <Form.Label className="label">Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={Lastname}
                                            onChange={(e) => this.setState({ Lastname: e.target.value })}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-sm-1"></div>
                            </div>
                            <div className="row px-5 pt-2">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <Form.Group className="mb-3" controlId="Email">
                                        <Form.Label className="label">Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            value={Email}
                                            onChange={(e) => this.setState({ Email: e.target.value })}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-sm-1"></div>
                            </div>
                            <div className="row px-5 pt-2">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <Form.Group className="mb-3" controlId="Message">
                                        <Form.Label className="label">Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            value={Message}
                                            onChange={(e) => this.setState({ Message: e.target.value })}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-sm-1"></div>
                            </div>
                            <div className="row px-5 pt-2 pb-5">
                                <div className="col-sm-10"></div>
                                <div className="col-sm-1 px-1">
                                    <Button
                                        className="label"
                                        variant="outline-light"
                                        type="submit"
                                        onClick={(e) => this.onHandleSubmit(e)}
                                    >
                                        Submit
                                    </Button>
                                </div>
                                <div className="col-1"></div>
                            </div>
                        </Form>
                    </Container>
                    {Alertshow == State.SUCCESS && (
                        <Modal className="modal" show={true} onHide={() => this.onHandleClose()}>
                            <Modal.Body className="modaltext">
                                {"Message sent successfully, we'll contact you ASAP!"}
                            </Modal.Body>
                        </Modal>
                    )}

                    {Alertshow == State.ERROR && (
                        <Modal className="modal" show={true} onHide={() => this.onHandleClose()}>
                            <Modal.Body className="modaltext">{'ERROR! Please fill in all required fields'}</Modal.Body>
                        </Modal>
                    )}
                </div>
            </>
        );
    }
}

export default Contact;
