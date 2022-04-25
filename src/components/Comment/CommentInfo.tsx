import { getCurrentUser } from "@/firebase";
import ProfilePicture from "@/components/General/ProfilePicture";
import styles from "./CommentInfo.module.scss";

interface Props {
	userName: string,
	profilePicture: string,
	date: string
}
function CommentInfo(props: Props) {
	const currentUser = getCurrentUser()?.userName;
	return (
		<div className={`${styles["comment-info"]} f-ai-c g-1`}>
			<ProfilePicture src={props.profilePicture} />
			<p className={`${styles["user-name"]} ${props.userName === currentUser && styles["current-user"]} f-ai-c`}>{props.userName}</p>
			<p className={styles["date"]}>{props.date}</p>
		</div>
	);
}

export default CommentInfo;