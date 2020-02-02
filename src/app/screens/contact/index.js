/*
*
*
* Contact page main component
*
*/


import React from 'react';
import './styles.scss'
import Form from './components/Form'

const Contact = () => {
    return (
        <div id="contactPage" className="mainContent-page">
            <div id="contactPage-copy" className="mainContent-page-splitScreen">
                <span id="contactPage-copy-tagLine">
                    Let's talk<br />
                    about your<br />
                    <span className="contactPage-copy-grey">project.</span>
                </span>
            </div >
            <Form className="mainContent-page-splitScreen" />
        </div >
    );
}

export default Contact;