import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import Comment from './components/Comment/Comment'

ReactDOM.render(
	<React.StrictMode>
		<Comment userName="amyrobson" profilePicture="/src/assets/images/avatars/image-amyrobson.webp" date="1 month ago" />
		<Comment userName="maxblagun" profilePicture="/src/assets/images/avatars/image-maxblagun.webp" date="2 weeks ago" />
	</React.StrictMode>,
	document.getElementById('root')
)
