import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

process.env.BROWSER = "firefox";

export default defineConfig({
	base: "/interactive-comments-section/",
	plugins: [react()],
	server: {
		host: true,
		open: true,
		watch: {
			usePolling: true
		}
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("src/", import.meta.url))
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
