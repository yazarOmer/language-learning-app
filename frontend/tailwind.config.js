/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-bg": "#131f24",
                "dark-border": "#37464f",
                "dark-text-white": "#dce6ec",
                "dark-text-title": "#f1f7fb",
                "dark-bg-hover": "#202f36",
                "active-border": "#3f85a7",
                "light-blue": "#49c0f8",
            },
        },
    },
    plugins: [],
};
