/*
*
*
* a floating message for form submition feedback
*
*
*/


import React from 'react';
import ReactDOM from 'react-dom'
import './styles.sass'


const FloatingMessage = ({content}) => {
    console.log("floatingmessage");
    return ReactDOM.createPortal((
        <div className="floatingMessage">
            <span>{content}</span>
        </div>
    )
    ,document.getElementById("root"));
}

export default FloatingMessage;