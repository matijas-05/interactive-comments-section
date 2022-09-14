import { useEffect, useState } from "react";
import { signOut, CommentData, getComments, getComment } from "@/firebase";
import Header from "./General/Page Sections/Header";
import Comment from "./Comment/Comment";
import AddCommentModal from "./Comment/AddCommentModal";
import ReplyModal from "./Comment/ReplyModal";
import NoYesModal from "./General/Modals/NoYesModal";
import SignInModal from "./Auth/Modals/SignInModal";
import SignUpModal from "./Auth/Modals/SignUpModal";

function App() {

	//#region MODALS

	// Delete comment modal
	const [deleteCommentModalIsOpen, setDeleteCommentModalIsOpen] = useState(false);

	function handleOpenDeleteCommentModal() {
		setDeleteCommentModalIsOpen(true);
	}
	function handleCloseDeleteCommentModal() {
		setDeleteCommentModalIsOpen(false);
	}

	// Reply to comment modal
	const [replyModalIsOpen, setReplyModalIsOpen] = useState(false);
	const [replyModalParent, setReplyModalParent] = useState<HTMLDivElement>();
	const [replyModalParentUserName, setReplyModalParentUserName] = useState("");
	const [replyModalParentCommentID, setReplyModalParentCommentID] = useState("");

	function handleCloseReplyModal() {
		setReplyModalIsOpen(false);
	}
	function handleToggleReplyModal(parentComment: HTMLDivElement, userName: string, parentCommentID: string) {
		setReplyModalParentCommentID(parentCommentID);
		setReplyModalParentUserName(userName);
		setReplyModalParent(parentComment);
		setReplyModalIsOpen(!replyModalIsOpen);
	}

	// Sign in modal
	const [signInModalIsOpen, setSignInModalIsOpen] = useState(false);

	function handleToggleSignInModal() {
		setSignInModalIsOpen(!signInModalIsOpen);
	}

	// Sign up modal
	const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);

	function handleToggleSignUpModal() {
		setSignUpModalIsOpen(!signUpModalIsOpen);
	}

	// Sign out modal
	const [signOutModalIsOpen, setSignOutModalIsOpen] = useState(false);

	function handleToggleSignOutModal() {
		setSignOutModalIsOpen(!signOutModalIsOpen);
	}
	async function handleSignOut() {
		await signOut();
		handleToggleSignOutModal();
	}

	//#endregion

	// Comments
	const [comments, setComments] = useState<JSX.Element[] | null>(null);
	useEffect(() => {
		(async () => {
			const commentData = await getComments();

			if (commentData) {
				// Sort by newest
				const commentDataSorted = commentData.sort((a, b) => b.date.seconds - a.date.seconds);
				const commentsRendered = await Promise.all(commentDataSorted.map(async data => await renderComment(data)));
				setComments(commentsRendered);
			}
		})();
	}, []);

	async function renderComment(commentData: CommentData) {
		// Parse date
		const minutes = Math.round((new Date().getTime() - commentData.date.toDate().getTime()) / 1000 / 60);
		const hours = Math.round(minutes / 60);
		const days = Math.round(hours / 24);
		const weeks = Math.round(days / 7);
		const months = Math.round(weeks / 4);
		const years = Math.round(months / 12);

		let parsedDate = "";
		if (years > 0) {
			parsedDate = `${years} year${years > 1 ? "s" : ""} ago`;
		} else if (months > 0) {
			parsedDate = `${months} month${months > 1 ? "s" : ""} ago`;
		} else if (weeks > 0) {
			parsedDate = `${weeks} week${weeks > 1 ? "s" : ""} ago`;
		} else if (days > 0) {
			parsedDate = `${days} day${days > 1 ? "s" : ""} ago`;
		} else if (hours > 0) {
			parsedDate = `${hours} hour${hours > 1 ? "s" : ""} ago`;
		} else if (minutes > 0) {
			parsedDate = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
		} else {
			parsedDate = "Just now";
		}

		// Render replies
		let replies: JSX.Element[] | null = null;
		if (commentData.replies) {
			replies = await Promise.all(commentData.replies.map(async reply => {
				const data = await getComment(reply.id);

				if (!data)
					return <p className="error">Error loading replies!</p>;

				data.id = reply.id;
				return renderComment(data);
			}));
		}

		return <Comment
			key={commentData.id!} id={commentData.id!} user={commentData.user}
			date={parsedDate} votes={commentData.votes} message={commentData.message}
			openReplyModal={handleToggleReplyModal} openDeleteCommentModal={handleOpenDeleteCommentModal}
		>
			{replies}
		</Comment>;
	}

	return (
		<>
			<Header openSignInModal={handleToggleSignInModal} openSignUpModal={handleToggleSignUpModal} openSignOutModal={handleToggleSignOutModal} />

			<section className="comments">
				{comments}

				{/* Needed for AddCommentModal to be rendered after all comments */}
				<div className="add-comment-modal"></div>
			</section>

			{/* Comment related modals */}
			<AddCommentModal />
			<ReplyModal
				isOpen={replyModalIsOpen} onCancel={handleCloseReplyModal}
				parent={replyModalParent ?? document.getElementById("root")!} userName={replyModalParentUserName}
				parentCommentID={replyModalParentCommentID}
			/>
			<NoYesModal
				header="Delete comment"
				message="Are you sure you want to delete this comment? This will remove the comment and can't be undone."
				noText="NO, CANCEL" yesText="YES, DELETE"
				onNoClicked={() => handleCloseDeleteCommentModal()} onYesClicked={() => handleCloseDeleteCommentModal()}
				isOpen={deleteCommentModalIsOpen}
			/>

			{/* Auth related modals */}
			<SignInModal isOpen={signInModalIsOpen} onRequestClose={() => handleToggleSignInModal()} />
			<SignUpModal isOpen={signUpModalIsOpen} onRequestClose={() => handleToggleSignUpModal()} />
			<NoYesModal
				header="Sign out"
				message="Are you sure you want to sign out?"
				noText="NO, CANCEL" yesText="YES, SIGN OUT"
				onNoClicked={() => handleToggleSignOutModal()} onYesClicked={() => handleSignOut()}
				isOpen={signOutModalIsOpen}
			/>
		</>
	);
}

export default App;