/*
*
*
* Contact form
*
*/


import React from 'react';
import './styles.scss';
import { Formik, Form} from 'formik';
import FormField from 'app/components/FormField'
import * as Yup from 'yup'


const ContactForm = (props) => {



    return (
        <div id="contactForm" className={props.className}>
            <Formik
                initialValues={{
                    fullname: '',
                    email: '',
                    company: '',
                    message: ''
                }}
                validationSchema={Yup.object({
                    fullname: Yup.string()
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    company: Yup.string(),
                    message: Yup.string()
                        .min(50, 'Must be 50 characters or more')
                        .required('Required')
                })}
                onSubmit={values => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <FormField
                        name="fullname"
                        type="text"
                        placeholder="fullname"
                    />
                    <FormField
                        name="email"
                        type="email"
                        placeholder="email"
                        validate={true}
                    />
                    <FormField
                        name="company"
                        type="text"
                        placeholder="company"
                    />
                    <FormField
                        name="message"
                        textarea={true}
                        placeholder="what can we do for you ?"
                    />
                    <button type="submit">Send</button>
                </Form>
            </Formik>

        </div >
    );
}

export default ContactForm;