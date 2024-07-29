import plugin from "tailwindcss/plugin"

const animationDelay = plugin(({ addUtilities, theme, e }) => {
  const defaultValues = {
    none: "0s",
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    400: "400ms",
    500: "500ms",
    600: "600ms",
    700: "700ms",
    800: "800ms",
    900: "900ms",
    1000: "1000ms",
    1100: "1100ms",
    1200: "1200ms",
    1300: "1300ms",
    1400: "1400ms",
    1500: "1500ms",
    2000: "2000ms",
    3000: "3000ms",
    4000: "4000ms",
    5000: "5000ms",
    6000: "6000ms",
    7000: "7000ms",
    8000: "8000ms",
    9000: "9000ms",
  }

  const userValues = theme("animationDelay")
  const values = { ...defaultValues, ...userValues }

  const utilities = Object.entries(values).map(([key, value]) => ({
    [`.${e(`animation-delay-${key}`)}`]: { animationDelay: `${value}` },
  }))

  addUtilities(utilities)
})

/**
 * eslint-plugin-tailwindcss이랑 tailwind랑 충돌나는 문제 해결을 위해 size-screen 추가
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss
 * @see https://tailwindcss.com/docs/size#customizing-your-theme
 */
const sizeScreen = plugin(({ addUtilities, theme }) => {
  const newUtilities = {
    ".size-screen": {
      width: "100vw",
      height: "100vh",
    },
  }
  addUtilities(newUtilities)
})

const plugins = [animationDelay, sizeScreen]

export default plugins
