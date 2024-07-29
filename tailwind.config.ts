import type { Config } from "tailwindcss"
import senseColor from "./sense-color"
import plugins from "./tailwind.plugin"

// We want each package to be responsible for its own content.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}", // Here!
  ],
  theme: {
    /**
     *
     * @deprecated
     * 센스 웹 기존 데스크탑 우선 작업분때문에 넣어놓았고, 추후 줄여나갈 예정입니다.
     * 앞으로는 모바일퍼스트로!
     */
    screens: {
      laptop: { max: "1023px" },
      mobile: { max: "767px" },

      /**
       * tailwind 기본 break point
       */
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
    },

    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
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

      colors: senseColor,
      borderRadius: ({
        theme,
      }: {
        theme: (path: string, defaultValue?: unknown) => any
      }) => theme("spacing"),

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "translate-fade-in": {
          "0%": { opacity: "0", transform: "translateY(-5%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "translate-fade-in-bottom": {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "bounce-left": {
          "0%": { transform: "translateX(100%)" },
          "80%": { transform: "translateX(-6%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "bounce-right": {
          "0%": { transform: "translateX(0%)" },
          "80%": { transform: "translateX(106%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "bounce-little": {
          "0%, 100%": {
            transform: "translateY(-10%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "bounce-little": "bounce-little 1s infinite",
        bouncing: "bounce 300ms ease-in-out",
        "bounce-left": "bounce-left 400ms ease-in-out forwards",
        "bounce-right": "bounce-right 400ms ease-in-out forwards",

        "fade-in-100": "fade-in 100ms ease-out",
        "fade-out-100": "fade-out 100ms ease-out",
        "fade-in-200": "fade-in 200ms ease-out",
        "fade-out-200": "fade-out 200ms ease-out",
        "fade-in-300": "fade-in 300ms ease-out",
        "fade-out-300": "fade-out 300ms ease-out",

        "translate-fade-in-100": "translate-fade-in 100ms",
        "translate-fade-in-bottom-100": "translate-fade-in-bottom 100ms",
        "translate-fade-in-200": "translate-fade-in 200ms",
        "translate-fade-in-bottom-200": "translate-fade-in-bottom 200ms",
        "translate-fade-in-300": "translate-fade-in 300ms",
        "translate-fade-in-bottom-300": "translate-fade-in-bottom 300ms",
      },

      boxShadow: {
        /** 팝업 그림자 */
        popup: "0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
      },
      dropShadow: {
        /** 팝오버 그림자 */
        popover: "0px 0px 8px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [...plugins],
}
export default config
