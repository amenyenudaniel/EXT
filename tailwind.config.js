/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          100: 'hsla(249, 14%, 74%, 1)',
          200: 'hsla(0, 0%, 57%, 1)',
          400: 'hsla(246, 29%, 33%, 1)',
          600: 'hsla(246, 74%, 15%, 1)',
          50: 'hsla(240, 14%, 92%, 1)',
        },
        gray: {
          200: 'hsla(204, 11%, 75%, 1)',
          300: 'hsla(0, 0%, 38%, 1)',
          400: 'hsla(240, 1%, 38%, 1)',
        },
        black: {
          100: 'hsla(0, 0%, 0%, 0.75)',
          400: 'hsla(0, 0%, 26%, 0.8)',
          600: 'hsla(0, 0%, 8%, 1)',
        },
        'pastel-bg': 'hsla(240, 100%, 99%, 1)',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Sora: ['Sora', 'sans-serif'],
        'Work-Sans': ['Work Sans', 'sans-serif'],
      },
      height: {
        'screen-16': 'calc(100vh - 84px)',
      },
      fontSize: {
        h6: '16px',
        h2: '64px',

        h6: '16px',
        h5: '24px',
        h2: '64px',
      },
    },
    screens: {
      xs: '375px',
      ss: '620px',
      sm: '768px',
      md: '1200px',
      lg: '1300px',
      regular: '1440px',
      xl: '1700px',
    },
  },
  plugins: [],
}
