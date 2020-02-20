/*
*
* Generic Footer
*
*/
import React from 'react';
import './styles.sass'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-social">
                <div className="footer-logotype">NOVA</div>
            </div>
            <div className="footer-languages">
                <span className="footer-languages-french" activeClassName="footer-languages-french-selected">Français</span>
                <span className="footer-languages-english" activeClassName="footer-languages-english-selected">English</span>
            </div>
        </div>
    );
}

export default Footer;