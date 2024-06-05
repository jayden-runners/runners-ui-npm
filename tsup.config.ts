import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: false, // dts를 false로 설정하여 tsup에서 타입 정의 파일을 생성하지 않도록 함
  entry: ["stories/index.tsx"],
  format: ["esm", "cjs"],
  sourcemap: true,
  minify: true,
  target: "esnext",
  outDir: "dist",
  tsconfig: "tsconfig.json", // tsconfig 파일 경로 명시
})
