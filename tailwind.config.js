/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            pizza: "Roboto Mono, monospace",
            sans: "Roboto Mono, monospace",
        },
        extend: {
            colors: {
                pizza: "#123456",
            },
            height: {
                screen: "100dvh",
            },
        },
    },
    plugins: [],
};
