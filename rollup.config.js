import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "express-error-handler",
  },
  external: ["express", "body-parser"],
  plugins: [typescript({ tsconfig: "tsconfig.json" })],
});