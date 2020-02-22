/*
*
* A custom input / textare primitive
* It's built to be used with Formik
*
*/




import React, { Component } from "react";
import "./styles.sass";
import { useField, useFormikContext } from 'formik';

const FormField = ({textarea,validate,...props}) => {

    // Formik's useField hook 
    // It return all the props and callbacks necessary to hook up the inputs to Formik
    const [field, meta] = useField(props);
    let {isSubmitting} = useFormikContext();

    var inputClassNames = "";
    // add the error class name if the input field has been visited and it contains an error
    if (meta.touched && meta.error) inputClassNames = "genericInput-error";
    // add the validation class name if the input field has been visited and it doesn't contains an error
    // the validate prop needs to be set to true for this class to be added
    else if (meta.touched && !meta.error && validate) inputClassNames = "genericInput-validate";

    let isSubmittingClass = isSubmitting ? " genericInput-isSubmiting" : "";

    return (
        <div className="genericInputContainer">
            {/* render an input when textarea is unset or set to false */}
            {!textarea ? <input
                className={inputClassNames+isSubmittingClass}
                {...field}
                {...props}
            /> : <textarea /* render a textarea when textarea is set to true */
                    className={meta.error && meta.touched ? "genericTextArea genericInput-error"+isSubmittingClass : "genericTextArea"+isSubmittingClass}
                    {...field}
                    {...props}
                />}
            <div className="genericInputInfo">
                {/* render an error message when the input field has been visited and it contains an error */}
                {meta.touched && meta.error && <span className="genericInputInfo-error"><i className="icon ion-ios-warning"></i>{" " + meta.error}</span>}
                {/* render a validation icon when the input field has been visited and it contains no errors, and the validate prop is set to true */}
                {!meta.error && meta.touched && validate && <span className="genericInputInfo-validate"><i className="icon ion-ios-checkmark-circle-outline"></i></span>}
            </div>
        </div>

    );
}


export default FormField;
