/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	safelist: [
		"bg-blue-400",
		"bg-green-400",
		"bg-purple-400",
		"bg-purple-500",
		"bg-orange-400",
		"bg-red-400",
		"bg-yellow-400",
		"bg-green-500",
		"bg-gray-600",
		"bg-blue-500",
		"bg-orange-500",
		"bg-teal-400",
		"bg-indigo-400",
		"bg-gray-800",
		"bg-indigo-500",
		"text-blue-400",
		"text-green-400",
		"text-purple-400",
		"text-purple-500",
		"text-orange-400",
		"text-red-400",
		"text-yellow-400",
		"text-green-500",
		"text-gray-600",
		"text-blue-500",
		"text-orange-500",
		"text-teal-400",
		"text-indigo-400",
		"text-gray-800",
		"text-indigo-500",
		"border-blue-400",
		"border-green-400",
		"border-purple-400",
		"border-purple-500",
		"border-orange-400",
		"border-red-400",
		"border-yellow-400",
		"border-green-500",
		"border-gray-600",
		"border-blue-500",
		"border-orange-500",
		"border-teal-400",
		"border-indigo-400",
		"border-gray-800",
		"border-indigo-500"
	],
	theme: {
		extend: {
			borderWidth: {
				'1': '1px',
			},
			width: {
				'104': '26rem',
				'112': '28rem',
				'120': '30rem',
				'128': '32rem',
				'136': '34rem',
				'144': '36rem',
				'152': '38rem',
				'160': '40rem',
				'168': '42rem',
				'176': '44rem',
				'184': '46rem',
				'192': '48rem',
				'200': '50rem',
				'208': '52rem',
				'216': '54rem',
				'224': '56rem',
				'232': '58rem',
				'240': '60rem',
				'256': '64rem',
				'288': '72rem',
				'320': '80rem',
				'384': '96rem',
				'448': '112rem',
				'512': '128rem',
			},
			height: {
				'104': '26rem',
				'112': '28rem',
				'120': '30rem',
				'128': '32rem',
				'136': '34rem',
				'144': '36rem',
				'152': '38rem',
				'160': '40rem',
				'168': '42rem',
				'176': '44rem',
				'184': '46rem',
				'192': '48rem',
				'200': '50rem',
				'208': '52rem',
				'216': '54rem',
				'224': '56rem',
				'232': '58rem',
				'240': '60rem',
				'256': '64rem',
				'288': '72rem',
				'320': '80rem',
				'384': '96rem',
				'448': '112rem',
				'512': '128rem',
			},
			fontSize: {
				'9xl': '7rem',
				'10xl': '8rem',
				'11xl': '9rem',
				'12xl': '10rem',
			},
		},
	},
	plugins: [
		require("@xpd/tailwind-3dtransforms"),
	],
}

