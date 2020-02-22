/*
*
*
* Contact form
*
*/


import React, { Component } from 'react';
import './styles.sass';
import { observer, inject} from 'mobx-react'
import { Formik, Form} from 'formik';
import FormField from 'app/components/FormField'
import * as Yup from 'yup'
import SubmitButton from '../SubmitButton'

@inject('services')
export default class ContactForm extends Component{
    
    // for submit handler
    submit = async (values,{resetForm}) => {
        console.log('submit');
        var res = await this.props.services.submitInquiry(values);
        alert(res);
        resetForm();
        return true;
    }
    

    render(){
        return (
            <div id="contactForm" className={this.props.className}>
                {/* Formik HOC */}
                <Formik
                    initialValues={{
                        fullname: '',
                        email: '',
                        company: '',
                        message: ''
                    }}
                    // Yup validation schema and error messages
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
                    onSubmit={this.submit}
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
                            validate={true}      // this field is highlighted when the input is valid
                        />
                        <FormField
                            name="company"
                            type="text"
                            placeholder="company"
                        />
                        <FormField
                            name="message"
                            textarea={true}     // this prop renders a textarea
                            placeholder="what can we do for you ?"
                        />
                        <SubmitButton />
                    </Form>
                </Formik>
    
            </div >
        );
    }
}

