/*
 *
 *
 * Contact form submit button
 *
 *
 */

import React, { useEffect } from "react";
import "./styles.sass";
import { SvgSpinningBtn } from "app/components/SpinningBtn";
import send from "app/assets/images/getBack.svg";
import envoyer from "app/assets/images/bientot.svg";
import { useField, useFormikContext } from "formik";
import { observer, inject } from "mobx-react";

const SubmitButton = inject("viewStore")(
	observer(props => {
		let language = props.viewStore.language;
		// retreive the parent Formik Forms context
		let { isSubmitting, values } = useFormikContext();

		// observe values' changes and save them to the viewStore
		// this ensures that user inputs are not lost when he navigates away from /contact
		// TODO: move the this behavior to a seperate component since it has nothing to do with the submit Btn
		useEffect(
			_ => {
				props.viewStore.contactFormInit = values;
			},
			[values]
		);

		return (
			<button type="submit">
				<SvgSpinningBtn
					spinEn={send}
					spinFr={envoyer}
					text={language == "en" ? "Send" : "Envoyer"}
				/>
			</button>
		);
	})
);

export default SubmitButton;
