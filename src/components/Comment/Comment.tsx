import React from "react";
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
	children?: React.ReactNode,
	parent?: Comment
}
class Comment extends React.Component<Props> {
	private repliesRef: React.RefObject<HTMLDivElement> = React.createRef();

	constructor(props: Props) {
		super(props);
		this.repliesRef = React.createRef();
	}

	render() {
		const childrenWithProps = React.Children.map(this.props.children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, { parent: this });
			}
			return child;
		});

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
										<ButtonSecondary className="text-red" iconSrc={iconDelete} onClick={this.props.openDeleteCommentModal}>
											Delete
										</ButtonSecondary>
										<ButtonSecondary className="text-purple" iconSrc={iconEdit} onClick={() => console.log("edit")}>
											Edit
										</ButtonSecondary>
									</div>
								) :
								(
									<ButtonSecondary className="text-purple" iconSrc={iconReply} onClick={() => this.props.openReplyModal(this.repliesRef.current!)}>
										Reply
									</ButtonSecondary>
								)
						}
					</div>
				</div>

				<div ref={this.repliesRef} className={`${styles["replies"]} f-col g-1`}>
					{childrenWithProps}
				</div>
			</div>
		);
	};
}
Comment.contextType = CurrentUser;

export default Comment;
