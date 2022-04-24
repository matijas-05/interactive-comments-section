import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import sleep from "sleep-promise";
import { signInUser } from "@/firebase";
import PopupModal from "@/components/General/Modals/PopupModal";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import LoadingDots from "@/components/General/LoadingDots";
import FormInput from "@/components/Auth/FormInput";
import styles from "./SignInModal.module.scss";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface Inputs {
	email: string,
	password: string,
}
interface Props {
	isOpen: boolean,
	onRequestClose: () => void
}
function SignInModal(props: Props) {
	const { register, formState: { isValid, isSubmitting, isSubmitSuccessful, errors }, handleSubmit, setError, reset } = useForm<Inputs>({ mode: "onChange" });

	async function signIn(email: string, password: string) {
		await signInUser(email, password,
			async () => {
				await sleep(500);
				props.onRequestClose();
				await sleep(200);
				reset();
			},
			error => {
				if (error.code === "auth/user-not-found") {
					setError("email", { type: "manual", message: "Email is not found!" }, { shouldFocus: true });
				}
				else if (error.code === "auth/wrong-password") {
					setError("password", { type: "manual", message: "Password is incorrect!" }, { shouldFocus: true });
				}
			});
	}

	return (
		<PopupModal
			className={`SignInModal f-center f-col g-1 card`}
			isOpen={props.isOpen}
			onRequestClose={props.onRequestClose}
			contentLabel="Sign in"
		>
			<h1>Sign in</h1>
			<hr className="horizontal-separator" />

			<form className={`${styles["sign-in-form"]} f-col g-1-5`} onSubmit={handleSubmit(async data => signIn(data.email, data.password))}>
				<FormInput>
					<label htmlFor="email">Email:</label>
					<input
						className={errors.email && "invalid-input"}
						type="email" id="email" inputMode="email"
						{...register("email", { required: true })}
					/>
					<ErrorMessage errors={errors} name="email" render={() => <span className="error">{errors.email?.message}</span>} />
				</FormInput>

				<FormInput>
					<label htmlFor="password">Password:</label>
					<input
						className={errors.password && "invalid-input"}
						type="password" id="password"
						{...register("password", { required: true })}
					/>
					<ErrorMessage errors={errors} name="password" render={() => <span className="error">{errors.password?.message}</span>} />
				</FormInput>

				<ButtonPrimary
					className="bg-purple" type="submit" disabled={!isValid || isSubmitting || isSubmitSuccessful}
					faIcon={isSubmitSuccessful ? faCheck : undefined}
				>
					<span style={{ display: isSubmitting ? "none" : "inherit" }}>Sign in</span>
					<LoadingDots style={{ display: isSubmitting ? "inherit" : "none", padding: "0.2625rem 0" }} />
				</ButtonPrimary>
			</form>
		</PopupModal>
	);
}

export default SignInModal;