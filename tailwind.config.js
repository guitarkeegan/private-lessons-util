/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {},
    colors: {
      first: "#445BDC",
      second: "#3F89F2",
      third: "#543FF2",
      fourth: "#3CB0E8",
      fifth: "#7F3CE8"
    }
  },
  plugins: [],
}