import ButtonPrimary from "../Buttons/ButtonPrimary";
import PopupModal from "./PopupModal";

interface Props {
	header: string,
	message: string,
	noText: string,
	yesText: string,
	modalState: boolean,
	onNoClicked: () => void,
	onYesClicked: () => void
}
function NoYesModal(props: Props) {
	return (
		<PopupModal
			bodyOpenClassName="NoYesModal__Body"
			portalClassName="NoYesPortal"
			isOpen={props.modalState}
			onRequestClose={props.onNoClicked}	// Choose no when cancelling modal (esc or overlay click)
			contentLabel={props.header}
		>
			<h1>{props.header}</h1>
			<p>{props.message}</p>
			<div className="f-center g-1">
				<ButtonPrimary className="f-1" onClick={props.onYesClicked}>{props.noText}</ButtonPrimary>
				<ButtonPrimary className="f-1 bg-red" onClick={props.onNoClicked}>{props.yesText}</ButtonPrimary>
			</div>
		</PopupModal>
	);
}

export default NoYesModal;