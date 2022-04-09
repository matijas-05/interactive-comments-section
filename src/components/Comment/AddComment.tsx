import ReactModal from 'react-modal';
import ButtonPrimary from '../General/ButtonPrimary'
import userImg from "../../assets/images/avatars/image-juliusomo.webp";
import styles from "./AddComment.module.scss";

interface Props {
	modalState: boolean,
	// parent: HTMLElement,
	closeModal: () => void
}
function AddComment(props: Props) {
	return (
		<ReactModal
			className={styles["modal"]} overlayClassName={styles["overlay"]}
			contentLabel="Add comment" ariaHideApp={false}
			isOpen={props.modalState} onAfterOpen={() => {
				const commentInput = document.getElementById("comment-input")!;
				commentInput.focus()
				commentInput.scrollIntoView({ behavior: "smooth" });
			}}
			parentSelector={() => document.getElementById("root")!}
		>
			<div className="f-col g-1 card">
				<textarea className={`${styles["input"]}`} id="comment-input" placeholder="Add a comment..." rows={5}></textarea>
				<div className="left-right">
					<img className="profile-pic" src={userImg} alt="" />
					<ButtonPrimary className="bg-purple pad-1-2" onClick={props.closeModal}>
						SEND
					</ButtonPrimary>
				</div>
			</div>
		</ReactModal>
	)
}

export default AddComment