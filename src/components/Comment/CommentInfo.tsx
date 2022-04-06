import styles from "./CommentInfo.module.scss";

interface Props {
	userName: string,
	profilePicture: string,
	date: string
}
function CommentInfo(props: Props) {
	const currentUser = "juliusomo"; // TODO: Get from db
	return (
		<div className={`${styles["comment-info"]} f-ai-c g-1`}>
			<img src={props.profilePicture} alt="" />
			<p className={`${styles["user-name"]} ${props.userName === currentUser && styles["current-user"]} f-ai-c`}>{props.userName}</p>
			<p className={styles["date"]}>{props.date}</p>
		</div>
	);
}

export default CommentInfo;