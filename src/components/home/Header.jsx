import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header () {

	// index of the current text selected
	const [index, setIndex] = useState(0);

	// Lise of the used texts
	const texts = [
		"Javascript",
		"React",
		"Game dev"
	];

	// Switch the current text
	// Automatically switch text every 1 second
	useEffect(() => {

		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % texts.length);

		}, 2000); // 1 second interval

		// Cleanup interval on unmount
		return () => clearInterval(interval);
	}, [texts.length]);

	return (
		<header>
			<div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black">
				<div className="relative bg-black bg-opacity-50 text-white w-144 flex flex-col items-center justify-center shadow-lg">
					<h1 className="text-10xl font-bold">
						Arthur
					</h1>
					<h1 className="text-10xl font-bold">
						Pinel <span className="animate-pulse"> _ </span>
					</h1>
					<AnimatePresence>
						<p className="transition flex items-center justify-center mb-10 text-4xl text-gray-300">
							<span className="mr-2">
								I do
							</span>
							<motion.span
								key={texts[index]}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 1.5 }}
							>
								{texts[index]}
							</motion.span>
						</p>
					</AnimatePresence>
				</div>
			</div>
		</header>
	)
}

export default Header
