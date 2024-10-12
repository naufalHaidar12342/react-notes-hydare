// tailwind.config.js
// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				notes: {
					dark: "#242424",
					light: "#f5f5f5",
					primary: "#61dafbaa",
					secondary: "#646cffaa",
				},
			},
		},
	},
	darkMode: "class",
	plugins: [nextui({})],
};
