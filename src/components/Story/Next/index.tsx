import React, { useState } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import config from '../../../config';
import closeButton from '../../../assets/close.svg';
import Crossroad from '../../../assets/crossroad.svg';
import './index.css';

enum State {
    NONE,
    SUCCESS,
    ERROR,
}

const Next = ({ open, closeFunction, id, myID }: any) => {
    const [idea, setIdea] = useState('');
    const [Alertshow, setAlertState] = useState(State.NONE);

    const onInput = ({ target: { value } }: any) => setIdea(value);

    const onHandleClose = () => {
        setAlertState(State.NONE);
    };

    const onFormSubmit = async (event: any) => {
        event.preventDefault();

        if (idea == '') {
            setAlertState(State.ERROR);
        } else {
            const hostname = config.backend_url;
            const endpoint = new URL(`/api/story-proposal`, hostname).href;
            const data = {
                Story: idea,
            };

            const response = axios.post(endpoint, data);
            response
                .then((res) => {
                    console.log(res);
                    setAlertState(State.SUCCESS);
                })
                .catch((err) => {
                    console.log(err);
                    setAlertState(State.ERROR);
                });
        }

        setIdea('');
    };

    return (
        <>
            <div
                className="next-block-display"
                onClick={() => {
                    if (id != myID) {
                        open(myID);
                    }
                }}
            >
                {id != myID && (
                    <div>
                        <img className="next-block-icon" src={Crossroad}></img>
                        <div className="next-block-title">Next Chapter</div>
                    </div>
                )}

                {id == myID && (
                    <>
                        <img className="next-block-icon-expand" src={Crossroad}></img>
                        <div className="next-block-top-expand">
                            <div className="next-block-top-header">
                                <div className="next-block-title-expand">Next Chapter</div>

                                <div className="next-close-btn" onClick={closeFunction}>
                                    <img src={closeButton} style={{ height: '100%' }}></img>
                                </div>
                            </div>
                            <hr className="next-horizontal"></hr>
                        </div>
                        <div className="next-block-content">The journey begins right now.</div>
                        <div className="next-block-voting">
                            <Form onSubmit={onFormSubmit}>
                                <Form.Label></Form.Label>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control
                                        placeholder="Portray HugiRIS future"
                                        as="textarea"
                                        rows={5}
                                        onChange={onInput}
                                        value={idea}
                                    />
                                </Form.Group>
                                <Button className="label" variant="outline-dark" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </>
                )}
            </div>
            {Alertshow == State.SUCCESS && (
                <Modal className="modal" show={true} onHide={onHandleClose}>
                    <Modal.Body className="modaltext">{'Your proposal has been send to planet iRIS...'}</Modal.Body>
                </Modal>
            )}

            {Alertshow == State.ERROR && (
                <Modal className="modal" show={true} onHide={onHandleClose}>
                    <Modal.Body className="modaltext">{'ERROR! Your message has lost in the vast space.'}</Modal.Body>
                </Modal>
            )}
        </>
    );
};

export default Next;
