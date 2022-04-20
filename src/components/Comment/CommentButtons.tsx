import { useContext } from "react";
import { CurrentUser } from "@/context";
import ButtonPrimary from "@/components/General/Buttons/ButtonPrimary";
import ButtonSecondary from "@/components/General/Buttons/ButtonSecondary";
import { Desktop } from "@/components/General/MediaQueryComponents";

import iconDelete from "@/assets/images/icon-delete.svg";
import iconEdit from "@/assets/images/icon-edit.svg";
import iconReply from "@/assets/images/icon-reply.svg";

interface Props {
	userName: string,
	repliesRef: React.RefObject<HTMLDivElement>,
	isEditing: boolean,
	toggleEditing: () => void,
	openDeleteCommentModal: () => void,
	openReplyModal: (ref: HTMLDivElement, userName: string) => void,
}
function CommentButtons(props: Props) {
	const currentUser = useContext(CurrentUser);

	return (
		props.userName === currentUser ?
			(
				!props.isEditing ?
					(
						<div className="f-jc-fe f-ai-c f-wrap-rev g-1">
							<ButtonSecondary className={`text-red`} iconSrc={iconDelete} alt="Delete" onClick={props.openDeleteCommentModal}>
								<Desktop>Delete</Desktop>
							</ButtonSecondary>
							<ButtonSecondary className={`text-purple`} iconSrc={iconEdit} onClick={props.toggleEditing}>
								Edit
							</ButtonSecondary>
							<ButtonSecondary className="text-purple" iconSrc={iconReply} onClick={() => props.openReplyModal(props.repliesRef.current!, props.userName)}>
								Reply
							</ButtonSecondary>
						</div>
					) :
					(
						<div className="f-ai-c g-1-5">
							<ButtonSecondary onClick={props.toggleEditing} noHoverEffect={true}>
								<p className="hover-underline">Cancel</p>
							</ButtonSecondary>
							<ButtonPrimary className="bg-purple" onClick={props.toggleEditing}>UPDATE</ButtonPrimary>
						</div>
					)
			) :
			(
				<ButtonSecondary className="text-purple" iconSrc={iconReply} onClick={() => props.openReplyModal(props.repliesRef.current!, props.userName)}>
					Reply
				</ButtonSecondary>
			)

	);
}

export default CommentButtons;