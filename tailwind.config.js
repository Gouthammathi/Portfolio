module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,ttf}"],
  theme: {
    extend: {
      animation: {
        'word-rotation': 'wordRotation 10s infinite steps(1)',
        'fade-in': 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        wordRotation: {
          '0%, 20%': { transform: 'translateY(0)' },
          '25%, 45%': { transform: 'translateY(-100%)' },
          '50%, 70%': { transform: 'translateY(-200%)' },
          '75%, 95%': { transform: 'translateY(-300%)' },
          '100%': { transform: 'translateY(-400%)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        glitar: ['Glitar', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
