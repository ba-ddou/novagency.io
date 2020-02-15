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

export const SvgSpinningBtn = ({ spin, fix,text }) => {
    return (
        <div className="svgSpinningBtn">
            <SpinWrapper>
                <img src={spin} />
            </SpinWrapper>
            {fix && <img src={fix} />}
            {text && <span className="center-XY">{text}</span>}
        </div>

    )
}









