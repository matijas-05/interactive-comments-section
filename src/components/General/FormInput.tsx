import React from "react";
import styles from "./FormInput.module.scss";

interface Props {
	children: React.ReactNode
}
function FormInput(props: Props) {
	return (
		<div className={`${styles["form-input"]} f-col`}>
			{props.children}
		</div>
	);
}

export default FormInput;