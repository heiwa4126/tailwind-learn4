import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	base: process.env.GITHUB_REPO_NAME ?? "./",
	plugins: [react(), tailwindcss()],
	build: {
		rollupOptions: {
			external: ["react", "react-dom/client"],
		},
	},
	esbuild: {
		drop: ["console", "debugger"], // https://esbuild.github.io/api/#drop
	},
});
