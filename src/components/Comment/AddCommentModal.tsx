import React, { useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';
import ButtonPrimary from '../General/ButtonPrimary'
import ButtonSecondary from '../General/ButtonSecondary';
import TextareaAutosize from "react-textarea-autosize";

import userImg from "../../assets/images/avatars/image-juliusomo.webp";
import styles from "./AddCommentModal.module.scss";

// Overrite default overlay styles
ReactModal.defaultStyles.overlay = {}

interface Props {
	modalState: boolean,
	closeModal: () => void,
	parent: HTMLElement
}
function AddCommentModal(props: Props) {
	const inputRef = useRef<HTMLTextAreaElement>(null);

	// Hide modal containers when not in use to remove whitespace
	useEffect(() => {
		const portal = document.querySelector(".AddCommentModalPortal") as HTMLDivElement;

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
			className={styles["AddCommentModal__Content"]}
			bodyOpenClassName="AddCommentModal__Body"
			portalClassName="AddCommentModalPortal"
			overlayClassName={styles["AddCommentModal__Overlay"]}
			contentLabel="Add comment" ariaHideApp={false}
			isOpen={props.modalState} shouldCloseOnEsc={true}
			onRequestClose={props.closeModal}
			onAfterOpen={() => {
				const commentInput = inputRef.current!;
				const y = commentInput.getBoundingClientRect().top + window.scrollY;
				if (y > window.visualViewport.height) window.scrollTo({ top: y, behavior: "smooth" });
			}}
			parentSelector={() => props.parent}
		>
			<div className="f-col g-1 card">
				<TextareaAutosize ref={inputRef} placeholder="Add a comment..." autoFocus></TextareaAutosize>
				<div className="left-right">
					<img className="profile-pic" src={userImg} alt="" />
					<div className="f-center g-1-5">
						<ButtonSecondary onClick={props.closeModal} noHoverEffect={true}>
							<p className="hover-underline">Cancel</p>
						</ButtonSecondary>
						<ButtonPrimary className="bg-purple pad-1-2" onClick={props.closeModal}>SEND</ButtonPrimary>
					</div>
				</div>
			</div>
		</ReactModal>
	)
}

export default AddCommentModal