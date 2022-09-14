import React from "react";
import { UserData } from "@/firebase";
import { Desktop, Mobile } from "@/components/General/MediaQueryComponents";
import Votes from "./Votes";
import CommentInfo from "./CommentInfo";
import CommentMessage from "./CommentMessage";
import CommentButtons from "./CommentButtons";
import styles from "./Comment.module.scss";

interface Props {
	id: string,
	user: UserData,
	date: string,
	message: string,
	votes: number,
	openReplyModal: (ref: HTMLDivElement, userName: string, parentCommentID: string) => void,
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
				return React.cloneElement(child, { parent: this, parentRef: this.thisRef } as unknown as Props);
			}
			return child;
		});

		return (
			<div ref={this.thisRef} className="f-col g-1 hide-empty">
				<Mobile>
					<div className={"f-col g-1-25 card"}>
						<CommentInfo user={this.props.user} date={this.props.date} />
						<CommentMessage message={this.props.message} mention={this.props.parent?.props.user.userName} isEditing={this.state.isEditing} toggleEditing={this.toggleEditing} parentRef={this.props.parentRef} />

						<div className="left-right f-span-y g-1">
							<Votes initialVotes={this.props.votes} />
							<CommentButtons userName={this.props.user.userName} commentID={this.props.id} repliesRef={this.repliesRef} isEditing={this.state.isEditing}
								toggleEditing={this.toggleEditing} openDeleteCommentModal={this.props.openDeleteCommentModal} openReplyModal={this.props.openReplyModal} />
						</div>
					</div>
				</Mobile>

				<Desktop>
					<div className="f-row g-1-25 card">
						<Votes className="f-col" style={{ alignSelf: "flex-start" }} initialVotes={this.props.votes} />
						<div className={"f-col g-1-25"} style={{ flexGrow: 1 }}>
							<div className="f-row f-span-y left-right g-1">
								<CommentInfo user={this.props.user} date={this.props.date} />
								<CommentButtons userName={this.props.user.userName} commentID={this.props.id} repliesRef={this.repliesRef} isEditing={this.state.isEditing}
									toggleEditing={this.toggleEditing} openDeleteCommentModal={this.props.openDeleteCommentModal} openReplyModal={this.props.openReplyModal} />
							</div>

							<CommentMessage message={this.props.message} mention={this.props.parent?.props.user.userName}
								isEditing={this.state.isEditing} toggleEditing={this.toggleEditing} parentRef={this.props.parentRef} />
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
