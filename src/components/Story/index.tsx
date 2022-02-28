import React, { useState } from 'react';
import Text from './Text';
import Block from './Block';
import Next from './Next';

import metaInfo from './Block/metaInfo';
import './index.css';

const Story = () => {
    const [click, setClick] = useState(-1);

    const expand = (id: number) => {
        setClick(id);
    };

    const closeExpand = () => {
        setClick(-1);
    };

    return (
        <>
            <div>
                <div id="text">
                    <Text />
                </div>
                <div>
                    <div id="block-container">
                        <div id="wrapper" className="px-5">
                            <div
                                id={click == -1 ? 'block-0' : click == 0 ? 'block-expand' : 'block-hide'}
                                className="block-style"
                            >
                                <Block open={expand} closeFunction={closeExpand} id={click} metaInfo={metaInfo[0]} />
                            </div>
                            <div
                                id={click == -1 ? 'block-1' : click == 1 ? 'block-expand' : 'block-hide'}
                                className="block-style"
                            >
                                <Block open={expand} closeFunction={closeExpand} id={click} metaInfo={metaInfo[1]} />
                            </div>
                            <div
                                id={click == -1 ? 'block-2' : click == 2 ? 'block-expand' : 'block-hide'}
                                className="block-style"
                            >
                                <Block open={expand} closeFunction={closeExpand} id={click} metaInfo={metaInfo[2]} />
                            </div>
                            <div
                                id={click == -1 ? 'block-3' : click == 3 ? 'block-expand' : 'block-hide'}
                                className="block-style"
                            >
                                <Block open={expand} closeFunction={closeExpand} id={click} metaInfo={metaInfo[3]} />
                            </div>
                            <div
                                id={click == -1 ? 'block-4' : click == 4 ? 'block-expand' : 'block-hide'}
                                className="block-style"
                            >
                                <Block open={expand} closeFunction={closeExpand} id={click} metaInfo={metaInfo[4]} />
                            </div>

                            <div
                                id={click == -1 ? 'block-5' : click == 5 ? 'block-expand' : 'block-hide'}
                                className="block-special"
                            >
                                <Next open={expand} closeFunction={closeExpand} id={click} myID={5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Story;
