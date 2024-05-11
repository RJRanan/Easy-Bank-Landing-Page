/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure Tailwind looks at index.html for classes
    "./src/**/*.{js,ts,jsx,tsx}", // Look for classes in all React components
  ],
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(136, 65%, 51%)",
        "bright-cyan": "hsl(192, 70%, 51%)",
        "grayish-blue": "hsl(233, 8%, 62%)",
        "dark-blue": "hsl(233, 26%, 24%)",
        "light-grayish-blue": "hsl(220, 16%, 96%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        introDesktop: "url(src/assets/design/desktop-design.jpg)",
      },
    },
  },
  plugins: [],
};
