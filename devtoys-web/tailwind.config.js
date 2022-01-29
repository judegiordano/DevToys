/* eslint-disable @typescript-eslint/no-var-requires */
// const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{jsx,tsx}"],
	theme: {
		fontFamily: {
			"content": ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"]
		},
		// colors: {
		// 	"white": "#fffff",
		// 	"blue": "#1976d2"
		// },
		extend: {},
	},
	plugins: [],
};
