// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/*.{html,js}"],
//   theme: {
//     screens: {
//       sm: '640px',
//       md: '768px',
//       lg: '1024px',
//       xl: '1280px',
//       '2xl': '1536px',
//     },
//     container: {
//       center: true,
//       padding: '1rem', // Optional: internal padding
//       screens: {
//         xl: '1350px', // max-width will be 1350px on xl+
//       },
//     },
//     extend: {},
//   },
//   plugins: [],
// }








/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        DEFAULT: '1350px', // Applies 1350px max width on all screen sizes
      },
    },
    extend: {},
  },
  plugins: [],
}