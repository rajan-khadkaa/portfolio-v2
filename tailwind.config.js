/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      // Keep this empty if you're not extending anything else
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Replace the default sans font
      },
      colors: {
        white: "hsl(var(--clr-white))",
        black: "hsl(var(--clr-black))",
        "btn-main": "hsl(var(--btn-main))",
        "btn-opt": "hsl(var(--btn-opt))",
        "btn-cta": "hsl(var(--btn-cta))",
        "txt-cta": "hsl(var(--txt-cta))",
        bdr: "hsl(var(--bdr))",
        "bdr-opt": "hsl(var(--bdr-opt))",
        "txt-highlight": "hsl(var(--txt-highlight))",
        "txt-primary": "hsl(var(--txt-primary))",
        "txt-secondary": "hsl(var(--txt-secondary))",
        "txt-placeholder": "hsl(var(--txt-placeholder))",
        "clr-footer": "hsl(var(--clr-footer))",
      },
      boxShadow: {
        "shadow-all-sides": "0 0 8px 1px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
