import React from 'react';
import fire from '../../../assets/profile/CEP_fire.svg';
import gold from '../../../assets/profile/CEP_gold.svg';
import grass from '../../../assets/profile/CEP_grass.svg';
import soil from '../../../assets/profile/CEP_soil.svg';
import water from '../../../assets/profile/CEP_water.svg';
import twitter from '../../../assets/twitter.svg';

import './index.css';

const Team = () => {
    return (
        <>
            <div className="py-3">
                <h3 className="px-5 story-title"> Our Team </h3>
                <div className="pt-4 mx-0 row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 py-2">
                        <img className="gold profile" src={gold} />
                        <a href="https://twitter.com/Albert_Lin0" target="_blank" rel="noreferrer">
                            <p className="name mt-2 mb-0">iRIS - AhkL</p>
                            <p className="pos my-0">Co-Founder | Executive</p>
                            <img className="twit" src={twitter} />
                        </a>
                    </div>
                    <div className="col-md-4 py-2">
                        <img className="water profile" src={water} />
                        <a href="https://twitter.com/7ling2" target="_blank" rel="noreferrer">
                            <p className="name mt-2 mb-0">iRIS - JS</p>
                            <p className="pos my-0">Co-Founder | Finance</p>
                            <img className="twit" src={twitter} />
                        </a>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="py-0 mx-0 row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 py-2">
                        <img className="fire profile" src={fire} />
                        <a href="https://twitter.com/starsstarsst" target="_blank" rel="noreferrer">
                            <p className="name mt-1 mb-0">iRIS - starsstars</p>
                            <p className="pos my-0">Co-Founder | Technology</p>
                            <img className="twit" src={twitter} />
                        </a>
                    </div>
                    <div className="col-md-4 py-2">
                        <img className="grass profile" src={grass} />
                        <a href="https://twitter.com/tsung_yannnn" target="_blank" rel="noreferrer">
                            <p className="name mt-1 mb-0">iRIS - tyh</p>
                            <p className="pos my-0">Co-Founder | Operation</p>
                            <img className="twit" src={twitter} />
                        </a>
                    </div>
                    <div className="col-md-3 py-2">
                        <img className="soil profile" src={soil} />
                        <a href="https://twitter.com/OAO81333858" target="_blank" rel="noreferrer">
                            <p className="name mt-1 mb-0">iRIS - grass</p>
                            <p className="pos my-0">Co-Founder | Administration</p>
                            <img className="twit" src={twitter} />
                        </a>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </>
    );
};

export default Team;
