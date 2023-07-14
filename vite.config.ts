import react from "@vitejs/plugin-react"
import path from "path"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"
import stylelintPlugin from "vite-plugin-stylelint"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stylelintPlugin({
      fix: true,
      emitError: false
    }),
  ],
  // resolve: {
  //   alias: [
  //     {
  //       find: "@app",
  //       replacement: fileURLToPath(new URL("./src/1_app", import.meta.url)),
  //     },
  //     {
  //       find: "@pages",
  //       replacement: fileURLToPath(new URL("./src/2_pages", import.meta.url)),
  //     },
  //     {
  //       find: "@widgets",
  //       replacement: fileURLToPath(new URL("./src/3_widgets", import.meta.url)),
  //     },
  //     {
  //       find: "@features",
  //       replacement: fileURLToPath(new URL("./src/4_features", import.meta.url)),
  //     },
  //     {
  //       find: "@entities",
  //       replacement: fileURLToPath(new URL("./src/5_entities", import.meta.url)),
  //     },
  //     {
  //       find: "@shared",
  //       replacement: fileURLToPath(new URL("./src/6_shared", import.meta.url)),
  //     },
  //   ],
  // },
})
