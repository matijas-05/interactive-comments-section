import PopupModal from "@/components/General/Modals/PopupModal";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import styles from "./SignUpModal.module.scss";

interface Props {
	isOpen: boolean,
	onRequestClose: () => void
}
function SignUpModal(props: Props) {
	return (
		<PopupModal
			className={`SignUpModal f-center f-col g-1 card`}
			isOpen={props.isOpen}
			onRequestClose={props.onRequestClose}
			contentLabel="Sign up"
		>
			<h1>Sign up</h1>
			<hr className="horizontal-separator" />

			<form className={`${styles["sign-up-form"]} f-col`}>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" placeholder="example@domain.com" />

				<label htmlFor="username">Username:</label>
				<input type="text" id="username" placeholder="user123" />

				<label htmlFor="password">Password:</label>
				<input type="password" id="password" />

				<label htmlFor="password">Repeat password:</label>
				<input type="password" id="repeat-password" />

				<ButtonPrimary className="bg-purple" type="submit" onClick={() => console.log("submit")}>Sign up</ButtonPrimary>
			</form>
		</PopupModal>
	);
}

export default SignUpModal;