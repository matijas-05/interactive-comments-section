import { useRef, useState } from "react";
import ReactModal from "react-modal";
import { Timestamp } from "firebase/firestore";
import TextareaAutosize from "react-textarea-autosize";
import { addComment } from "@/firebase";
import { useUserStore } from "@/store";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import ProfilePicture from "@/components/General/ProfilePicture";

// Overwrite default overlay styles
ReactModal.defaultStyles.overlay = {};
ReactModal.defaultStyles.content = {};

function AddCommentModal() {
	const userStore = useUserStore();
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const [commentContent, setCommentContent] = useState("");
	async function handleAddComment() {
		const newComment = await addComment(commentContent, Timestamp.fromDate(new Date()));
		if (!newComment) {
			console.error("Error adding comment");
			return;
		}

		textAreaRef.current!.value = "";
		setCommentContent("");
	}

	if (!userStore.currentUser)
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
				<TextareaAutosize ref={textAreaRef} onChange={e => setCommentContent(e.target.value)} placeholder="Add a comment..." />
				<div className="left-right">
					<ProfilePicture src={userStore.currentUser.profilePictureDownloadURL} />
					<ButtonPrimary className="bg-purple pad-1-2" disabled={commentContent === ""} onClick={async () => await handleAddComment()}>SEND</ButtonPrimary>
				</div>
			</div>
		</ReactModal>
	);
}

export default AddCommentModal;