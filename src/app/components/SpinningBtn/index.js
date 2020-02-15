/*
*
* Generic SpinningBtn
*
*
*/

import React from 'react';
import './styles.sass'
import { motion, useAnimation } from 'framer-motion'

const SpinWrapper = (props) => {
    return (
        <motion.div
            className="spinWrapper"
            animate={{ rotate: 360 }}
            transition={{
                duration: 7,
                ease: 'linear',
                loop: Infinity
            }}
        >
            {props.children}
        </motion.div>
    );
}


// This is a generic spinning Button Component
// it takes an image src as an argument 
// and renders a spinning div that contains the image
export const SvgSpinningBtn = ({ spin, fix }) => {

    return (
        <div className="svgSpinningBtn">
            <SpinWrapper>
                <img src={spin} />
            </SpinWrapper>
            <img src={fix} />
        </div>

    )
}









