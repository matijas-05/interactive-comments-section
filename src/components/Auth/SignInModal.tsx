import PopupModal from "@/components/General/Modals/PopupModal";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import styles from "./SignInModal.module.scss";

interface Props {
	isOpen: boolean,
	onRequestClose: () => void
}
function SignInModal(props: Props) {
	return (
		<PopupModal
			className={`${styles["SignInModal"]} f-center f-col g-1 card`}
			isOpen={props.isOpen}
			onRequestClose={props.onRequestClose}
			contentLabel="Sign in"
		>
			<h1>Sign in</h1>
			<hr className="horizontal-separator" />

			<form className={`${styles["sign-in-form"]} f-col`}>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" />

				<label htmlFor="password">Password:</label>
				<input type="password" id="password" />

				<ButtonPrimary className="bg-purple" type="submit" onClick={() => console.log("submit")}>Sign in</ButtonPrimary>
			</form>
		</PopupModal>
	);
}

export default SignInModal;