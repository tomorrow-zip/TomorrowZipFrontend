import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/test": {
                target: "https://rain-lee.shop/",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/test/, ""),
            },
            "/api": {
                target: "https://rain-lee.shop/",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, "api"),
            },
        },
    },
    plugins: [react()],
})
