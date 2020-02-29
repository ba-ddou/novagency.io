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
import { Helmet } from 'react-helmet'


const Contact = inject('viewStore')(observer(({ viewStore }) => {
    let language = viewStore.language;
    return (
        <div id="contactPage" className="mainContent-page">
            <Helmet>
                <title>Nova - Contact</title>
            </Helmet>
            <div id="contactPage-copy" className="mainContent-page-splitScreen">
                <span id="contactPage-copy-tagLine">
                    {copy.tagLineOne[language]}<br />
                    {copy.tagLineTwo[language]}<br />
                    <span className="contactPage-copy-grey">{copy.tagLineThree[language]}</span>
                </span>
                <div className="contactPage-contactInfo">
                    <div className="contactPage-contactAbbasset">
                        <p className="contactPage-contactTitle">Abdelbassite Badou</p>
                        <p className="contactPage-contactP">+212 657099413</p>
                        <p className="contactPage-contactM">Abdelbassitebadou@novagency.com</p>
                    </div>
                    <div className="contactPage-contactMehdi">
                        <p className="contactPage-contactTitle">Mehdi El Idrissi</p>
                        <p className="contactPage-contactP">+212 656160669</p>
                        <p className="contactPage-contactM">Mehdielidrissi@novagency.com</p>
                    </div>
                </div>
            </div >
            <ContactForm className="mainContent-page-splitScreen" />
        </div >
    );
}))

export default Contact;