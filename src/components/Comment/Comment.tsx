import React, { Children } from "react";
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
	openReplyModal: (ref: HTMLDivElement) => void,
	openDeleteCommentModal: () => void,
	children?: any,
	parent?: Comment
}
class Comment extends React.Component<Props> {
	private repliesRef: React.RefObject<HTMLDivElement> = React.createRef();

	constructor(props: Props) {
		super(props);
		this.repliesRef = React.createRef();
	}
	
	render() {
		const replyingTo = this.props.parent?.props;
		const currentUser = this.context;

		return (
			<div className="f-col g-1 hide-empty">
				<div className={`${styles["comment"]} f-col card`}>
					<CommentInfo userName={this.props.userName} profilePicture={this.props.profilePicture} date={this.props.date} />

					<p>
						{replyingTo !== undefined && <span className="text-purple">@{replyingTo.userName} </span>}
						{this.props.message}
					</p>

					<div className="left-right">
						<Votes initialVotes={this.props.votes} />
						{
							this.props.userName === currentUser ?
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
									<ButtonSecondary iconSrc={iconReply} onClick={() => this.props.openReplyModal(this.repliesRef.current!)}>
										<span className="text-purple">Reply</span>
									</ButtonSecondary>
								)
						}
					</div>
				</div>

				<div ref={this.repliesRef} className={`${styles["replies"]} f-col g-1`}>
					{this.props.children ? React.cloneElement(this.props.children as React.ReactElement<any>, { parent: this }) : null}
				</div>
			</div>
		);
	};
}
Comment.contextType = CurrentUser;

export default Comment;
