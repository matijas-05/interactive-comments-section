import ReactModal from "react-modal";
import ButtonPrimary from "../General/ButtonPrimary";
import TextareaAutosize from "react-textarea-autosize";

import userImg from "../../assets/images/avatars/image-juliusomo.webp";

// Overrite default overlay styles
ReactModal.defaultStyles.overlay = {};
ReactModal.defaultStyles.content = {};

interface Props {
	onSendMessage: () => void
}
function AddCommentModal(props: Props) {
	return (
		<ReactModal
			bodyOpenClassName="AddCommentModal__Body"
			portalClassName="AddCommentModalPortal"
			contentLabel="Add comment" ariaHideApp={false}
			isOpen={true}
			parentSelector={() => document.getElementById("root")!}
		>
			<div className="f-col g-1 card">
				<TextareaAutosize placeholder="Add a comment..."></TextareaAutosize>
				<div className="left-right">
					<img className="profile-pic" src={userImg} alt="" />
					<ButtonPrimary className="bg-purple pad-1-2" onClick={props.onSendMessage}>SEND</ButtonPrimary>
				</div>
			</div>
		</ReactModal>
	);
}

export default AddCommentModal;