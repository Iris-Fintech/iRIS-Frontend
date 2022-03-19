import React from 'react';
import albert from '../../../assets/profile/albert.svg';
import jasmine from '../../../assets/profile/jasmine.svg';
import grass from '../../../assets/profile/grass.svg';
import starsstars from '../../../assets/profile/starsstars.svg';
import tsung from '../../../assets/profile/tsung.svg';
import tsao from '../../../assets/profile/tsao.svg';
import twitter from '../../../assets/twitter.svg';
// import instagram from '../../../assets/instagram.svg';

import './index.css';

const Team = () => {
    return (
        <>
            <div className="py-3">
                <h3 className="px-5 story-title"> Our Team </h3>
                <div className="py-0 mx-0 row">
                    <div className="col-lg-4 py-2">
                        <img className="gold profile" src={albert} />
                        <p className="name mt-2 mb-0">iRIS - AhkL</p>
                        <p className="pos my-0">Co-Founder | Executive</p>
                        <a href="https://twitter.com/Albert_Lin0" target="_blank" rel="noreferrer">
                            <img className="socialMedia" src={twitter} />
                        </a>
                    </div>
                    <div className="col-lg-4 py-2">
                        <img className="water profile" src={jasmine} />
                        <p className="name mt-2 mb-0">iRIS - JS</p>
                        <p className="pos my-0">Co-Founder | Finance</p>
                        <a href="https://twitter.com/7ling2" target="_blank" rel="noreferrer">
                            <img className="socialMedia" src={twitter} />
                        </a>
                    </div>
                    <div className="col-lg-4 py-2 pr-5">
                        <img className="origin profile" src={tsao} />
                        <p className="name mt-2 mb-0">iRIS - tsao</p>
                        <p className="pos my-0">Artist | Designer</p>
                    </div>
                </div>
                <div className="py-0 mx-0 row">
                    <div className="col-lg-4 py-2">
                        <img className="fire profile" src={starsstars} />
                        <p className="name mt-1 mb-0">iRIS - starsstars</p>
                        <p className="pos my-0">Co-Founder | Technology</p>
                        <a href="https://twitter.com/starsstarsst" target="_blank" rel="noreferrer">
                            <img className="socialMedia" src={twitter} />
                        </a>
                    </div>
                    <div className="col-lg-4 py-2">
                        <img className="grass profile" src={tsung} />
                        <p className="name mt-1 mb-0">iRIS - tyh</p>
                        <p className="pos my-0">Co-Founder | Operation</p>
                        <a href="https://twitter.com/tsung_yannnn" target="_blank" rel="noreferrer">
                            <img className="socialMedia" src={twitter} />
                        </a>
                    </div>

                    <div className="col-lg-4 py-2">
                        <img className="soil profile" src={grass} />
                        <p className="name mt-1 mb-0">iRIS - grass</p>
                        <p className="pos my-0">Co-Founder | Administration</p>
                        <a href="https://twitter.com/OAO81333858" target="_blank" rel="noreferrer">
                            <img className="socialMedia" src={twitter} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;
