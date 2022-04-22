import { useEffect, useRef, useState } from "react";
import { useValidateEmail } from "@/components/Auth/ValidateInput";
import PopupModal from "@/components/General/Modals/PopupModal";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import FormInput from "@/components/General/FormInput";
import styles from "./SignUpModal.module.scss";

interface Props {
	isOpen: boolean,
	onRequestClose: () => void
}
function SignUpModal(props: Props) {
	const [email, setEmail] = useState("");
	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		setIsFormValid(formRef.current?.querySelector(".invalid-input") === null);
	});

	function reset() {
		setTimeout(() => {
			setEmail("");
		}, 200);
	}

	return (
		<PopupModal
			className={`SignUpModal f-center f-col g-1 card`}
			isOpen={props.isOpen}
			onRequestClose={() => { props.onRequestClose(); reset(); }}
			contentLabel="Sign up"
		>
			<h1>Sign up</h1>
			<hr className="horizontal-separator" />

			<form ref={formRef} className={`${styles["sign-up-form"]} f-col g-1-5`}>
				<FormInput>
					<label htmlFor="email">Email:</label>
					<input
						className={!useValidateEmail(email) ? "invalid-input" : undefined}
						type="email" id="email" inputMode="email"
						value={email} onChange={e => setEmail(e.target.value)} placeholder="example@domain.com" autoFocus
					/>
				</FormInput>

				<FormInput>
					<label htmlFor="username">Username:</label>
					<input type="text" id="username" placeholder="user123" />
				</FormInput>

				<FormInput>
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" />
				</FormInput>

				<FormInput>
					<label htmlFor="password">Repeat password:</label>
					<input type="password" id="repeat-password" />
				</FormInput>

				<ButtonPrimary className={`bg-purple ${!isFormValid && "disabled"}`} type="submit">Sign up</ButtonPrimary>
			</form>
		</PopupModal>
	);
}

export default SignUpModal;