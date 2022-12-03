import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";

import "normalize.css";
import "./scss/index.scss";

const root = createRoot(document.getElementById("root")!);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
