import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import isWsl from "is-wsl";

process.env.BROWSER = "firefox";
export default defineConfig({
	base: "/interactive-comments-section/",
	plugins: [react()],
	server: {
		host: true,
		open: true,
		watch: {
			usePolling: isWsl
		}
	},
	resolve: {
		alias: {
			"@": path.join(__dirname, "src")
		}
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					firebase: ["firebase/app", "firebase/auth", "firebase/storage"],
					firestore: ["firebase/firestore"],
					fortawesome: [
						"@fortawesome/fontawesome-svg-core",
						"@fortawesome/free-solid-svg-icons",
						"@fortawesome/react-fontawesome"
					]
				}
			}
		}
	}
});
