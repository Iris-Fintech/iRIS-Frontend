import React, { useState, useEffect } from 'react';
import { RiMoonClearLine } from 'react-icons/ri';
import './index.css';
import iris_logo from '../../assets/iris_logo.png';

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
                <p>
                    iRIS to the moon <RiMoonClearLine />
                </p>
            </div>

            <div className="cardWrapper">
                <div className="cardContainer" id="c0">
                    <div className="cardImage" id="i0">
                        <div className="cardCity">
                            <img className="cardCityImage" src={iris_logo} alt="iRIS is the best" />
                        </div>
                    </div>
                    <div className="story" id="s0">
                        <div className="info">
                            <h3 className="card-title">Title 1</h3>
                            <p className="card-text"> I dont know. cc</p>
                        </div>
                    </div>
                </div>

                <div className="cardContainer" id="c1">
                    <div className="cardImage" id="i1">
                        <div className="cardCity">
                            <img className="cardCityImage" src={iris_logo} alt="iRIS is the best" />
                        </div>
                    </div>
                    <div className="story" id="s1">
                        <div className="info">
                            <h3 className="card-title">Titel 2</h3>
                            <p className="card-text"> I rlly dont know. cc</p>
                        </div>
                    </div>
                </div>

                <div className="cardContainer" id="c2">
                    <div className="cardImage" id="i2">
                        <div className="cardCity">
                            <img className="cardCityImage" src={iris_logo} alt="iRIS is the best" />
                        </div>
                    </div>
                    <div className="story" id="s2">
                        <div className="info">
                            <h3 className="card-title">Title 3</h3>
                            <p className="card-text"> Hermes is google CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

// credit: https://codepen.io/akhil_001/pen/zoQdaO
