import { useRef, useState } from "react";
import ReactModal from "react-modal";
import { Timestamp } from "firebase/firestore";
import TextareaAutosize from "react-textarea-autosize";
import { addComment, getCurrentUser } from "@/firebase";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import ProfilePicture from "@/components/General/ProfilePicture";

// Overwrite default overlay styles
ReactModal.defaultStyles.overlay = {};
ReactModal.defaultStyles.content = {};

function AddCommentModal() {
	const currentUser = getCurrentUser();
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const [commentContent, setCommentContent] = useState("");
	function handleAddComment() {
		addComment(commentContent, Timestamp.fromDate(new Date()));

		textAreaRef.current!.value = "";
		setCommentContent("");
	}

	if (!currentUser) return null;

	return (
		<ReactModal
			bodyOpenClassName="AddCommentModal__Body"
			portalClassName="AddCommentModalPortal"
			contentLabel="Add comment"
			ariaHideApp={false}
			isOpen={true}
			parentSelector={() => document.querySelector(".add-comment-modal")!}
			style={{ content: { outline: "none" } }}
		>
			<div className="f-col g-1 card">
				<TextareaAutosize
					ref={textAreaRef}
					onChange={e => setCommentContent(e.target.value)}
					placeholder="Add a comment..."
				/>
				<div className="left-right">
					<ProfilePicture src={currentUser.profilePictureDownloadURL} />
					<ButtonPrimary
						className="bg-purple pad-1-2"
						disabled={commentContent === ""}
						onClick={handleAddComment}
					>
						SEND
					</ButtonPrimary>
				</div>
			</div>
		</ReactModal>
	);
}

export default AddCommentModal;
