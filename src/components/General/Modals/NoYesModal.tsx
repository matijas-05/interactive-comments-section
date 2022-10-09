import { useState } from "react";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import PopupModal from "./PopupModal";
import LoadingDots from "@/components/General/LoadingDots";
import styles from "./NoYesModal.module.scss";

interface Props {
	header: string;
	message: string;
	noText: string;
	yesText: string;
	isOpen: boolean;
	usesPromise?: boolean;
	onNoClicked: () => void;
	onYesClicked: () => void | Promise<void>;
}
function NoYesModal(props: Props) {
	const [promisePending, setPromisePending] = useState(false);

	return (
		<PopupModal
			bodyOpenClassName="NoYesModal__Body"
			portalClassName="NoYesPortal"
			className={`${styles["NoYesModal__Content"]} f-col g-1 card`}
			isOpen={props.isOpen}
			shouldCloseOnEsc={!promisePending}
			shouldCloseOnOverlayClick={!promisePending}
			onRequestClose={props.onNoClicked} // Choose no when cancelling modal (esc or overlay click)
			contentLabel={props.header}
		>
			<h1>{props.header}</h1>
			<p>{props.message}</p>
			<div className="f-center g-1">
				<ButtonPrimary className="f-1" disabled={promisePending} onClick={props.onNoClicked}>
					{props.noText}
				</ButtonPrimary>
				<ButtonPrimary
					className="f-1 bg-red"
					disabled={promisePending}
					onClick={async () => {
						if (props.usesPromise) {
							setPromisePending(true);
							await props.onYesClicked();
							setPromisePending(false);
						} else {
							props.onYesClicked();
						}
					}}
				>
					<LoadingDots enabled={promisePending} disabledMessage={props.yesText} />
				</ButtonPrimary>
			</div>
		</PopupModal>
	);
}

export default NoYesModal;
