import { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import TextareaAutosize from "react-textarea-autosize";
import { Timestamp } from "firebase/firestore";
import { addReply } from "@/firebase";
import { useUserStore } from "@/store";
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
	const store = useUserStore();

	const inputRef = useRef<HTMLTextAreaElement>(null);
	const [replyContent, setReplyContent] = useState("");

	// Hide modal containers when not in use to remove whitespace
	useEffect(() => {
		const portal = document.querySelector(".ReplyModalPortal") as HTMLDivElement;

		if (!portal) return;

		if (props.isOpen) {
			portal.style.removeProperty("display");
			portal.parentElement?.style.removeProperty("display");
		} else {
			portal.style.setProperty("display", "none");
			if (portal.parentElement?.childElementCount === 1)
				portal.parentElement?.style.setProperty("display", "none");
		}
	});

	function handleReply() {
		(async () => await addReply(props.parentCommentID, replyContent, Timestamp.fromDate(new Date())))();
		props.onCancel();
	}

	if (!store.currentUser) return null;

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

				setReplyContent(`@${props.userName} `);
			}}
			parentSelector={() => props.parent}
		>
			<div className="f-col g-1 card">
				<TextareaAutosize
					ref={inputRef}
					placeholder="Add a comment..."
					defaultValue={`@${props.userName} `}
					onChange={e => setReplyContent(e.target.value)}
					autoFocus
				/>
				<div className="left-right">
					<ProfilePicture src={store.currentUser?.profilePictureDownloadURL ?? ""} />
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
