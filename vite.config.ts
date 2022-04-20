import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/interactive-comments-section/",
	plugins: [
		react()
	],
	server: {
		host: true
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("src/", import.meta.url))
		}
	}
});