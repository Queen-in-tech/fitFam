/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lemon: "#D0FD3E",
        darkGray: "#2C2C2E",
        dark: "#1C1C1E",
      },
      backgroundImage: {
        signIn:
          "url(https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)",
        logIn:
          "url('https://images.unsplash.com/photo-1584380931214-dbb5b72e7fd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bSUyMGdpcmx8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60')",
      },
    },
  },
  plugins: [],
};
