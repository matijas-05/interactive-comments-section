import { useState } from "react";
import ReactModal from "react-modal";
import { Timestamp } from "firebase/firestore";
import { getCurrentUser, addComment } from "@/firebase";
import TextareaAutosize from "react-textarea-autosize";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import ProfilePicture from "@/components/General/ProfilePicture";

// Overwrite default overlay styles
ReactModal.defaultStyles.overlay = {};
ReactModal.defaultStyles.content = {};

function AddCommentModal() {
	const [commentContent, setCommentContent] = useState("");

	async function handleAddComment() {
		await addComment(
			getCurrentUser()!.uid,
			commentContent,
			Timestamp.fromDate(new Date())
		);
	}

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
					<TextareaAutosize onChange={e => setCommentContent(e.currentTarget.value)} placeholder="Add a comment..." />
					<div className="left-right">
						<ProfilePicture src={getCurrentUser()!.profilePictureDownloadURL} />
						<ButtonPrimary className="bg-purple pad-1-2" onClick={async () => await handleAddComment()}>SEND</ButtonPrimary>
					</div>
				</div>
			</ReactModal>
			: null
	);
}

export default AddCommentModal;