import React from 'react'
import ButtonPrimary from '../General/ButtonPrimary'
import userImg from "../../assets/images/avatars/image-juliusomo.webp";
import styles from "./AddComment.module.scss";

function AddComment() {
	return (
		<div className="f-col g-1 card">
			<textarea className={`${styles["input"]}`} name="commentText" placeholder="Add a comment..." rows={5}></textarea>
			<div className="left-right">
				<img className="profile-pic" src={userImg} alt="" />
				<ButtonPrimary className="bg-purple pad-1-2" onClick={() => console.log("send comment")}>
					SEND
				</ButtonPrimary>
			</div>
		</div>
	)
}

export default AddComment