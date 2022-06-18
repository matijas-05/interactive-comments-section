import { useEffect, useState } from "react";
import { getComments, signOut, CommentData } from "@/firebase";
import Header from "./General/Page Sections/Header";
import Comment from "./Comment/Comment";
import AddCommentModal from "./Comment/AddCommentModal";
import ReplyModal from "./Comment/ReplyModal";
import NoYesModal from "./General/Modals/NoYesModal";
import SignInModal from "./Auth/Modals/SignInModal";
import SignUpModal from "./Auth/Modals/SignUpModal";

// import amyRobson from "@/assets/images/avatars/image-amyrobson.webp";
// import maxBlagun from "@/assets/images/avatars/image-maxblagun.webp";
// import ramsesMiron from "@/assets/images/avatars/image-ramsesmiron.webp";
// import juliusOmo from "@/assets/images/avatars/image-juliusomo.webp";

function App() {
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

	function handleCloseReplyModal() {
		setReplyModalIsOpen(false);
	}
	function handleToggleReplyModal(parentComment: HTMLDivElement, userName: string) {
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

	// Comments
	const [commentData, setCommentData] = useState<CommentData[] | null>(null);
	useEffect(() => {
		(async () => {
			const comments = await getComments();
			setCommentData(comments);
		})();
	}, []);
	
	function renderComment() {
		return commentData?.map(comment => {
			const minutes = Math.round((new Date().getTime() - comment.date.toDate().getTime()) / 1000 / 60);
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

			return <Comment
				key={comment.id}
				profilePicture={comment.user.profilePictureDownloadURL} userName={comment.user.userName}
				date={parsedDate} votes={comment.votes} message={comment.message}
				openReplyModal={handleToggleReplyModal} openDeleteCommentModal={handleOpenDeleteCommentModal} />;
		});
	}

	return (
		<>
			<Header openSignInModal={handleToggleSignInModal} openSignUpModal={handleToggleSignUpModal} openSignOutModal={handleToggleSignOutModal} />

			<section className="comments">
				{/* <Comment
					profilePicture={amyRobson} userName="amyrobson" date="1 month ago" votes={12}
					openReplyModal={handleToggleReplyModal}
					openDeleteCommentModal={handleOpenDeleteCommentModal}
					message="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
				/>
				<Comment
					profilePicture={maxBlagun} userName="maxblagun" date="2 weeks ago" votes={5}
					openReplyModal={handleToggleReplyModal}
					openDeleteCommentModal={handleOpenDeleteCommentModal}
					message="Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
				>
					<Comment
						profilePicture={ramsesMiron} userName="ramsesmiron" date="1 week ago" votes={4}
						openReplyModal={handleToggleReplyModal}
						openDeleteCommentModal={handleOpenDeleteCommentModal}
						message="@maxblagun If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first."
					>
						<Comment
							profilePicture={juliusOmo} userName="juliusomo" date="2 days ago" votes={2}
							openReplyModal={handleToggleReplyModal}
							openDeleteCommentModal={handleOpenDeleteCommentModal}
							message="@ramsesmiron I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant."
						>
						</Comment>
					</Comment>
				</Comment> */}

				{renderComment()}

				{/* Needed for AddCommentModal to be rendered after all comments */}
				<div className="add-comment-modal"></div>
			</section>

			{/* Comment related modals */}
			<AddCommentModal />
			<ReplyModal
				isOpen={replyModalIsOpen} onCancel={handleCloseReplyModal}
				parent={replyModalParent ?? document.getElementById("root")!} userName={replyModalParentUserName}
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