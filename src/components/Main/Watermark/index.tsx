import React, { useState, useEffect } from 'react';
import { RiMoonClearLine } from 'react-icons/ri';

import './index.css';

const Watermark = () => {
    const [isVisible, setIsVisible] = useState(false);

    const getOffset = (element: any) => {
        const rect = element?.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return rect!.top + scrollTop;
    };

    const getHeight = (element: any) => {
        const rect = element?.offsetHeight;
        return rect;
    };

    useEffect(() => {
        const listenToScroll = () => {
            const upperEdge =
                getOffset(document.querySelector('#card')) + getHeight(document.querySelector('#card-story-title'));
            const bottomEdge = getOffset(document.querySelector('#roadmap'));

            const heightOfFixedDivHead = getOffset(document.querySelector('#iRIS-bg'));
            const heightOfFixedDivBottom = heightOfFixedDivHead + getHeight(document.querySelector('#iRIS-bg'));

            console.log(
                getHeight(document.querySelector('#card-story-title')),
                heightOfFixedDivHead,
                heightOfFixedDivBottom,
                upperEdge,
                bottomEdge,
            );
            if (heightOfFixedDivBottom <= bottomEdge && heightOfFixedDivHead >= upperEdge) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
    }, [isVisible]);

    return (
        <div id="iRIS-bg" className={isVisible ? 'fadeIn' : 'fadeOut'}>
            <p className="bg-text">
                Where to go? <RiMoonClearLine />
            </p>
            <p className="bg-text">Planet iRIS!</p>
        </div>
    );
};

export default Watermark;
