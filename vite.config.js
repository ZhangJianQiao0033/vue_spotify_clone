import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // 需要导入path模块

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      icons: path.resolve(__dirname, "node_modules/vue-material-design-icons"),
    },
    extensions: [".vue", ".js", ".ts"], // 确保包含这些扩展
  },
});
