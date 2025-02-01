import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Header () {

	const { t, i18n } = useTranslation ("home");

	// State for the scroll position
	const [scrollY, setScrollY] = useState (0);

	// Index of the current text selected
	const [index, setIndex] = useState (0);

	// List of the used texts
	const texts = t ("skills", { returnObjects: true });

	// Track the current scroll position
	useEffect ( () => {
		const handleScroll = () => {
			setScrollY (window.scrollY);
		};

		window.addEventListener ("scroll", handleScroll);

		// Cleanup listener on unmount
		return () => window.removeEventListener ("scroll", handleScroll);
	}, []);

	// Switch the current text every 2 seconds
	useEffect ( () => {
		const interval = setInterval ( () => {
			setIndex ( (prev) => (prev + 1) % texts.length);
		}, 2000);

		// Cleanup interval on unmount
		return () => clearInterval (interval);
	}, [texts.length]);


	// Making the arrow scroll to the navbar
	const scrollToNavBar = () => {
		
		// Get the navbar element
		const navbarID = "navbar"
		const element = document.getElementById (navbarID);

		// throw error if we dont found the navbar
		if (!element)
			return console.error ("home/Header.jsx ERRROR : Navbar ID doest not match any element !!");

		// Scroll to the navbar
		element.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<header>
			<motion.div
				className="!z-0 flex flex-col items-center justify-center h-screen"
				style={{ transform: `translateY(-${scrollY * 1}px)` }} // Adjust scroll speed
				initial={{ y: 0 }}
				animate={{ y: +scrollY * 1 }}
				transition={{ type: "spring", stiffness: 100 }}
			>
				<div className="relative bg-black bg-opacity-50 max-w-full py-10 px-20 text-white flex flex-col items-center justify-center shadow-lg">
					<h1 className="text-7xl sm:text-10xl font-bold">
						Arthur
					</h1>
					<h1 className="text-7xl sm:text-10xl font-bold">
						Pinel <span className="animate-pulse"> _ </span>
					</h1>
					<AnimatePresence>
						<p className="transition ease-in-out delay-0 flex items-center justify-center mt-10 text-2xl sm:text-4xl text-gray-300">
							<span className="mr-2"> { t ("ido") }</span>
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

				{/* Bouncing arrow element */}
				<div 
					onClick={scrollToNavBar}
					className="
						animate-bounce 
						w-14 mt-40 p-3
						rounded-full
						bg-gray-1000
						border-2 border-indigo-400
						cursor-pointer
					"
				>
					<svg 
						className="fill-indigo-200" 
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 16 16"
					>
						<path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
					</svg>
				</div>
			</motion.div>
		</header>
	);
}

export default Header;
