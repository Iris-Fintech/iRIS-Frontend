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
                                        <span className="month">Phase 1</span>
                                        <span className="year">2Q22</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Reincarnation</h5>
                                <p className="description">
                                    Establish HugiRIS Community
                                    <br />
                                    10K HugiRIS being adopted
                                    <br />
                                    HugiRIS earn $hiRIS w/o staking
                                    <br />
                                    HugiRIS parties & meetups
                                </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Phase 2</span>
                                        <span className="year">3Q22</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Adventure</h5>
                                <p className="description">
                                    NFTs auction with $hiRIS
                                    <br />
                                    $hiRIS staking system
                                    <br />
                                    HugiRIS Equipment wearing system
                                    <br />
                                    HugiRIS parties & meetups
                                </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Phase 3</span>
                                        <span className="year">4Q22</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Reflection</h5>
                                <p className="description">
                                    HugiRIS DAO voting system
                                    <br />
                                    HugiRIS web3 hatcher program
                                    <br />
                                    HugiRIS hodler exclusive merchandise
                                    <br />
                                    HugiRIS parties & meetups
                                </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Phase 4</span>
                                        <span className="year">2023</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Hug iRIS</h5>
                                <p className="description">
                                    NFT collaboration
                                    <br />
                                    International brand collaboration
                                    <br />
                                    Quick Access to our next project
                                    <br />
                                    HugiRIS parties & meetups
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
