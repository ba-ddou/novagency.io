/*
*
*
* Contact form submit button
*
*
*/

import React from 'react';
import './styles.sass'
import {SvgSpinningBtn} from 'app/components/SpinningBtn'
import send from 'app/assets/images/getBack.svg'
import { useField, useFormikContext } from 'formik';


const SubmitButton = () => {
    let {isSubmitting} = useFormikContext();
    return (
        <button type="submit">
            <SvgSpinningBtn spin={send} text={"SEND"} />
        </button>
    );
}

export default SubmitButton;