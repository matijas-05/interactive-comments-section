import ReactModal from "react-modal";
import ButtonPrimary from "../General/Buttons/ButtonPrimary";
import TextareaAutosize from "react-textarea-autosize";
import ProfilePicture from "../General/ProfilePicture";

import userImg from "/src/assets/images/avatars/image-juliusomo.webp";

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
			parentSelector={() => document.querySelector(".comments")!}
			style={{ content: { outline: "none" } }}
		>
			<div className="f-col g-1 card">
				<TextareaAutosize placeholder="Add a comment..."></TextareaAutosize>
				<div className="left-right">
					<ProfilePicture src={userImg} />
					<ButtonPrimary className="bg-purple pad-1-2" onClick={props.onSendMessage}>SEND</ButtonPrimary>
				</div>
			</div>
		</ReactModal>
	);
}

export default AddCommentModal;