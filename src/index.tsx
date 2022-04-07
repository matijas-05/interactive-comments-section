import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { CurrentUser } from "./context";

ReactDOM.render(
	<React.StrictMode>
		<CurrentUser.Provider value="juliusomo">
			<App />
		</CurrentUser.Provider>
	</React.StrictMode>,

	document.getElementById('root')
)
