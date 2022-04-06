import { useContext } from "react";
import Votes from "./Votes";
import ButtonSecondary from "../General/ButtonSecondary";
import CommentInfo from "./CommentInfo";
import { CurrentUser } from "../../context";
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
	const currentUser = useContext(CurrentUser);
	return (
		<div className="f-col g-1">
			<div className={`${styles["comment"]} f-col`}>
				<CommentInfo userName={props.userName} profilePicture={props.profilePicture} date={props.date} />
				<p>{props.message}</p>
				
				<div className="left-right">
					<Votes initialVotes={props.votes} />
					{props.userName === currentUser ?
						(
							<div className="f-ai-c g-1">
								<ButtonSecondary iconSrc="/src/assets/images/icon-delete.svg" onClick={() => console.log("delete")}>
									<span className="accent-red">Delete</span>
								</ButtonSecondary>
								<ButtonSecondary iconSrc="/src/assets/images/icon-edit.svg" onClick={() => console.log("edit")}>
									<span className="accent-purple">Edit</span>
								</ButtonSecondary>
							</div>
						) :
						(
							<ButtonSecondary iconSrc="/src/assets/images/icon-reply.svg" onClick={() => console.log("reply")}>
								<span className="accent-purple">Reply</span>
							</ButtonSecondary>
						)
					}
				</div>
			</div>
			<div className={`${styles["replies"]} f-col g-1`} style={props.children === undefined ? { display: "none" } : {}}>
				{props.children}
			</div>
		</div>
	);
}

export default Comment;
