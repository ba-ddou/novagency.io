/*
*
* Generic SpinningBtn
*
*
*/

import React from 'react';
import './styles.scss'


export const ArrowSpinningBtn = (props) => {
    return (
        <div className="spinningBtn">
            <i className={`icon ion-ios-arrow-round-${props.direction}`}></i>
        </div>
    );
}

export const SendSpinningBtn = (props) => {
    return (
        <div className="spinningBtn">
            Send
        </div>
    );
}





