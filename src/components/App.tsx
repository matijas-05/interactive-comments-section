import { useEffect, useState } from "react";
import {
	CommentData,
	getComment,
	removeComment,
	setCommentsStore,
	signOut,
	subscribeFirebase,
	unsubscribeFirebase
} from "@/firebase";
import { useCommentsStore, useUserStore } from "@/store";

import SignInModal from "./Auth/Modals/SignInModal";
import SignUpModal from "./Auth/Modals/SignUpModal";
import AddCommentModal from "./Comment/AddCommentModal";
import Comment from "./Comment/Comment";
import ReplyModal from "./Comment/ReplyModal";
import NoYesModal from "./General/Modals/NoYesModal";
import Header from "./General/Page Sections/Header";

function App() {
	//#region MODALS

	// Delete comment modal
	const [deleteCommentModalIsOpen, setDeleteCommentModalIsOpen] = useState(false);
	const [commentToDelete, setCommentToDelete] = useState("");
	function handleOpenDeleteCommentModal(commentID: string) {
		setDeleteCommentModalIsOpen(true);
		setCommentToDelete(commentID);
	}
	function handleCloseDeleteCommentModal() {
		setDeleteCommentModalIsOpen(false);
	}
	function handleDeleteComment(commentID: string) {
		(async () => {
			unsubscribeFirebase();
			await removeComment(commentID);
			subscribeFirebase();
			handleCloseDeleteCommentModal();
		})();
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
	const userStore = useUserStore();

	function handleToggleSignOutModal() {
		setSignOutModalIsOpen(!signOutModalIsOpen);
	}
	async function handleSignOut() {
		await signOut();
		userStore.setCurrentUser(null);
		handleToggleSignOutModal();
	}

	//#endregion

	// Comments
	const commentsDataStore = useCommentsStore();
	const [comments, setComments] = useState<JSX.Element[]>([]);
	const [refreshComments, setRefreshComments] = useState(0);

	useEffect(() => {
		// Subscribe to db changes
		setCommentsStore(commentsDataStore);
		subscribeFirebase();
	}, []);
	useEffect(() => {
		// When comments data store changes, reload comments
		(async () => {
			if (commentsDataStore.commentsData) {
				const commentsRendered = await Promise.all(
					commentsDataStore.commentsData.map(async data => await renderComment(data))
				);
				setComments(commentsRendered);
				setRefreshComments(new Date().getTime()); // comments don't properly refresh
			}
		})();
	}, [commentsDataStore.commentsData]);
	useEffect(() => {
		document
			.querySelectorAll<HTMLElement>(".comments > div > div")
			.forEach(el => (el.style.scrollMargin = `${document.querySelector("header")!.offsetHeight}px`));
	}, [comments]);

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
		let replies: JSX.Element[] = [];
		if (commentData.replies.length > 0) {
			replies = await Promise.all(
				commentData.replies.map(async reply => {
					const data = await getComment(reply.id);

					if (!data) return <p className="error">Error loading replies!</p>;

					data.id = reply.id;
					return renderComment(data);
				})
			);
		}

		return (
			<Comment
				key={commentData.id!}
				id={commentData.id!}
				user={commentData.user}
				date={parsedDate}
				votes={commentData.votes}
				message={commentData.message}
				openReplyModal={handleToggleReplyModal}
				openDeleteCommentModal={handleOpenDeleteCommentModal}
			>
				{replies}
			</Comment>
		);
	}

	return (
		<>
			<Header
				openSignInModal={handleToggleSignInModal}
				openSignUpModal={handleToggleSignUpModal}
				openSignOutModal={handleToggleSignOutModal}
			/>

			<section className="f-center g-1 pad-1-2" style={{ display: "grid" }}>
				{/* Need to wrap in div because if 'refreshComments' key is in section tag,
				because AddCommentModal disappears after submitting comment */}
				{/* !!! DON'T REMOVE .comments CLASS. NEEDED FOR querySelector() */}
				<div key={refreshComments} className="comments f-col g-1">
					{comments}
				</div>

				{/* Needed for AddCommentModal to be rendered after all comments */}
				<div className="add-comment-modal"></div>
			</section>

			{/* Comment related modals */}
			<AddCommentModal />
			<ReplyModal
				isOpen={replyModalIsOpen}
				onCancel={handleCloseReplyModal}
				parent={replyModalParent ?? document.getElementById("root")!}
				userName={replyModalParentUserName}
				parentCommentID={replyModalParentCommentID}
			/>
			<NoYesModal
				header="Delete comment"
				message="Are you sure you want to delete this comment? This will remove the comment and can't be undone."
				noText="NO, CANCEL"
				yesText="YES, DELETE"
				onNoClicked={() => handleCloseDeleteCommentModal()}
				onYesClicked={() => handleDeleteComment(commentToDelete)}
				isOpen={deleteCommentModalIsOpen}
			/>

			{/* Auth related modals */}
			<SignInModal isOpen={signInModalIsOpen} onRequestClose={() => handleToggleSignInModal()} />
			<SignUpModal isOpen={signUpModalIsOpen} onRequestClose={() => handleToggleSignUpModal()} />
			<NoYesModal
				header="Sign out"
				message="Are you sure you want to sign out?"
				noText="NO, CANCEL"
				yesText="YES, SIGN OUT"
				onNoClicked={() => handleToggleSignOutModal()}
				onYesClicked={() => handleSignOut()}
				isOpen={signOutModalIsOpen}
			/>
		</>
	);
}

export default App;
