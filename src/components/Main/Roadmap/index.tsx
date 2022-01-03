import React from 'react';
import './index.css';

const Roadmap = () => {
    return (
        <>
            <div className="py-3">
                <h3 className="px-5 story-title"> Roadmap - Step to our future! </h3>
            </div>
            <div className="py-5">
                <div className="container">
                    <div className="main-timeline">
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Oct. to Dec. </span>
                                        <span className="year">4Q21</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Preliminary Stage</h5>
                                <p className="description">
                                    Reveal our NFT landing page
                                    <br />
                                    Reveal the story behind iRIS Hogs
                                    <br />
                                    Build solar energy mining prototype
                                    <br />
                                    Survive NTU CEP final pitch
                                </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Jan. to Mar.</span>
                                        <span className="year">1Q22</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">NFT Public Mint</h5>
                                <p className="description">
                                    Establish iRIS community
                                    <br />
                                    iRIS first Online AMA
                                    <br />
                                    Reveal interest DAO mechanism
                                    <br />
                                    Public mint of iRIS Hogs NFT
                                </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Apr. to Jun.</span>
                                        <span className="year">2Q22</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Solar Panel Time</h5>
                                <p className="description">
                                    Construct solar energy mining
                                    <br />
                                    Real world Easter party
                                    <br />
                                    Party to Earn! Collect mysterious equipments
                                    <br />
                                    Sneak peak at our new plan
                                </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Jul. to Sep.</span>
                                        <span className="year">3Q22</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Reveal new plan</h5>
                                <p className="description">
                                    Announe New Year plan
                                    <br />
                                    Online and Real world Summer Party
                                    <br />
                                    iRIS Web3.0 symposium
                                    <br />
                                    Member exclusive merchandise
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Roadmap;
