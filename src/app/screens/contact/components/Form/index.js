/*
*
*
* Contact form
*
*/


import React from 'react';
import './styles.scss';
import { useFormik } from 'formik';
import FormField from 'app/components/FormField'
import * as Yup from 'yup'


const Form = (props) => {

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            company: '',
            message: ''
        },
        validationSchema: Yup.object({
            fullname: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            company: Yup.string(),
            message: Yup.string()
            .min(50, 'Must be 50 characters or more')
            .required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div id="contactForm" className={props.className}>
            <form onSubmit={formik.handleSubmit}>
                <FormField
                    name="fullname"
                    error={formik.touched.fullname ? formik.errors.fullname : false}
                    // validate={formik.touched.fullname && !formik.errors.fullname ? true : false}
                    wires={{ ...formik.getFieldProps('fullname') }}
                />
                <FormField
                    name="email"
                    error={formik.touched.email ? formik.errors.email : false}
                    validate={formik.touched.email && !formik.errors.email ? true : false}
                    wires={{ ...formik.getFieldProps('email') }}
                />
                <FormField
                    name="company"
                    error={formik.touched.company ? formik.errors.company : false}
                    // validate={formik.touched.company && !formik.errors.company ? true : false}
                    wires={{ ...formik.getFieldProps('company') }}
                />
                <FormField
                    name="message"
                    textarea={true}
                    error={formik.touched.message ? formik.errors.message : false}
                    // validate={formik.touched.message && !formik.errors.message ? true : false}
                    wires={{ ...formik.getFieldProps('message') }}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Form;