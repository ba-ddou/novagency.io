/*
*
* Generic Footer
*
*/
import React from 'react';
import './styles.scss'
import {inject} from 'mobx-react'

const Footer = inject('modelStore')(() => {
    return (
        <div id="footer">
            <div id="footer-social">
                <div id="footer-logotype">NOVA</div>
                {["Facebook","Twitter","Instagram","Behance"].map(data=><span className="footer-social-element">{data}</span>)}
            </div>
            <div id="footer-languages">
                <span id="footer-languages-french">Français</span>
                <span id="footer-languages-english">English</span>
            </div>
        </div>
    );
})

export default Footer;