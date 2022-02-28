import React from 'react';
import './index.css';
import auction from '../../../assets/auction.svg';
import party from '../../../assets/party.svg';
import staking from '../../../assets/staking.svg';

import Watermark from '../Watermark';

const Card = () => {
    return (
        <>
            <div className="py-3">
                <h3 className="px-5 story-title" id="card-story-title">
                    Feature - HugiRIS NFT Utility
                </h3>
                <div className="cardWrapper">
                    <div className="cardContainer" id="c0">
                        <div className="cardImage" id="i0">
                            <div className="cardCity">
                                <img className="cardCityImage" src={party} alt="Real Life Events" />
                            </div>
                        </div>
                        <div className="story" id="s0">
                            <div className="info">
                                <h3 className="card-title">{'Party & Meetups'}</h3>
                                <p className="card-text">
                                    {
                                        'HugiRIS is gonna throw wild parties and meetups. Buy our NFT to meet other HugiRIS hodlers. We are gonna bond and grow together! #WAGMI'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="cardContainer" id="c1">
                        <div className="cardImage" id="i1">
                            <div className="cardCity">
                                <img className="cardCityImage" src={auction} alt="DAO Community" />
                            </div>
                        </div>
                        <div className="story" id="s1">
                            <div className="info">
                                <h3 className="card-title">Auctions & Staking</h3>
                                <p className="card-text">
                                    {
                                        'HugiRIS will hold NFT auctions on special attribute NFTs & blue-chip NFTs. Guess what? You’re gonna bid with $hiRIS earned by HugiRIS hodlers and $hiRIS stakers.'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="cardContainer" id="c2">
                        <div className="cardImage" id="i2">
                            <div className="cardCity">
                                <img className="cardCityImage" src={staking} alt="staking" />
                            </div>
                        </div>
                        <div className="story" id="s2">
                            <div className="info">
                                <h3 className="card-title">Non-immersive Game</h3>
                                <p className="card-text">
                                    {
                                        'The story of the planet iRIS is composed of all 10K HugiRIS holders. Decide the next step carefully and portray your future together. #HugiRIS_DAO'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Watermark />
            </div>
        </>
    );
};

export default Card;

// credit: https://codepen.io/akhil_001/pen/zoQdaO
