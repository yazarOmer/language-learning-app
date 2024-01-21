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
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    safelist: [
        "bg-[#222831]",
        "bg-[#393E46]",
        "bg-[#8785A2]",
        "bg-[#3F72AF]",
        "bg-[#AA96DA]",
        "bg-[#3282B8]",
        "bg-[#E84545]",
        "bg-[#e29578]",
        "bg-[#58cc02]",
        "bg-[#ce82ff]",
        "bg-[#00cd9c]",
        "bg-[#1cb0f6]",
        "bg-[#ff86d0]",
        "bg-[#cc348d]",
        "bg-[#ff9600]",
        "bg-[#ce82ff]",
    ],
    plugins: [],
};
