import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import PopupModal from "@/components/General/Modals/PopupModal";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import FormInput from "@/components/Auth/FormInput";
import styles from "./SignUpModal.module.scss";

interface Inputs {
	email: string,
	userName: string,
	password: string,
	repeatPassword: string,
}
interface Props {
	isOpen: boolean,
	onRequestClose: () => void
}
function SignUpModal(props: Props) {
	const { register, watch, formState: { errors, isValid }, handleSubmit } = useForm<Inputs>({ mode: "onChange" });

	return (
		<PopupModal
			className={`SignUpModal f-center f-col g-1 card`}
			isOpen={props.isOpen} shouldCloseOnEsc={false}
			onRequestClose={() => { props.onRequestClose(); }}
			contentLabel="Sign up"
		>
			<h1>Sign up</h1>
			<hr className="horizontal-separator" />

			<form
				className={`${styles["sign-up-form"]} f-col g-1-5`}
				onSubmit={handleSubmit(data => console.log("submitting", data))}
			>
				<FormInput>
					<label htmlFor="email">Email:</label>
					<input
						className={errors.email && "invalid-input"}
						type="email" id="email" inputMode="email"
						placeholder="example@domain.com"
						{...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
					/>
					<ErrorMessage
						errors={errors} name="email"
						render={() => <span className="error">Email must be valid!</span>}
					/>
				</FormInput>

				<FormInput>
					<label htmlFor="username">Username:</label>
					<input
						className={errors.userName && "invalid-input"}
						type="text" id="username" placeholder="user123"
						{...register("userName", { required: true, minLength: 3, maxLength: 20 })}
					/>
					<ErrorMessage
						errors={errors} name="userName"
						render={() => <span className="error">Username must be between 3 and 20 characters!</span>}
					/>
				</FormInput>

				<FormInput>
					<label htmlFor="password">Password:</label>
					<input
						className={errors.password && "invalid-input"}
						type="password" id="password"
						{...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/ })}
					/>
					<ErrorMessage
						errors={errors} name="password"
						render={() => <span className="error">Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number!</span>}
					/>
				</FormInput>

				<FormInput>
					<label htmlFor="password">Repeat password:</label>
					<input
						className={errors.repeatPassword && "invalid-input"}
						type="password" id="repeat-password"
						{...register("repeatPassword", { required: true, validate: value => value === watch("password") })}
					/>
					<ErrorMessage
						errors={errors} name="repeatPassword"
						render={() => <span className="error">Passwords must match!</span>}
					/>
				</FormInput>

				<ButtonPrimary className={`bg-purple`} type="submit" disabled={!isValid}>Sign up</ButtonPrimary>
			</form>
		</PopupModal>
	);
}

export default SignUpModal;