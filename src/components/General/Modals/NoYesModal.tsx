import ButtonPrimary from "../Buttons/ButtonPrimary";
import PopupModal from "./PopupModal";

interface Props {
	header: string,
	message: string,
	modalState: boolean,
	confirmModal: () => void,
	cancelModal: () => void
}
function NoYesModal(props: Props) {
	return (
		<PopupModal
			contentLabel="Delete comment"
			isOpen={props.modalState}
			onRequestClose={props.cancelModal}
		>
			<h1>{props.header}</h1>
			<p>{props.message}</p>
			<div className="f-center g-1">
				<ButtonPrimary className="f-1" onClick={props.cancelModal}>NO, CANCEL</ButtonPrimary>
				<ButtonPrimary className="f-1 bg-red" onClick={props.confirmModal}>YES, DELETE</ButtonPrimary>
			</div>
		</PopupModal>
	);
}

export default NoYesModal;