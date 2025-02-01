import React, { useState, useEffect } from 'react';
import Textbox from './Textbox.jsx';

function Main() {

	// Set scrollY state
	const [scrollY, setScrollY] = useState(0);

	// Link event scroll
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		// Cleanup event listener on component unmount
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Calculate the percentage of the scroll position
	const scrollPercentage = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
	
	// Calculate the gradient colors based on the scroll position
	const gradientStart = 
		`rgb(${Math.min(255, 46 + 200 * scrollPercentage)}, 
		${Math.min(93, 93 + 30 * scrollPercentage)}, 
		${Math.min(168, 168 + 50 * scrollPercentage)})`;

	const gradientEnd = 
		`rgb(${Math.min(100, 90 + 100 * scrollPercentage)}, 
		${Math.max(13, 76 - 60 * scrollPercentage)}, 
		${Math.max(180, 118 + 40 * scrollPercentage)})`;

	return (
		<main>
			<div
				className="flex justify-center items-center sm:min-h-screen"
				style={{
					background: `linear-gradient(to top left, ${gradientStart} 0%, ${gradientEnd} 100%)`,
					transition: 'background 0.3s ease' // Smooth transition for the gradient change
				}}
			>
				<Textbox />
			</div>
		</main>
	);
}

export default Main;
