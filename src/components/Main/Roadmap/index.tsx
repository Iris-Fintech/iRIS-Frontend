import React from 'react';
import './index.css';

const Roadmap = () => {
    return (
        <>
            <div className="py-3">
                <h3 className="px-5 story-title"> Roadmap - Step to our future! </h3>
            </div>
            <div className="py-1">
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
                                <h5 className="title">First Step</h5>
                                <p className="description">
                                    Approach artists and partner stores
                                    <br />
                                    Develop one page website
                                    <br />
                                    Develop core contract
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
                                <h5 className="title">First Mint</h5>
                                <p className="description">
                                    Build community
                                    <br />
                                    Online AMA party
                                    <br />
                                    Announce profit sharing percantage
                                    <br />
                                    IDO first mint character profile picture
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
                                    Build solar mine
                                    <br />
                                    Onsite Easter party
                                    <br />
                                    Time to time airdrops
                                    <br />
                                    Preparing Second Round IDO
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
                                <h5 className="title">Second Mint</h5>
                                <p className="description">
                                    Running solar mine
                                    <br />
                                    Announe new year plan
                                    <br />
                                    Both Online and Onsite Summer Party
                                    <br />
                                    IDO second mint character profile picture
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
