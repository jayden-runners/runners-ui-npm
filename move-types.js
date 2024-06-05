const fs = require("fs")
const path = require("path")

const destDir = __dirname

const distDir = path.join(destDir, "dist", "types")

function moveFiles(dir) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const srcPath = path.join(dir, file)
    const destPath = path.join(destDir, file)

    if (fs.statSync(srcPath).isDirectory()) {
      moveFiles(srcPath) // 재귀적으로 디렉토리 내부 탐색
    } else if (file.endsWith(".d.ts")) {
      console.log(`Attempting to move ${file} from ${srcPath} to ${destPath}`)
      try {
        fs.renameSync(srcPath, destPath)
        console.log(`Moved ${file} to root`)
      } catch (err) {
        console.error(`Failed to move ${file}:`, err)
      }
    }
  })
}

// 이동 작업 실행
moveFiles(distDir)

// 임시 타입 디렉토리 삭제
fs.rm(distDir, { recursive: true, force: true }, (err) => {
  if (err) {
    console.error(`Failed to remove ${distDir}:`, err)
  } else {
    console.log(`Removed ${distDir}`)
  }
})

// app 폴더는 원래안씀
fs.rm(
  path.join(__dirname, "dist", "app"),
  { recursive: true, force: true },
  (err) => {
    if (err) {
      console.error(`Failed to remove ${distDir}:`, err)
    } else {
      console.log(`Removed ${distDir}`)
    }
  },
)
