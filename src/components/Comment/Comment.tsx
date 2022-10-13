import React from "react";
import {
	downvoteComment,
	editComment,
	getCurrentUser,
	subscribeFirebase,
	unsubscribeFirebase,
	upvoteComment,
	UserData
} from "@/firebase";
import { Desktop, Mobile } from "@/components/General/MediaQueryComponents";
import Votes from "./Votes";
import CommentInfo from "./CommentInfo";
import CommentMessage from "./CommentMessage";
import CommentButtons from "./CommentButtons";
import styles from "./Comment.module.scss";

interface Props {
	id: string;
	user: UserData;
	date: string;
	edited: boolean;
	message: string;
	votes: number;
	openReplyModal: (ref: HTMLDivElement, userName: string, parentCommentID: string) => void;
	openDeleteCommentModal: (commentID: string) => void;
	children?: React.ReactNode;
	parent?: Comment;
	parentRef?: React.RefObject<HTMLDivElement>;
}
interface State {
	isEditing: boolean;
	editMessage: string;
}
class Comment extends React.Component<Props, State> {
	private readonly thisRef = React.createRef<HTMLDivElement>();
	private readonly repliesRef = React.createRef<HTMLDivElement>();

	constructor(props: Props) {
		super(props);

		this.state = { isEditing: false, editMessage: "" };
		this.thisRef = React.createRef();
		this.repliesRef = React.createRef();

		// Make 'this' keyword work in functions
		this.toggleEditing = this.toggleEditing.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleUpvote = this.handleUpvote.bind(this);
		this.handleDownvote = this.handleDownvote.bind(this);
	}

	private toggleEditing() {
		this.setState({ isEditing: !this.state.isEditing });
	}
	private handleEdit() {
		(async () => {
			unsubscribeFirebase();
			await editComment(this.props.id, this.state.editMessage);
			subscribeFirebase();

			const listener = () => {
				this.toggleEditing();
				window.removeEventListener("onFirebaseUpdate", listener);
			};
			window.addEventListener("onFirebaseUpdate", listener);
		})();
	}

	private handleUpvote() {
		upvoteComment(this.props.id, getCurrentUser()!.uid);
	}
	private handleDownvote() {
		downvoteComment(this.props.id, getCurrentUser()!.uid);
	}

	render() {
		const childrenWithProps = React.Children.map(this.props.children,
			child => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, { parent: this, parentRef: this.thisRef } as unknown as Props);
				}
				return child;
			});

		return (
			<div ref={this.thisRef} className="f-col g-1 hide-empty">
				<Mobile>
					<div className={"f-col g-1-25 card"}>
						<CommentInfo user={this.props.user} date={this.props.date} edited={this.props.edited} />
						<CommentMessage
							message={this.props.message}
							mention={this.props.parent?.props.user.userName}
							isEditing={this.state.isEditing}
							toggleEditing={this.toggleEditing}
							editMessageChanged={msg => this.setState({ editMessage: msg })}
							parentRef={this.props.parentRef}
						/>

						<div className="left-right f-span-y g-1">
							<Votes
								initialVotes={this.props.votes}
								onUpvote={this.handleUpvote}
								onDownvote={this.handleDownvote}
							/>
							<CommentButtons
								userName={this.props.user.userName}
								commentID={this.props.id}
								repliesRef={this.repliesRef}
								isEditing={this.state.isEditing}
								toggleEditing={this.toggleEditing}
								handleEdit={this.handleEdit}
								openDeleteCommentModal={this.props.openDeleteCommentModal}
								openReplyModal={this.props.openReplyModal}
							/>
						</div>
					</div>
				</Mobile>

				<Desktop>
					<div className="f-row g-1-25 card">
						<Votes
							className="f-col"
							style={{ alignSelf: "flex-start" }}
							initialVotes={this.props.votes}
							onUpvote={this.handleUpvote}
							onDownvote={this.handleDownvote}
						/>
						<div className={"f-col g-1-25"} style={{ flexGrow: 1 }}>
							<div className="f-row f-span-y left-right g-1">
								<CommentInfo user={this.props.user} date={this.props.date} edited={this.props.edited} />
								<CommentButtons
									userName={this.props.user.userName}
									commentID={this.props.id}
									repliesRef={this.repliesRef}
									isEditing={this.state.isEditing}
									toggleEditing={this.toggleEditing}
									handleEdit={this.handleEdit}
									openDeleteCommentModal={this.props.openDeleteCommentModal}
									openReplyModal={this.props.openReplyModal}
								/>
							</div>

							<CommentMessage
								message={this.props.message}
								mention={this.props.parent?.props.user.userName}
								isEditing={this.state.isEditing}
								toggleEditing={this.toggleEditing}
								editMessageChanged={msg => this.setState({ editMessage: msg })}
								parentRef={this.props.parentRef}
							/>
						</div>
					</div>
				</Desktop>

				<div ref={this.repliesRef} className={`${styles["replies"]} f-col g-1`}>
					{childrenWithProps}
				</div>
			</div>
		);
	}
}

export default Comment;
