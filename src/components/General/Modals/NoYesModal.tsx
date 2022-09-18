import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import PopupModal from "./PopupModal";
import styles from "./NoYesModal.module.scss";

interface Props {
	header: string;
	message: string;
	noText: string;
	yesText: string;
	isOpen: boolean;
	onNoClicked: () => void;
	onYesClicked: () => void;
}
function NoYesModal(props: Props) {
	return (
		<PopupModal
			bodyOpenClassName="NoYesModal__Body"
			portalClassName="NoYesPortal"
			className={`${styles["NoYesModal__Content"]} f-col g-1 card`}
			isOpen={props.isOpen}
			onRequestClose={props.onNoClicked} // Choose no when cancelling modal (esc or overlay click)
			contentLabel={props.header}
		>
			<h1>{props.header}</h1>
			<p>{props.message}</p>
			<div className="f-center g-1">
				<ButtonPrimary className="f-1" onClick={props.onNoClicked}>
					{props.noText}
				</ButtonPrimary>
				<ButtonPrimary className="f-1 bg-red" onClick={props.onYesClicked}>
					{props.yesText}
				</ButtonPrimary>
			</div>
		</PopupModal>
	);
}

export default NoYesModal;
