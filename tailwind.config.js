module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', '-apple-system', 'Segoe UI', 'Helvetica', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#000000',
        lightblue: '#1896ea',
        primaryblue: '#0e78d5',
        navyblue: '#1b365d',
        red: '#f44336',
        lightgray: 'rgba(0, 0, 0, 0.54)',
        darkgray: 'rgba(0, 0, 0, 0.87)',
      },
      backgroundImage: () => ({
        kidsloop:
          "url('https://auth.kidsloop.live/d558f67ce9c47ef299bdb14ed8298286.png')",
      }),
      spacing: {
        12.5: '50px',
        100: '412px',
        106: '542px',
      },
      borderRadius: {
        large: '12px',
      },
      borderWidth: {
        1: '1.5px',
      },
      boxShadow: {
        normal: '0 0 20px 5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
