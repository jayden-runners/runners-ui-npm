import { defineConfig } from "tsup"
import fs from "fs"

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

  onSuccess: async () => {
    const cssImportStatement = `import "./runners.css";`

    // ESM 형식의 파일 처리
    // const esmJsContent = fs.readFileSync("./dist/index.js", "utf-8")
    // const modifiedEsmJsContent = esmJsContent.replace(
    //   '"use strict";',
    //   `"use strict";${cssImportStatement}`,
    // )
    // fs.writeFileSync("./dist/index.js", modifiedEsmJsContent)

    const mjsJsContent = fs.readFileSync("dist/index.mjs", "utf-8")
    const modifiedCjsJsContent = mjsJsContent.replace(
      'from"tailwind-merge";',
      `from"tailwind-merge";${cssImportStatement}`,
    )
    fs.writeFileSync("./dist/index.mjs", modifiedCjsJsContent)

    console.log("Build complete with CSS import.")
  },
})
