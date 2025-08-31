/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: "rgb(15, 24, 42)",
        light: "#ffffff",
      },
      colors: {
        blue: "#007AFF",
        green: "#00C676",
        lime: "#E2FF00",
        black: "#222222",
        primary: "rgba(var(--color-primary), <alpha-value>)",
        secondary: "rgba(var(--color-secondary), <alpha-value>)",
        point: "rgba(var(--color-point), <alpha-value>)",
        foreground: "rgba(var(--foreground-rgb), <alpha-value>)",
        background: "rgba(var(--background-rgb), <alpha-value>)",
      },
      zIndex: {
        "modal-overlay": "899",
        "modal-content": "900",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  // 정적 내보내기를 위한 설정
  future: {
    hoverOnlyWhenSupported: true,
  },
};
