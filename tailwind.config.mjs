/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 60s linear infinite",
      },
      colors: {
        "azure-radiance": {
          50: "#eef7ff",
          100: "#d8edff",
          200: "#badfff",
          300: "#8bcdff",
          400: "#54b0ff",
          500: "#2c8dff",
          600: "#2175fb",
          700: "#0e57e7",
          800: "#1246bb",
          900: "#153f93",
          950: "#122759",
        },
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      cursor: {
        handcursor: "url(/cursor.png) 25 25, pointer",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
