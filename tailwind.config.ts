import type { Config } from "tailwindcss"
import senseColor from "./sense-color"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}", // Here!
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: senseColor,
      borderRadius: ({ theme }) => theme("spacing"),
      fontSize: {
        9: ["9px", { lineHeight: "normal" }],
        /** detail1 */
        12: ["12px", { lineHeight: "18px" }],
        /** body2 */
        14: ["14px", { lineHeight: "20px" }],
        /** body1 */
        16: ["16px", { lineHeight: "24px" }],
        /** title1 */
        18: ["18px", { lineHeight: "28px" }],
        /** headline4 */
        20: ["20px", { lineHeight: "32px" }],
        /** headline3 */
        24: ["24px", { lineHeight: "32px" }],
        /** headline2 */
        28: ["28px", { lineHeight: "36px" }],
        /** headline1 */
        34: ["34px", { lineHeight: "44px" }],
      },
    },
  },
  plugins: [],
}
export default config
