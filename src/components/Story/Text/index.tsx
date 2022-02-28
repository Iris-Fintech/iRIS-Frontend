import React from 'react';
import Typewriter from 'typewriter-effect';

import './index.css';

const Text = () => {
    return (
        <>
            {/* <hr className="mx-3 top-hr" /> */}
            <div className="py-3">
                <h3 className="px-5 story-title"> The Story </h3>

                <div id="story-container">
                    <div id="story-paragraph-1" className="px-5">
                        <div className="story-prerender">
                            <span className="story-text">
                                The mission of HugiRIS is to buidl a connecting and growing community of web3 on planet
                                iRIS. However, all this starts with a yet simple story that happened a long time ago...
                                Come and portray the next chapter of HugiRIS story altogether.
                            </span>
                        </div>
                        <div className="story-content" id="story-content-1">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(300)
                                        .changeDelay(10)
                                        .typeString(
                                            '<span class="story-text">The mission of HugiRIS is to buidl a connecting and growing community of web3 on planet iRIS. However, all this starts with a yet simple story that happened a long long ago... Come and portray the next chapter of HugiRIS story altogether.</span>',
                                        )
                                        .callFunction((state) => {
                                            // turn off animation
                                            state.elements.cursor.style.animation = 'none';
                                            // hide cursor
                                            state.elements.cursor.style.display = 'none';
                                        })
                                        .start();
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Text;
