import React from 'react';
import './index.css';

const Icon = (icon: string) => {
    return (
        <>
            <img src={icon} className="icon-style" />
        </>
    );
};

export default Icon;
