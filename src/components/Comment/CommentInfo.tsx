import { UserData } from "@/firebase";
import { useUserStore } from "@/store";
import ProfilePicture from "@/components/General/ProfilePicture";
import styles from "./CommentInfo.module.scss";

interface Props {
	user: UserData;
	date: string;
	edited: boolean;
}
function CommentInfo(props: Props) {
	const store = useUserStore();

	return (
		<div className={`${styles["comment-info"]} f-ai-c g-1`}>
			<ProfilePicture src={props.user.profilePictureDownloadURL} />
			<p
				className={`${styles["user-name"]} ${
					props.user.uid === store.currentUser?.uid && styles["current-user"]
				} f-ai-c`}
			>
				{props.user.userName}
			</p>
			<p className={styles["date"]}>
				{props.date}
				{props.edited && <span className="text-info"> (edited)</span>}
			</p>
		</div>
	);
}

export default CommentInfo;
