import { useState } from "react";
import ReactModal from "react-modal";
import { Timestamp } from "firebase/firestore";
import TextareaAutosize from "react-textarea-autosize";
import { addComment } from "@/firebase";
import { useStore } from "@/store";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import ProfilePicture from "@/components/General/ProfilePicture";

// Overwrite default overlay styles
ReactModal.defaultStyles.overlay = {};
ReactModal.defaultStyles.content = {};

function AddCommentModal() {
	const store = useStore();

	const [commentContent, setCommentContent] = useState("");
	async function handleAddComment() {
		await addComment(
			commentContent,
			Timestamp.fromDate(new Date())
		);
	}

	if (!store.currentUser)
		return null;

	return (
		<ReactModal
			bodyOpenClassName="AddCommentModal__Body"
			portalClassName="AddCommentModalPortal"
			contentLabel="Add comment" ariaHideApp={false}
			isOpen={true}
			parentSelector={() => document.querySelector(".add-comment-modal")!}
			style={{ content: { outline: "none" } }}
		>
			<div className="f-col g-1 card">
				<TextareaAutosize onChange={e => setCommentContent(e.target.value)} placeholder="Add a comment..." />
				<div className="left-right">
					<ProfilePicture src={store.currentUser.profilePictureDownloadURL} />
					<ButtonPrimary className="bg-purple pad-1-2" disabled={commentContent === ""} onClick={async () => await handleAddComment()}>SEND</ButtonPrimary>
				</div>
			</div>
		</ReactModal>
	);
}

export default AddCommentModal;