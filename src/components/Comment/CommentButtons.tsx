import { getCurrentUser } from "@/firebase";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import ButtonSecondary from "@/components/General/Buttons/ButtonSecondary";
import { Desktop } from "@/components/General/MediaQueryComponents";

import { faReply, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
	userName: string,
	repliesRef: React.RefObject<HTMLDivElement>,
	isEditing: boolean,
	toggleEditing: () => void,
	openDeleteCommentModal: () => void,
	openReplyModal: (ref: HTMLDivElement, userName: string) => void,
}
function CommentButtons(props: Props) {
	if (!getCurrentUser())
		return null;

	return (
		props.userName === getCurrentUser()?.userName ? (
			!props.isEditing ? (
				<div className="f-jc-fe f-ai-c f-wrap-rev g-1">
					<ButtonSecondary
						className={`text-red`} iconClassName="fa-sm" faIcon={faTrash}
						alt="Delete" onClick={props.openDeleteCommentModal}>
						<Desktop>Delete</Desktop>
					</ButtonSecondary>
					<ButtonSecondary
						className={`text-purple`} iconClassName="fa-sm" faIcon={faReply}
						onClick={props.toggleEditing}
					>
						Edit
					</ButtonSecondary>
					<ButtonSecondary
						className="text-purple" iconClassName="fa-sm" faIcon={faEdit}
						onClick={() => props.openReplyModal(props.repliesRef.current!, props.userName)}
					>
						Reply
					</ButtonSecondary>
				</div>
			) : (
				<div className="f-ai-c g-1-5">
					<ButtonSecondary onClick={props.toggleEditing} noHoverEffect={true}>
						<p className="hover-underline">Cancel</p>
					</ButtonSecondary>
					<ButtonPrimary className="bg-purple" onClick={props.toggleEditing}>UPDATE</ButtonPrimary>
				</div>
			)
		) : (
			<ButtonSecondary
				className="text-purple" iconClassName="fa-sm" faIcon={faReply}
				onClick={() => props.openReplyModal(props.repliesRef.current!, props.userName)}
			>
				Reply
			</ButtonSecondary>
		)

	);
}

export default CommentButtons;