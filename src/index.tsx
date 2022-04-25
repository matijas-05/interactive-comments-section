import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom";

import "normalize.css";
import "./scss/index.scss";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,

	document.getElementById("root")
);
