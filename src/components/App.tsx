import { useState } from 'react'
import Comment from './Comment/Comment';

import amyRobson from "/src/assets/images/avatars/image-amyrobson.webp";
import maxBlagun from "/src/assets/images/avatars/image-maxblagun.webp";
import ramsesMiron from "/src/assets/images/avatars/image-ramsesmiron.webp";
import juliusOmo from "/src/assets/images/avatars/image-juliusomo.webp";
import ModalNoYes from './General/ModalNoYes';

function App() {
	const [deleteComponentModalIsOpen, setDeleteCommentModalIsOpen] = useState(false);

	function handleOpenModal() {
		setDeleteCommentModalIsOpen(true);
	}
	function handleCloseModal() {
		setDeleteCommentModalIsOpen(false);
	}

	return (
		<>
			<Comment
				profilePicture={amyRobson} userName="amyrobson" date="1 month ago" votes={12}
				openDeleteCommentModal={handleOpenModal}
				message="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
			/>
			<Comment
				profilePicture={maxBlagun} userName="maxblagun" date="2 weeks ago" votes={5}
				openDeleteCommentModal={handleOpenModal}
				message="Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
			>
				<Comment
					profilePicture={ramsesMiron} userName="ramsesmiron" date="1 week ago" votes={4}
					openDeleteCommentModal={handleOpenModal}
					message="If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first."
				>
					<Comment
						profilePicture={juliusOmo} userName="juliusomo" date="2 days ago" votes={2}
						openDeleteCommentModal={handleOpenModal}
						message="I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant."
					>
					</Comment>
				</Comment>
			</Comment>

			<ModalNoYes
				header="Delete comment"
				message="Are you sure you want to delete this comment? This will remove the comment and can't be undone."
				cancelModal={handleCloseModal} confirmModal={handleCloseModal}
				modalState={deleteComponentModalIsOpen}
			/>
		</>
	)
}

export default App