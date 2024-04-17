/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'animal': "url('/assets/animals/bg.jpg')",
			}),
		},
	},
	plugins: [],
}

