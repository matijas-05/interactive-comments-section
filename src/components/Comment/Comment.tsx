import Votes from "./Votes";
import ButtonSecondary from "../General/ButtonSecondary";
import CommentInfo from "./CommentInfo";
import styles from "./Comment.module.scss"

interface Props {
	userName: string,
	profilePicture: string,
	date: string,
	message: string,
	votes: number,
	children?: React.ReactNode
}
function Comment(props: Props) {
	return (
		<div className="f-col g-1">
			<div className={`${styles["comment"]} f-col`}>
				<CommentInfo userName={props.userName} profilePicture={props.profilePicture} date={props.date} />
				<p>{props.message}</p>
				<div className="left-right">
					<Votes initialVotes={props.votes} />
					<ButtonSecondary iconSrc="/src/assets/images/icon-reply.svg" text="Reply" onClick={() => console.log("reply")} />
				</div>
			</div>
			<div className={`${styles["replies"]} f-col g-1`} style={props.children === undefined ? {display: "none"} : {}}>
				{props.children}
			</div>
		</div>
	);
}

export default Comment;
