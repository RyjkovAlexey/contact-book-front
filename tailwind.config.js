/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			gridTemplateRows: {
				'contact-page-template': '5% 5% 90%',
			},
			gridAutoRows: {
				'grid-auto-1f': '50px',
			},
			gridAutoColumns: {
				'grid-auto-1fr': '1fr',
			},
		},
	},
	plugins: [],
};