import React from "react";
import styles from "./FormInput.module.scss";

interface Props {
	children: React.ReactNode,
	row?: boolean,
}
function FormInput(props: Props) {
	return (
		<div className={`${styles["form-input"]} ${!props.row ? "f-col" : "f-ai-c"}`}>
			{props.children}
		</div>
	);
}

export default FormInput;