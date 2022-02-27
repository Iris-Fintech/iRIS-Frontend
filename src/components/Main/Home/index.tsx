import React from 'react';

import './index.css';
import story from '../../../assets/story.svg';

const Home = () => {
    return (
        <>
            <div className="py-3">
                <h3 className="px-5 story-title">HugiRIS - The Journey Begins</h3>
                <img id="story-image" src={story} alt="" />
            </div>
        </>
    );
};

export default Home;
