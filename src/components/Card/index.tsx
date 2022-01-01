import React, { useState, useEffect } from 'react';
import { RiMoonClearLine } from 'react-icons/ri';
import { FaEthereum } from 'react-icons/fa';
import './index.css';
import community from '../../assets/community.svg';
import party from '../../assets/party.svg';
import discount from '../../assets/discount.svg';

const Card = () => {
    const [isVisible, setIsVisible] = useState(true);

    const getOffset = (element: any) => {
        const rect = element?.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return rect!.top + scrollTop;
    };

    const getHeight = (element: any) => {
        const rect = element?.clientHeight;
        return rect;
    };

    useEffect(() => {
        const listenToScroll = () => {
            const heightToHideFrom = getOffset(document.querySelector('#story'));
            const heightOfFixedDiv =
                getOffset(document.querySelector('#iRIS-bg')) + getHeight(document.querySelector('#iRIS-bg'));

            if (heightOfFixedDiv >= heightToHideFrom) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
    }, [isVisible]);

    return (
        <>
            <div id="iRIS-bg" className={isVisible ? 'fadeIn' : 'fadeOut'}>
                <p className="bg-text">
                    iRIS to the moon <RiMoonClearLine />
                </p>
                <p className="bg-text">
                    Time to FOMO <FaEthereum />
                </p>
            </div>

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
                                    'iRIS is gonna throw wild parties and meetups every seasons. Buy our NFT to meet other hodlers! Also, find the clues to upgrade your NFT in dat parties!'
                                }
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cardContainer" id="c1">
                    <div className="cardImage" id="i1">
                        <div className="cardCity">
                            <img className="cardCityImage" src={community} alt="DAO Community" />
                        </div>
                    </div>
                    <div className="story" id="s1">
                        <div className="info">
                            <h3 className="card-title">Mining DAO</h3>
                            <p className="card-text">
                                {
                                    '50% of the profit from all activities will be devoted to SOLAR PANEL Mining and Liquidity mining. The interest belongs to the DAO. Time to FOMO!'
                                }
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cardContainer" id="c2">
                    <div className="cardImage" id="i2">
                        <div className="cardCity">
                            <img className="cardCityImage" src={discount} alt="Discount" />
                        </div>
                    </div>
                    <div className="story" id="s2">
                        <div className="info">
                            <h3 className="card-title">NFT coupon</h3>
                            <p className="card-text">
                                {
                                    "iRIS's NFT is gonna save you loads of money. We are going to find more partnership and the NFT will become the best coupon ever!"
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

// credit: https://codepen.io/akhil_001/pen/zoQdaO
