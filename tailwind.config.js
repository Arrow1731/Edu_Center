/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '640px',   // Small devices
      md: '768px',   // Medium devices
      lg: '1024px',  // Large devices
      xl: '1280px',  // Extra large
      '2xl': '1536px', // 2x extra large
      '3xl': '1950px', // my size
    },
    extend: {
      container: {
        center: true,  // Centers the container
        padding: '2rem',  // Adds padding to the container
        margin: '0 auto', // Ensures the container has 0 margin on top and bottom, and auto on left and right
      },
    },
  },
  plugins: [],
}