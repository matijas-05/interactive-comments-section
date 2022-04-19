import PopupModal from "../General/Modals/PopupModal";

interface Props {
	isOpen: boolean,
	onRequestClose: () => void
}
function LogInModal(props: Props) {
	return (
		<PopupModal
			bodyOpenClassName="LogInModal__Body"
			portalClassName="LogInModalPortal"
			isOpen={props.isOpen}
			onRequestClose={props.onRequestClose}
		>
			<h1>Log In</h1>
		</PopupModal>
	);
}

export default LogInModal;