import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import Comment from './components/Comment/Comment'

ReactDOM.render(
	<React.StrictMode>
		<Comment />
		<Comment />
	</React.StrictMode>,
	document.getElementById('root')
)
