/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            "fontFamily": {
                "display": ["Sigmar One", "sans serif"]
            },
            "colors": {
                "pastel": {
                    400: "#f9d445"
                },
                "toy-red": {
                    400: "#ff0017"
                }
            }
        },
    },
    plugins: [],
};
