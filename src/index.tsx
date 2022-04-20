import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom";
import { CurrentUser } from "./context";

import "normalize.css";
import "./scss/index.scss";

ReactDOM.render(
	<React.StrictMode>
		<CurrentUser.Provider value="juliusomo">
			<App />
		</CurrentUser.Provider>
	</React.StrictMode>,

	document.getElementById("root")
);
