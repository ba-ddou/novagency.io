import React, { Component } from "react";
import "./styles.scss";
import { useField } from 'formik';

const FormField = ({textarea,validate,...props}) => {

    const [field, meta] = useField(props);

    var inputClassNames;
    if (meta.touched && meta.error) inputClassNames = "genericInput-error";
    else if (meta.touched && !meta.error && validate) inputClassNames = "genericInput-validate";
    return (
        <div className="genericInputContainer">
            {!textarea ? <input
                className={inputClassNames}
                {...field}
                {...props}
            /> : <textarea
                    className={meta.error && meta.touched ? "genericTextArea genericInput-error" : "genericInput genericTextArea"}
                    {...field}
                    {...props}
                />}
            <div className="genericInputInfo">
                {meta.touched && meta.error && <p className="genericInputInfo-error"><i className="icon ion-ios-warning"></i>{" " + meta.error}</p>}
                {!meta.error && meta.touched && validate && <p className="genericInputInfo-validate"><i className="icon ion-ios-checkmark-circle-outline"></i></p>}
            </div>
        </div>

    );
}


export default FormField;
