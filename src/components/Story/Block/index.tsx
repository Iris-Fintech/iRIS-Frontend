import React from 'react';
import closeButton from '../../../assets/close.svg';
import './index.css';

const Block = ({ open, closeFunction, id, metaInfo }: any) => {
    const myID = metaInfo.id - 1;

    return (
        <>
            <div
                className="block-display"
                onClick={() => {
                    if (id != myID) {
                        open(myID);
                    }
                }}
            >
                {id != myID && (
                    <>
                        <img className="block-icon" src={metaInfo.icon}></img>
                        <div className="block-id">{metaInfo.id}</div>

                        <div className="block-title">{metaInfo.title}</div>
                        <div className="block-subtitle">{metaInfo.subtitle}</div>
                    </>
                )}

                {id == myID && (
                    <>
                        <div className="block-top-expand">
                            <div className="block-top-header">
                                <div className="block-top-title-subtitle">
                                    <div className="block-title-expand">{metaInfo.subtitle}</div>
                                    <div className="block-subtitle-expand">{metaInfo.title}</div>
                                </div>

                                <div className="close-btn" onClick={closeFunction}>
                                    <img src={closeButton} style={{ height: '100%' }}></img>
                                </div>
                            </div>
                            <hr className="horizontal"></hr>
                        </div>
                        <div className="block-content">{metaInfo.content}</div>
                        <img className="block-icon-expand" src={metaInfo.icon}></img>
                    </>
                )}
            </div>
        </>
    );
};

export default Block;
