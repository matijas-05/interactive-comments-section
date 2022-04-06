import Votes from "./Votes";
import ButtonSecondary from "../General/ButtonSecondary";
import CommentInfo from "./CommentInfo";
import styles from "./Comment.module.scss"

interface Props {
	userName: string,
	profilePicture: string,
	date: string
}
function Comment(props: Props) {
	return (
		<div className={`${styles["comment"]} f-col`}>
			<CommentInfo userName={props.userName} profilePicture={props.profilePicture} date={props.date}/>
			<p>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</p>
			<div className="left-right">
				<Votes initialVotes={0} />
				<ButtonSecondary iconSrc="/src/assets/images/icon-reply.svg" text="Reply" onClick={() => console.log("reply")} />
			</div>
		</div>
	);
}

export default Comment;
