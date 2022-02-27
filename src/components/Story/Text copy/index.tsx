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
                            <h5 className="story-paragraph-time">March 31, 2022...</h5>
                            <br />
                            <span>&ensp;&ensp;&ensp;&ensp;</span>
                            <span className="story-text">
                                Today was supposed to be a great day until a group of intelligent hedgehogs spotted a
                                Polonium asteroid flying straight toward the Earth. After a series of calculations, the
                                hedgehogs concluded that the asteroid would hit the ground and destroyed the planet in
                                about two weeks. After hearing the news, the world has gone crazy, protests and wars
                                were seen everywhere, and no one was willing to just listen. The worried hedgehogs tried
                                to convince everyone to calm down but in vain. After the battle that raged in their
                                head, the hedgehogs set their minds and decided to leave their beloved hometown.
                                <br />
                                <br />
                            </span>
                        </div>
                        <div className="story-content" id="story-content-1">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(300)
                                        .changeDelay(10)
                                        .typeString('<h5 class="story-paragraph-time">March 31, 2022...</h5><br />')
                                        .pauseFor(100)
                                        .changeDelay(1)
                                        .typeString(
                                            '<span>&ensp;&ensp;&ensp;&ensp;</span><span class="story-text">Today was supposed to be a great day until a group of intelligent hedgehogs spotted a Polonium asteroid flying straight toward the Earth. After a series of calculations, the hedgehogs concluded that the asteroid would hit the ground and destroyed the planet in about two weeks. After hearing the news, the world has gone crazy, protests and wars were seen everywhere, and no one was willing to just listen. The worried hedgehogs tried to convince everyone to calm down but in vain. After the battle that raged in their head, the hedgehogs set their minds and decided to leave their beloved hometown.<br /><br /></span>',
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

                    <hr className="px-5" />

                    <div id="story-paragraph-2" className="px-5">
                        <div className="story-prerender">
                            <h5 className="story-paragraph-time">January 19, 2038...</h5>
                            <br />
                            <span>&ensp;&ensp;&ensp;&ensp;</span>
                            <span className="story-text">
                                It was the day of the apocalypse. According to history, a piercing rumble suddenly broke
                                the supposed tranquility in the dead of night – the meteorite finally hit the earth.
                                Brutal as it sounds, hundreds of millions of lives were taken, including the hospitable
                                hedgehogs that were eager to save the ignorant humans. Luckily, right before the
                                meteorite hit the ground, a group of hedgehogs had hastily grabbed their precious
                                belongings, rushing to their spacecraft, embarking on their journey to the land of
                                possibilities – iRIS planet.
                                <br />
                                <br />
                            </span>
                            <span>&ensp;&ensp;&ensp;&ensp;</span>
                            <span className="story-text">
                                However, not long after their departure, a fragment of the Polonium asteroid hit the
                                Hedgehog’s spacecraft and some polonium penetrated the surface. Most hedgehogs suffered
                                and were killed by the toxic substance, but six of them miraculously survived and
                                continued to fly toward iRIS. Although the surviving hedgehogs were passed out, the
                                radiation altered their DNA and gave them mysterious power.
                                <br />
                                <br />
                            </span>
                        </div>

                        <div className="story-content" id="story-content-2">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(300)
                                        .changeDelay(10)
                                        .typeString('<h5 class="story-paragraph-time">January 19, 2038...</h5><br />')
                                        .pauseFor(100)
                                        .changeDelay(1)
                                        .typeString(
                                            '<span>&ensp;&ensp;&ensp;&ensp;</span><span class="story-text">It was the day of the apocalypse. According to history, a piercing rumble suddenly broke the supposed tranquility in the dead of night – the meteorite finally hit the earth. Brutal as it sounds, hundreds of millions of lives were taken, including the hospitable hedgehogs that were eager to save the ignorant humans. Luckily, right before the meteorite hit the ground, a group of hedgehogs had hastily grabbed their precious belongings, rushing to their spacecraft, embarking on their journey to the land of possibilities – iRIS planet.<br /><br /></span>',
                                        )
                                        .pauseFor(200)
                                        .pasteString(
                                            '<span>&ensp;&ensp;&ensp;&ensp;</span><span class="story-text">However, not long after their departure, a fragment of the Polonium asteroid hit the Hedgehog’s spacecraft and some polonium penetrated the surface. Most hedgehogs suffered and were killed by the toxic substance, but six of them miraculously survived and continued to fly toward iRIS. Although the surviving hedgehogs were passed out, the radiation altered their DNA and gave them mysterious power.<br /><br /></span>',
                                            document.querySelector('#story-content-2'),
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

                    <hr className="px-5" />

                    <div id="story-paragraph-3" className="px-5">
                        <div className="story-prerender">
                            <h5 className="story-paragraph-time">February 07, 2106...</h5>
                            <br />
                            <span>&ensp;&ensp;&ensp;&ensp;</span>
                            <span className="story-text">
                                After a long journey, the hedgehogs finally arrived at iRIS. Meters of dust stirred up
                                and obstructed the bright light outside the spacecraft. The six hedgehogs stepped out
                                onto this foreign land and were surprised by their new superpowers. But long before they
                                came out of their trance, the revealing beam of light caught their attention - five
                                unknown flying subjects landed on the land of iRIS, each of them crafted with a unique
                                symbol of Metal, Wood, Water, Fire, and Earth. As the door opened, the six hedgehogs
                                suddenly turned to stone at the moment with more and more peculiar-looking hedgehogs
                                running towards them. It appeared that the meteorite impact twisted the gravity and
                                brought all alien hedgehogs together.
                                <br />
                                <br />
                            </span>
                            <span>&ensp;&ensp;&ensp;&ensp;</span>
                            <span className="story-text">
                                Suddenly, the dead and lonely iRIS planet was lightened up by the immersion of hedgehogs
                                from six different planets. Loud chatters and cheerful laughters broke the deathly
                                stillness, it was the first time where they can express their ideas without bearing the
                                judgy faces of human beings. “Let’s build our community, a place that is filled with
                                love, peace, and equality”, one of the hedgehogs shouted. And that’s it, a revolution in
                                civilization is brewing and is about to blow your mind……
                                <br />
                            </span>
                        </div>

                        <div className="story-content" id="story-content-3">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(300)
                                        .changeDelay(10)
                                        .typeString('<h5 class="story-paragraph-time">February 07, 2106...</h5><br />')
                                        .pauseFor(100)
                                        .changeDelay(1)
                                        .typeString(
                                            '<span>&ensp;&ensp;&ensp;&ensp;</span><span class="story-text">After a long journey, the hedgehogs finally arrived at iRIS. Meters of dust stirred up and obstructed the bright light outside the spacecraft. The six hedgehogs stepped out onto this foreign land and were surprised by their new superpowers. But long before they came out of their trance, the revealing beam of light caught their attention - five unknown flying subjects landed on the land of iRIS, each of them crafted with a unique symbol of Metal, Wood, Water, Fire, and Earth. As the door opened, the six hedgehogs suddenly turned to stone at the moment with more and more peculiar-looking hedgehogs running towards them. It appeared that the meteorite impact twisted the gravity and brought all alien hedgehogs together.<br /><br /></span>',
                                        )
                                        .pauseFor(200)
                                        .pasteString(
                                            '<span>&ensp;&ensp;&ensp;&ensp;</span><span class="story-text">Suddenly, the dead and lonely iRIS planet was lightened up by the immersion of hedgehogs from six different planets. Loud chatters and cheerful laughters broke the deathly stillness, it was the first time where they can express their ideas without bearing the judgy faces of human beings. “Let’s build our community, a place that is filled with love, peace, and equality”, one of the hedgehogs shouted. And that’s it, a revolution in civilization is brewing and is about to blow your mind……<br /></span>',
                                            document.querySelector('#story-content-3'),
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
