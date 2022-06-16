import { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import TextareaAutosize from "react-textarea-autosize";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import ButtonSecondary from "@/components/General/Buttons/ButtonSecondary";
import ProfilePicture from "@/components/General/ProfilePicture";

import userImg from "@/assets/images/avatars/image-juliusomo.webp";

// Overwrite default overlay styles
ReactModal.defaultStyles.overlay = {};
ReactModal.defaultStyles.content = {};

interface Props {
	isOpen: boolean,
	onCancel: () => void,
	parent: HTMLElement,
	userName: string
}
function AddCommentModal(props: Props) {
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const [replyContent, setReplyContent] = useState("");

	// Hide modal containers when not in use to remove whitespace
	useEffect(() => {
		const portal = document.querySelector(".ReplyModalPortal") as HTMLDivElement;

		if (props.isOpen) {
			portal.style.removeProperty("display");
			portal.parentElement?.style.removeProperty("display");
		}
		else {
			portal.style.setProperty("display", "none");
			if (portal.parentElement?.childElementCount === 1)
				portal.parentElement?.style.setProperty("display", "none");
		}
	});

	return (
		<ReactModal
			bodyOpenClassName="ReplyModal__Body"
			portalClassName="ReplyModalPortal"
			contentLabel="Reply to a comment" ariaHideApp={false}
			isOpen={props.isOpen} shouldCloseOnEsc={true}
			onAfterOpen={() => {
				// Focus on input
				const textArea = inputRef.current!;
				const y = textArea.getBoundingClientRect().top + window.scrollY;
				if (y > window.visualViewport.height) window.scrollTo({ top: y, behavior: "smooth" });

				// Put cursor at the end of the text
				const cursorPos = textArea.selectionEnd + textArea.value.length;
				textArea.selectionStart = cursorPos;
				textArea.selectionEnd = cursorPos;
				textArea.focus();

				setReplyContent(`@${props.userName} `);
			}}
			parentSelector={() => props.parent}
		>
			<div className="f-col g-1 card">
				<TextareaAutosize ref={inputRef} placeholder="Add a comment..." defaultValue={`@${props.userName} `} onChange={e => setReplyContent(e.target.value)} autoFocus />
				<div className="left-right">
					<ProfilePicture src={userImg} />
					<div className="f-center g-1-5">
						<ButtonSecondary onClick={props.onCancel} noHoverEffect={true}>
							<p className="hover-underline">Cancel</p>
						</ButtonSecondary>
						<ButtonPrimary className="bg-purple pad-1-2" disabled={replyContent === ""} onClick={() => console.log("replying")}>SEND</ButtonPrimary>
					</div>
				</div>
			</div>
		</ReactModal>
	);
}

export default AddCommentModal;