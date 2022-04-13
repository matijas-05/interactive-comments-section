import { CurrentUser } from '../../context'
import ButtonPrimary from '../General/ButtonPrimary'
import ButtonSecondary from '../General/ButtonSecondary'

import iconDelete from "/src/assets/images/icon-delete.svg";
import iconEdit from "/src/assets/images/icon-edit.svg";
import iconReply from "/src/assets/images/icon-reply.svg";

interface Props {
	userName: string,
	repliesRef: React.RefObject<HTMLDivElement>,
	isEditing: boolean,
	toggleEditing: () => void,
	openDeleteCommentModal: () => void,
	openReplyModal: (ref: HTMLDivElement, userName: string) => void,
}
function CommentButtons(props: Props) {
	return (
		<CurrentUser.Consumer>
			{currentUser =>
				props.userName === currentUser ?
					(
						!props.isEditing ?
							(
								<div className="f-ai-c g-1">
									<ButtonSecondary className={`text-red`} iconSrc={iconDelete} onClick={props.openDeleteCommentModal}>
										Delete
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
			}
		</CurrentUser.Consumer>
	)
}

export default CommentButtons