import React, { ReactNode, useContext } from "react";
import Votes from "./Votes";
import ButtonSecondary from "../General/ButtonSecondary";
import CommentInfo from "./CommentInfo";
import { CurrentUser } from "../../context";
import styles from "./Comment.module.scss"

import iconDelete from "/src/assets/images/icon-delete.svg";
import iconEdit from "/src/assets/images/icon-edit.svg";
import iconReply from "/src/assets/images/icon-reply.svg";

interface Props {
	userName: string,
	profilePicture: string,
	date: string,
	message: string,
	votes: number,
	openDeleteCommentModal: () => void,
	children?: React.ReactNode,
	parent?: Comment
}
class Comment extends React.Component<Props> {
	render() {
		const currentUser = this.context;
		const childrenWithProps = React.Children.map(this.props.children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, { parent: this });
			}
			return child;
		});
		const replyingTo = this.props.parent?.props;

		return (
			<div className="f-col g-1">
				<div className={`${styles["comment"]} f-col`}>
					<CommentInfo userName={this.props.userName} profilePicture={this.props.profilePicture} date={this.props.date} />

					<p>
						{replyingTo !== undefined && <span className="text-purple">@{replyingTo.userName} </span>}
						{this.props.message}
					</p>

					<div className="left-right">
						<Votes initialVotes={this.props.votes} />
						{this.props.userName === currentUser ?
							(
								<div className="f-ai-c g-1">
									<ButtonSecondary iconSrc={iconDelete} onClick={this.props.openDeleteCommentModal}>
										<span className="text-red">Delete</span>
									</ButtonSecondary>
									<ButtonSecondary iconSrc={iconEdit} onClick={() => console.log("edit")}>
										<span className="text-purple">Edit</span>
									</ButtonSecondary>
								</div>
							) :
							(
								<ButtonSecondary iconSrc={iconReply} onClick={() => console.log("reply")}>
									<span className="text-purple">Reply</span>
								</ButtonSecondary>
							)
						}
					</div>
				</div>

				<div className={`${styles["replies"]} f-col g-1`} style={this.props.children === undefined ? { display: "none" } : {}}>
					{childrenWithProps}
				</div>
			</div>
		);
	};
}
Comment.contextType = CurrentUser;

export default Comment;
