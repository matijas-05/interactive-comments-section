import { useEffect, useRef } from "react";
import ReactModal from "react-modal";
import ButtonPrimary from "../General/ButtonPrimary";
import ButtonSecondary from "../General/ButtonSecondary";
import TextareaAutosize from "react-textarea-autosize";
import ProfilePicture from "../General/ProfilePicture";

import userImg from "/src/assets/images/avatars/image-juliusomo.webp";

// Overrite default overlay styles
ReactModal.defaultStyles.overlay = {};
ReactModal.defaultStyles.content = {};

interface Props {
	modalState: boolean,
	onSendMessage: () => void,
	onCancel: () => void,
	parent: HTMLElement,
	userName: string
}
function AddCommentModal(props: Props) {
	const inputRef = useRef<HTMLTextAreaElement>(null);

	// Hide modal containers when not in use to remove whitespace
	useEffect(() => {
		const portal = document.querySelector(".ReplyModalPortal") as HTMLDivElement;

		if (props.modalState) {
			portal!.style.removeProperty("display");
			portal!.parentElement?.style.removeProperty("display");
		}
		else {
			portal!.style.setProperty("display", "none");
			if (portal!.parentElement?.childElementCount === 1)
				portal!.parentElement?.style.setProperty("display", "none");
		}
	});

	return (
		<ReactModal
			bodyOpenClassName="ReplyModal__Body"
			portalClassName="ReplyModalPortal"
			contentLabel="Reply to a comment" ariaHideApp={false}
			isOpen={props.modalState} shouldCloseOnEsc={true}
			onAfterOpen={() => {
				// Focus on input
				const commentInput = inputRef.current!;
				const y = commentInput.getBoundingClientRect().top + window.scrollY;
				if (y > window.visualViewport.height) window.scrollTo({ top: y, behavior: "smooth" });

				// Put cursor at the end of the text
				const textArea = inputRef.current!;
				const cursorPos = textArea.selectionEnd + textArea.value.length;
				textArea.selectionStart = cursorPos;
				textArea.selectionEnd = cursorPos;
				textArea.focus();
			}}
			parentSelector={() => props.parent}
		>
			<div className="f-col g-1 card">
				<TextareaAutosize ref={inputRef} placeholder="Add a comment..." defaultValue={`@${props.userName} `} autoFocus></TextareaAutosize>
				<div className="left-right">
					<ProfilePicture src={userImg} />
					<div className="f-center g-1-5">
						<ButtonSecondary onClick={props.onCancel} noHoverEffect={true}>
							<p className="hover-underline">Cancel</p>
						</ButtonSecondary>
						<ButtonPrimary className="bg-purple pad-1-2" onClick={() => { props.onSendMessage(); props.onCancel(); }}>SEND</ButtonPrimary>
					</div>
				</div>
			</div>
		</ReactModal>
	);
}

export default AddCommentModal;