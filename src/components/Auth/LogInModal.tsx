import PopupModal from "@/components/General/Modals/PopupModal";

interface Props {
	isOpen: boolean,
	onRequestClose: () => void
}
function LogInModal(props: Props) {
	return (
		<PopupModal
			isOpen={props.isOpen}
			onRequestClose={props.onRequestClose}
			contentLabel="Log in"
		>
			<h1>Log in</h1>
		</PopupModal>
	);
}

export default LogInModal;