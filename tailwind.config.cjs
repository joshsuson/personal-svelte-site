/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'persian-green': {
					DEFAULT: '#03999E',
					50: '#5DF7FC',
					100: '#49F6FC',
					200: '#21F4FB',
					300: '#05E7EE',
					400: '#04C0C6',
					500: '#03999E',
					600: '#026467',
					700: '#012E30',
					800: '#000000',
					900: '#000000'
				},
				supernova: {
					DEFAULT: '#F9C703',
					50: '#FEEFB5',
					100: '#FEEBA1',
					200: '#FDE279',
					300: '#FDDA51',
					400: '#FCD128',
					500: '#F9C703',
					600: '#C29B02',
					700: '#8A6E02',
					800: '#534201',
					900: '#1B1600'
				}
			}
		}
	},
	plugins: []
};
