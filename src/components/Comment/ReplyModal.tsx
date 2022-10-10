import { useRef, useState } from "react";
import ReactModal from "react-modal";
import TextareaAutosize from "react-textarea-autosize";
import { Timestamp } from "firebase/firestore";
import { addReply, getCurrentUser, subscribeFirebase, unsubscribeFirebase } from "@/firebase";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import ButtonSecondary from "@/components/General/Buttons/ButtonSecondary";
import ProfilePicture from "@/components/General/ProfilePicture";

// Overwrite default overlay styles
ReactModal.defaultStyles.overlay = {};
ReactModal.defaultStyles.content = {};

interface Props {
	isOpen: boolean;
	onCancel: () => void;
	parent: HTMLElement;
	parentCommentID: string;
	userName: string;
}
function ReplyModal(props: Props) {
	const currentUser = getCurrentUser();

	const inputRef = useRef<HTMLTextAreaElement>(null);
	const [replyContent, setReplyContent] = useState("");

	function handleReply() {
		(async () => {
			unsubscribeFirebase();
			await addReply(props.parentCommentID, replyContent, Timestamp.fromDate(new Date()));
			subscribeFirebase();

			const listener = () => {
				props.onCancel();
				setReplyContent("");
				window.removeEventListener("onFirebaseUpdate", listener);
			};
			window.addEventListener("onFirebaseUpdate", listener);
		})();
	}

	if (!currentUser) return null;

	return (
		<ReactModal
			bodyOpenClassName="ReplyModal__Body"
			portalClassName="ReplyModalPortal"
			contentLabel="Reply to a comment"
			ariaHideApp={false}
			isOpen={props.isOpen}
			shouldCloseOnEsc={true}
			onAfterOpen={() => {
				// Focus on input
				const textArea = inputRef.current!;

				// Put cursor at the end of the text
				const cursorPos = textArea.selectionEnd + textArea.value.length;
				textArea.selectionStart = cursorPos;
				textArea.selectionEnd = cursorPos;
			}}
			parentSelector={() => props.parent}
		>
			<div className="f-col g-1 card">
				<TextareaAutosize
					ref={inputRef}
					placeholder="Add a comment..."
					onChange={e => setReplyContent(e.target.value)}
					autoFocus
				/>
				<div className="left-right">
					<ProfilePicture src={currentUser?.profilePictureDownloadURL ?? ""} />
					<div className="f-center g-1-5">
						<ButtonSecondary onClick={props.onCancel} noHoverEffect={true}>
							<p className="hover-underline">Cancel</p>
						</ButtonSecondary>
						<ButtonPrimary
							className="bg-purple pad-1-2"
							disabled={replyContent === ""}
							onClick={handleReply}
						>
							SEND
						</ButtonPrimary>
					</div>
				</div>
			</div>
		</ReactModal>
	);
}

export default ReplyModal;
