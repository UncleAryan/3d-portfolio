// Vite is the build tool I am using
// enabling JSX transformation in defineConfig()

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
});
