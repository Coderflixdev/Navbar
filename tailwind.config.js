export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'glow-border': 'glow-border 4s linear infinite',
      },
      keyframes: {
        'glow-border': {
          '0%, 100%': {
            borderColor: 'rgba(0, 255, 255, 0.5)', // Cyan
            boxShadow: '0 0 20px 10px rgba(0, 255, 255, 0.5)', // Spread-out cyan shadow
          },
          '50%': {
            borderColor: 'rgba(255, 0, 255, 0.7)', // Pink
            boxShadow: '0 0 30px 15px rgba(255, 0, 255, 0.7)', // Spread-out pink shadow
          },
        },
      },
    },
  },
  plugins: [],
}