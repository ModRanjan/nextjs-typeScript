const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            primary: colors.indigo,
            secondary: colors.yellow,
            error: colors.red,
            neutral: colors.gray,
            white: colors.white,
        },

        borderRadius: {
            none: '0',
            sm: '.125rem',
            DEFAULT: '.25rem',
            lg: '.5rem',
            full: '9999px',
        },
        extend: {
            rotate: {
                9: '9deg',
            },
        },
    },
    plugins: [],
};
