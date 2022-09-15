import { useUserStore } from "@/store";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import ButtonSecondary from "@/components/General/Buttons/ButtonSecondary";
import { Desktop } from "@/components/General/MediaQueryComponents";
import { faReply, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
	userName: string,
	commentID: string,
	repliesRef: React.RefObject<HTMLDivElement>,
	isEditing: boolean,
	toggleEditing: () => void,
	handleEdit: () => void,
	openDeleteCommentModal: (commentID: string) => void,
	openReplyModal: (ref: HTMLDivElement, userName: string, parentCommentID: string) => void,
}
function CommentButtons(props: Props) {
	const store = useUserStore();

	if (!store.currentUser)
		return null;

	return (
		props.userName === store.currentUser?.userName ? (
			!props.isEditing ? (
				<div className="f-jc-fe f-ai-c f-wrap-rev g-1">
					<ButtonSecondary
						className="text-red" iconClassName="fa-sm" faIcon={faTrash}
						alt="Delete" onClick={() => props.openDeleteCommentModal(props.commentID)}>
						<Desktop>Delete</Desktop>
					</ButtonSecondary>
					<ButtonSecondary
						className="text-purple" iconClassName="fa-sm" faIcon={faReply}
						onClick={props.toggleEditing}
					>
						Edit
					</ButtonSecondary>
					<ButtonSecondary
						className="text-purple" iconClassName="fa-sm" faIcon={faEdit}
						onClick={() => props.openReplyModal(props.repliesRef.current!, props.userName, props.commentID)}
					>
						Reply
					</ButtonSecondary>
				</div>
			) : (
				<div className="f-ai-c g-1-5">
					<ButtonSecondary onClick={props.toggleEditing} noHoverEffect={true}>
						<p className="hover-underline">Cancel</p>
					</ButtonSecondary>
					<ButtonPrimary className="bg-purple" onClick={props.handleEdit}>UPDATE</ButtonPrimary>
				</div>
			)
		) : (
			<ButtonSecondary
				className="text-purple" iconClassName="fa-sm" faIcon={faReply}
				onClick={() => props.openReplyModal(props.repliesRef.current!, props.userName, props.commentID)}
			>
				Reply
			</ButtonSecondary>
		)

	);
}

export default CommentButtons;