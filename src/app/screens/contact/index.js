/*
*
*
* Contact page main component
*
*/


import React from 'react';
import './styles.sass'
import ContactForm from './components/ContactForm'
import { inject, observer } from 'mobx-react'
import copy from './copy'

const Contact = inject('viewStore')(observer(({ viewStore }) => {
    let language = viewStore.language;
    return (
        <div id="contactPage" className="mainContent-page">
            <div id="contactPage-copy" className="mainContent-page-splitScreen">
                <span id="contactPage-copy-tagLine">
                    {copy.tagLineOne[language]}<br />
                    {copy.tagLineTwo[language]}<br />
                    <span className="contactPage-copy-grey">{copy.tagLineThree[language]}</span>
                </span>
            </div >
            <ContactForm className="mainContent-page-splitScreen" />
        </div >
    );
}))

export default Contact;