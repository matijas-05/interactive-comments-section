import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import Comment from './components/Comment/Comment'
import { CurrentUser } from "./context";

ReactDOM.render(
	<React.StrictMode>
		<CurrentUser.Provider value="juliusomo">
			<Comment
				profilePicture="/src/assets/images/avatars/image-amyrobson.webp" userName="amyrobson" date="1 month ago" votes={12}
				message="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
			/>
			<Comment
				profilePicture="/src/assets/images/avatars/image-maxblagun.webp" userName="maxblagun" date="2 weeks ago" votes={5}
				message="Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
			>
				<Comment
					profilePicture="/src/assets/images/avatars/image-ramsesmiron.webp" userName="ramsesmiron" date="1 week ago" votes={4}
					message="If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first."
				/>
				<Comment
					profilePicture="/src/assets/images/avatars/image-juliusomo.webp" userName="juliusomo" date="2 days ago" votes={2}
					message="I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant."
				>
				</Comment>
			</Comment>
		</CurrentUser.Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
