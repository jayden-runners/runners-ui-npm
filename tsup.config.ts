import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["stories/index.tsx"],
  format: ["esm"],
  sourcemap: true,
  minify: true,
  target: "esnext",
  outDir: "dist",
  tsconfig: "tsconfig.json", // tsconfig 파일 경로 명시
})
