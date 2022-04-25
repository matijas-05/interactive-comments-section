import ReactModal from "react-modal";
import { getCurrentUser } from "@/firebase";
import TextareaAutosize from "react-textarea-autosize";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import ProfilePicture from "@/components/General/ProfilePicture";

// Overwrite default overlay styles
ReactModal.defaultStyles.overlay = {};
ReactModal.defaultStyles.content = {};

interface Props {
	onSendMessage: () => void
}
function AddCommentModal(props: Props) {
	return (
		getCurrentUser() ?
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
						<ProfilePicture src={getCurrentUser()!.profilePictureDownloadURL} />
						<ButtonPrimary className="bg-purple pad-1-2" onClick={props.onSendMessage}>SEND</ButtonPrimary>
					</div>
				</div>
			</ReactModal>
			: null
	);
}

export default AddCommentModal;