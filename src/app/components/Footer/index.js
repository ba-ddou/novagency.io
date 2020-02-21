/*
*
* Generic Footer
*
*/
import React from 'react';
import { inject, observer } from 'mobx-react'
import './styles.sass'


// a component that uses dynamic copy will not change its language unless it's an observer
const Footer = inject('viewStore')(observer(({ viewStore }) => {
    let lang = viewStore.language;

    let changeLanguage = (lang)=>{
        viewStore.language = lang;
    }

    return (
        <div className="footer">
            <div className="footer-social">
                <div className="footer-logotype">NOVA</div>
            </div>
            <div className="footer-languages">
                <span
                    onClick={changeLanguage.bind(0,'fr')}
                    className={"footer-languages-french "
                        + (lang === "fr" ? "footer-languages-selected" : "")}
                >Français</span>
                <span
                    onClick={changeLanguage.bind(0,'en')}
                    className={"footer-languages-english "
                        + (lang === "en" ? "footer-languages-selected" : "")}
                >English</span>
            </div>
        </div >
    );
}))

export default Footer;