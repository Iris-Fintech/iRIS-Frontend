import React from 'react';
import Typewriter from 'typewriter-effect';

import './index.css';

const Story = () => {
    return (
        <>
            {/* <hr className="mx-3 top-hr" /> */}
            <div className="py-3">
                <h3 className="px-5 story-title"> The Story </h3>

                <div id="story-text">
                    <div id="story-paragraph-1" className="px-5">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(2000)
                                    .changeDelay(10)
                                    .typeString(
                                        '<span class="story-paragraph-time">March 31, 2022...<span><br /><br />',
                                    )
                                    .pauseFor(200)
                                    .changeDelay(1)
                                    .typeString(
                                        '<span>&ensp;&ensp;&ensp;&ensp;</span>A piercing ringtone from NASA Johnson Space Center broke the supposed tranquility. NASA discovered a Polonium asteroid flying toward the Earth and was expected to hit the ground in 2 months. So, the scientists decided to send 1,000 per species to the new Earth – Kepler-352b. The spacecraft carried the hope of the Earth and started the journal to Kepler-352b.<br /><br />',
                                    )
                                    .pauseFor(200)
                                    .pasteString(
                                        '<span>&ensp;&ensp;&ensp;&ensp;</span>However, a fragment of the Polonium asteroid hit the Hedgehog’s spacecraft and some polonium dissipated into the spacecraft. Most hedgehogs were killed but 20 of them miraculously survived and continued to fly toward Kepler-352b. Although the remaining hedgehogs were still asleep, the radiation altered their DNA and gave them mysterious power.<br /><br />',
                                        document.querySelector('#story-paragraph-1'),
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

                    <hr className="px-5" />

                    <div id="story-paragraph-2" className="px-5">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(2000)
                                    .changeDelay(10)
                                    .typeString(
                                        '<span class="story-paragraph-time">January 19, 2038...</span><br /><br />',
                                    )
                                    .pauseFor(200)
                                    .changeDelay(1)
                                    .typeString(
                                        '<span>&ensp;&ensp;&ensp;&ensp;</span>Not long after the radiation asteroid crisis, the spacecraft encountered a second crisis. The solar storm from Proxima Centauri, the closest Sun to Solar System, was flooding toward the spacecraft. The interaction between solar storm substance and Polonium gave birth to a totally new element – Irisodium. The Irisodium drastically affected the hedgehogs’ DNA and they evolved into a new species – iRIS Hogs. There are 5 types of iRIS Hogs, which is Metal, Wood, Water, Fire, and Soil.<br /><br />',
                                    )
                                    .pauseFor(200)
                                    .pasteString(
                                        '<span>&ensp;&ensp;&ensp;&ensp;</span>Outside of the spacecraft, the fierce solar storm kept speeding the spacecraft. The spacecraft became faster and faster, eventually, the spacecraft hit sub-light speed and headed toward Kepler-352b.<br /><br /><br />',
                                        document.querySelector('#story-paragraph-2'),
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

                    <hr className="px-5" />

                    <div id="story-paragraph-3" className="px-5">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(2000)
                                    .changeDelay(10)
                                    .typeString(
                                        '<span class="story-paragraph-time">February 07, 2106...</span><br /><br />',
                                    )
                                    .pauseFor(200)
                                    .changeDelay(1)
                                    .typeString(
                                        '<span>&ensp;&ensp;&ensp;&ensp;</span>At Kepler-256b, a spacecraft landed on the planet. Meters of dust stirred up and obstructed the view. After the dust dispersed slightly, the iRIS Hogs stepped outside the spacecraft, symbolizing the new era of civilization.<br />',
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
        </>
    );
};

export default Story;
