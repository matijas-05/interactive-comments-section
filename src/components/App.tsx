import { useEffect, useRef, useState } from "react";
import {
	CommentData,
	getAllComments,
	getTopLevelComments,
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
	const commentToDelete = useRef("");

	function handleOpenDeleteCommentModal(commentID: string) {
		setDeleteCommentModalIsOpen(true);
		commentToDelete.current = commentID;
	}
	function handleCloseDeleteCommentModal() {
		setDeleteCommentModalIsOpen(false);
	}
	async function handleDeleteComment(commentID: string) {
		unsubscribeFirebase();
		await removeComment(commentID);
		subscribeFirebase();
		handleCloseDeleteCommentModal();
	}

	// Reply to comment modal
	const [replyModalIsOpen, setReplyModalIsOpen] = useState(false);
	const replyModalParent = useRef<HTMLDivElement | null>(null);
	const replyModalParentUserName = useRef("");
	const replyModalParentCommentID = useRef("");

	function handleCloseReplyModal() {
		setReplyModalIsOpen(false);
		// setReplyModalParent(null);
		replyModalParent.current = null;
	}
	function handleToggleReplyModal(parentComment: HTMLDivElement, userName: string, parentCommentID: string) {
		replyModalParentCommentID.current = parentCommentID;
		replyModalParentUserName.current = userName;
		replyModalParent.current = !replyModalIsOpen ? parentComment : null;
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
	const [topLevelComments, setTopLevelComments] = useState<CommentData[]>();
	const [allComments, setAllComments] = useState<CommentData[]>();

	useEffect(() => {
		// Subscribe to db changes
		setCommentsStore(commentsDataStore);
		subscribeFirebase();

		// Unsubscribe when component unmounts
		return () => {
			unsubscribeFirebase();
		};
	}, []);
	useEffect(() => {
		// When comments data store changes, reload comments
		(async () => {
			setTopLevelComments(await getTopLevelComments());
			setAllComments(await getAllComments());
		})();
	}, [commentsDataStore.commentsData]);
	useEffect(() => {
		document
			.querySelectorAll<HTMLElement>(".comments > div > div")
			.forEach(el => (el.style.scrollMargin = `${document.querySelector("header")!.offsetHeight}px`));
	}, [topLevelComments]);

	function renderComment(commentData: CommentData, isReply: boolean) {
		if (!topLevelComments) return null;

		// Remove comments from list of top-level comments if they are replies
		if (!isReply && !topLevelComments.some(topLevel => topLevel.id === commentData.id)) return null;

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
		let replies: (JSX.Element | null)[] = [];
		if (commentData.replies.length > 0) {
			replies = commentData.replies.map(reply => {
				const data = allComments?.find(comment => comment.id === reply.id);

				if (!data)
					return (
						<p key={commentData.id!} className="error">
							Error loading replies!
						</p>
					);

				data.id = reply.id;
				return renderComment(data, true);
			});
		}

		return (
			<Comment
				key={commentData.id!}
				id={commentData.id!}
				user={commentData.user}
				date={parsedDate}
				votes={commentData.upvotes.length - commentData.downvotes.length}
				message={commentData.message}
				edited={commentData.edited}
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
				<div className="comments f-col g-1">
					{allComments?.map(data => renderComment(data, false)) ?? <p>Loading comments...</p>}
				</div>

				{/* Needed for AddCommentModal to be rendered after all comments */}
				<div className="add-comment-modal"></div>
			</section>

			{/* Comment related modals */}
			<AddCommentModal />
			<ReplyModal
				isOpen={replyModalIsOpen}
				onCancel={handleCloseReplyModal}
				parent={replyModalParent.current ?? document.getElementById("root")!}
				userName={replyModalParentUserName.current}
				parentCommentID={replyModalParentCommentID.current}
			/>
			<NoYesModal
				header="Delete comment"
				message="Are you sure you want to delete this comment? This will remove the comment and can't be undone."
				noText="NO, CANCEL"
				yesText="YES, DELETE"
				usesPromise={true}
				onNoClicked={handleCloseDeleteCommentModal}
				onYesClicked={() => handleDeleteComment(commentToDelete.current)}
				isOpen={deleteCommentModalIsOpen}
			/>

			{/* Auth related modals */}
			<SignInModal isOpen={signInModalIsOpen} onRequestClose={handleToggleSignInModal} />
			<SignUpModal isOpen={signUpModalIsOpen} onRequestClose={handleToggleSignUpModal} />
			<NoYesModal
				header="Sign out"
				message="Are you sure you want to sign out?"
				noText="NO, CANCEL"
				yesText="YES, SIGN OUT"
				onNoClicked={handleToggleSignOutModal}
				onYesClicked={handleSignOut}
				isOpen={signOutModalIsOpen}
			/>
		</>
	);
}

export default App;
