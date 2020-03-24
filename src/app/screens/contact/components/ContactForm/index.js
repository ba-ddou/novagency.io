/*
 *
 *
 * Contact form
 *
 */

import React, { useEffect } from "react";
import "./styles.sass";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";
import { Formik, Form, useFormikContext } from "formik";
import FormField from "app/components/FormField";
import * as Yup from "yup";
import SubmitButton from "../SubmitButton";
import FloatingMessage from "app/components/FloatingMessage";

const ContactForm = inject(
	"services",
	"viewStore"
)(
	observer(props => {
		let language = props.viewStore.language;
		// for submit handler
		let submit = async (values, { resetForm }) => {
			props.viewStore.splashScreen = 1.2;
			console.log("submit");
			var [res, err] = await props.services.submitInquiry(values);
			if (res) {
				props.viewStore.splashScreen = "fade";
				props.viewStore.floatingMessageContent = {
					text: res,
					type: "success"
				};
				setTimeout(() => {
					props.viewStore.floatingMessageContent = false;
				}, 5000);
				resetForm();
			} else {
				props.viewStore.splashScreen = "fade";
				props.viewStore.floatingMessageContent = {
					text: err,
					type: "error"
				};
				setTimeout(() => {
					props.viewStore.floatingMessageContent = false;
				}, 5000);
			}
			return true;
		};

		return (
			<div id="contactForm" className={props.className}>
				{/* Formik HOC */}
				<Formik
					// initialValues are retreived from the viewStore
					// where they're always up to date with the latest user inputs
					// even if the user navigates away from the contact page
					initialValues={{
						fullname: props.viewStore.contactFormInit.fullname,
						email: props.viewStore.contactFormInit.email,
						company: props.viewStore.contactFormInit.company,
						message: props.viewStore.contactFormInit.message
					}}
					// Yup validation schema and error messages
					validationSchema={Yup.object({
						fullname: Yup.string().required(
							language == "en" ? "Required" : "Obligatoire"
						),
						email: Yup.string()
							.email(
								language == "en"
									? "Invalid email address"
									: "Adresse non valide"
							)
							.required(
								language == "en" ? "Required" : "Obligatoire"
							),
						company: Yup.string(),
						message: Yup.string()
							.min(
								50,
								language == "en"
									? "Must be 50 characters or more"
									: "Doivent etre 50 characters ou plus"
							)
							.required(
								language == "en" ? "Required" : "Obligatoire"
							)
					})}
					onSubmit={submit}>
					<Form>
						<FormField
							name="fullname"
							type="text"
							placeholder={
								language == "en" ? "fullname" : "nom complet"
							}
						/>
						<FormField
							name="email"
							type="email"
							placeholder="email"
							validate={true} // this field is highlighted when the input is valid
						/>
						<FormField
							name="company"
							type="text"
							placeholder={
								language == "en" ? "company" : "entreprise"
							}
						/>
						<FormField
							name="message"
							textarea={true} // this prop renders a textarea
							placeholder={
								language == "en"
									? "what can we do for you ?"
									: "que pouvant nous faire pour vous ?"
							}
						/>
						<SubmitButton />
					</Form>
				</Formik>
				{props.viewStore.floatingMessageContent && (
					<FloatingMessage
						content={toJS(props.viewStore.floatingMessageContent)}
					/>
				)}
			</div>
		);
	})
);

export default ContactForm;
