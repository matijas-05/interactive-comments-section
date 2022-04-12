import React from "react";
import Votes from "./Votes";
import CommentInfo from "./CommentInfo";
import { Desktop, Mobile } from "../General/MediaQueryComponents";
import styles from "./Comment.module.scss"

import CommentMessage from "./CommentMessage";
import CommentButtons from "./CommentButtons";

interface Props {
	userName: string,
	profilePicture: string,
	date: string,
	message: string,
	votes: number,
	openReplyModal: (ref: HTMLDivElement) => void,
	openDeleteCommentModal: () => void,
	children?: React.ReactNode,
	parent?: Comment,
	parentRef?: React.RefObject<HTMLDivElement>,
}
interface State {
	isEditing: boolean
}
class Comment extends React.Component<Props, State> {
	private thisRef = React.createRef<HTMLDivElement>();
	private repliesRef = React.createRef<HTMLDivElement>();

	constructor(props: Props) {
		super(props);
		this.thisRef = React.createRef();
		this.repliesRef = React.createRef();
		this.state = { isEditing: false };
		this.toggleEditing = this.toggleEditing.bind(this);
	}

	private toggleEditing() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	render() {
		const childrenWithProps = React.Children.map(this.props.children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, { parent: this, parentRef: this.thisRef });
			}
			return child;
		});

		return (
			<div ref={this.thisRef} className="f-col g-1 hide-empty" style={!this.state.isEditing ? { width: "" } : { width: "100%" }}>
				<Mobile>
					<div className={`f-col g-1-25 card`}>
						<CommentInfo userName={this.props.userName} profilePicture={this.props.profilePicture} date={this.props.date} />
						<CommentMessage message={this.props.message} mention={this.props.parent?.props.userName} isEditing={this.state.isEditing} parentRef={this.props.parentRef} />

						{/* Comment buttons */}
						<div className="left-right">
							<Votes initialVotes={this.props.votes} />
							<CommentButtons userName={this.props.userName} repliesRef={this.repliesRef} isEditing={this.state.isEditing}
								toggleEditing={this.toggleEditing} openDeleteCommentModal={this.props.openDeleteCommentModal} openReplyModal={this.props.openReplyModal} />
						</div>
					</div>
				</Mobile>

				<Desktop>
					{/* Comment buttons */}
					<div className="f-row g-1-25 card">
						<Votes className="f-col" style={{ alignSelf: "flex-start" }} initialVotes={this.props.votes} />
						<div className={`f-col g-1-25`} style={{ width: "100%" }}>
							<div className="f-row left-right">
								<CommentInfo userName={this.props.userName} profilePicture={this.props.profilePicture} date={this.props.date} />
								<CommentButtons userName={this.props.userName} repliesRef={this.repliesRef} isEditing={this.state.isEditing}
									toggleEditing={this.toggleEditing} openDeleteCommentModal={this.props.openDeleteCommentModal} openReplyModal={this.props.openReplyModal} />
							</div>

							<CommentMessage message={this.props.message} mention={this.props.parent?.props.userName} isEditing={this.state.isEditing} parentRef={this.props.parentRef} />
						</div>
					</div>
				</Desktop>

				<div ref={this.repliesRef} className={`${styles["replies"]} f-col g-1`}>
					{childrenWithProps}
				</div>
			</div>
		);
	};
}

export default Comment;
