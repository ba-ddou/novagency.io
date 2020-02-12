/*
*
* Generic SpinningBtn
*
*
*/

import React from 'react';
import './styles.scss'
import { motion, useAnimation } from 'framer-motion'

const SpinWrapper = (props) => {
    const controls = useAnimation();
    let start = async () =>{
        
        controls.start({
            rotate: 360,
            transition: {
                duration: 7,
                ease: 'linear',
                loop: Infinity
            }
        });
        // console.log('start');
        
    }

    let stop = async () => {
        await controls.stop();
        // console.log('stop');
    }
    start();


    return (
        <div id="spinWrapper">
            <motion.div
                className="spin"
                animate={controls}
                // onHoverStart={}
                // onHoverEnd={}
            >
            {props.children}
            </motion.div>
        </div>
    );
}

export const SvgSpinningBtn = ({src})=>{
    return (
        <SpinWrapper>
            <img src={src} />
        </SpinWrapper>
    )
}



export const ArrowSpinningBtn = (props) => {
    return (
        <SpinWrapper>
            <span className="arrowSpinningBtn center-XY">
                <i className={`icon ion-ios-arrow-round-${props.direction}`}></i>
            </span>
        </SpinWrapper>

    );
}

export const SendSpinningBtn = (props) => {
    return (
        <div className="spinningBtn">
            Send
        </div>
    );
}





