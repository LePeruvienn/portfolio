import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
	// State for the scroll position
	const [scrollY, setScrollY] = useState(0);

	// Index of the current text selected
	const [index, setIndex] = useState(0);

	// List of the used texts
	const texts = ["Javascript", "React", "Game dev"];

	// Track the current scroll position
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup listener on unmount
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Switch the current text every 2 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % texts.length);
		}, 2000);

		// Cleanup interval on unmount
		return () => clearInterval(interval);
	}, [texts.length]);

	return (
		<header>
			<motion.div
				className="!z-0 flex items-center justify-center h-screen"
				style={{ transform: `translateY(-${scrollY * 1}px)` }} // Adjust scroll speed
				initial={{ y: 0 }}
				animate={{ y: +scrollY * 1 }}
				transition={{ type: "spring", stiffness: 100 }}
			>
				<div className="relative bg-black bg-opacity-50 text-white w-144 flex flex-col items-center justify-center shadow-lg">
					<h1 className="text-10xl font-bold">
						Arthur
					</h1>
					<h1 className="text-10xl font-bold">
						Pinel <span className="animate-pulse"> _ </span>
					</h1>
					<AnimatePresence>
						<p className="transition ease-in-out delay-0 flex items-center justify-center mb-10 text-4xl text-gray-300">
							<span className="mr-2">I do</span>
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
			</motion.div>
		</header>
	);
}

export default Header;
