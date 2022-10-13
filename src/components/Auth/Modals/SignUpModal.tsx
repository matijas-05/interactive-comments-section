import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import sleep from "sleep-promise";

import { signUpUser } from "@/firebase";
import PopupModal from "@/components/General/Modals/PopupModal";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import FormInput from "@/components/Auth/FormInput";
import LoadingDots from "@/components/General/LoadingDots";
import styles from "./SignUpModal.module.scss";

interface Inputs {
	email: string;
	userName: string;
	profilePicture: FileList | null;
	password: string;
	repeatPassword: string;
}
interface Props {
	isOpen: boolean;
	onRequestClose: () => void;
}

function SignUpModal(props: Props) {
	const {
		register,
		watch,
		formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
		handleSubmit,
		setError,
		reset
	} = useForm<Inputs>({ mode: "onChange" });

	async function signUp(data: Inputs) {
		await signUpUser(
			data.email,
			data.userName,
			data.profilePicture ? data.profilePicture[0] : null,
			data.password,
			async () => {
				await sleep(500);
				props.onRequestClose();
				await sleep(200);
				reset();
			},
			error => {
				if (error.code === "auth/email-already-in-use") {
					setError("email", { type: "manual", message: "Email is already in use!" }, { shouldFocus: true });
				}
			}
		);
	}

	return (
		<PopupModal
			className="SignUpModal f-center f-col g-1 card"
			contentLabel="Sign up"
			isOpen={props.isOpen}
			shouldCloseOnEsc={false}
			shouldCloseOnOverlayClick={!isSubmitting}
			onRequestClose={() => props.onRequestClose()}
		>
			<h1>Sign up</h1>
			<hr className="horizontal-separator" />

			<form
				className={`${styles["sign-up-form"]} f-col g-1-5`}
				onSubmit={handleSubmit(async data => await signUp(data))}
			>
				<FormInput>
					<label htmlFor="email">Email:</label>
					<input
						className={errors.email && "invalid-input"}
						type="email"
						id="email"
						inputMode="email"
						placeholder="example@domain.com"
						{...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
					/>
					<ErrorMessage
						errors={errors}
						name="email"
						render={error =>
							error.message ? (
								<span className="error">{error.message}</span>
							) : (
								<span className="error">Email must be valid!</span>
							)
						}
					/>
				</FormInput>

				<FormInput>
					<label htmlFor="username">Username:</label>
					<input
						className={errors.userName && "invalid-input"}
						type="text"
						id="username"
						placeholder="user123"
						{...register("userName", {
							required: true,
							pattern: /^(?=.{4,20}$)(?![-_.])(?!.*[-_.]{2})[a-zA-Z0-9-._]+(?<![-_.])$/
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="userName"
						render={() => (
							<span className="error">
								Username must be between 3 and 20 characters and must not contain special characters
								except for _ and -
							</span>
						)}
					/>
				</FormInput>

				<FormInput>
					<label htmlFor="profile-picture">
						Profile picture <span className="text-info">(optional)</span>:
					</label>
					<input
						className={errors.profilePicture && "invalid-input"}
						type="file"
						accept="image/*"
						id="profile-picture"
						{...register("profilePicture")}
					/>
				</FormInput>

				<FormInput>
					<label htmlFor="password">Password:</label>
					<input
						className={errors.password && "invalid-input"}
						type="password"
						id="password"
						{...register("password", {
							required: true,
							pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="password"
						render={() => (
							<span className="error">
								Password must be at least 8 characters long, contain at least one uppercase letter, one
								lowercase letter and one number!
							</span>
						)}
					/>
				</FormInput>

				<FormInput>
					<label htmlFor="repeat-password">Repeat password:</label>
					<input
						className={errors.repeatPassword && "invalid-input"}
						type="password"
						id="repeat-password"
						{...register("repeatPassword", {
							required: true,
							validate: value => value === watch("password")
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="repeatPassword"
						render={() => <span className="error">Passwords must match!</span>}
					/>
				</FormInput>

				<ButtonPrimary
					className="bg-purple"
					type="submit"
					disabled={!isValid || isSubmitting || isSubmitSuccessful}
					faIcon={isSubmitSuccessful ? faCheck : undefined}
				>
					<LoadingDots enabled={isSubmitting} disabledMessage={"Sign up"} />
				</ButtonPrimary>
			</form>
		</PopupModal>
	);
}

export default SignUpModal;
