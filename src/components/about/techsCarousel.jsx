import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function TechCarousel () {

	const techs = [
		{
			title: "React",
			color: "bg-teal-400"
		},
		{
			title: "Node.js",
			color: "bg-indigo-400"
		},
		{
			title: "Python",
			color: "bg-purple-400"
		},
		{
			title: "JavaScript",
			color: "bg-orange-400"
		},
		{
			title: "CSS",
			color: "bg-red-400"
		},
		{
			title: "HTML",
			color: "bg-yellow-400"
		},
		{
			title: "Docker",
			color: "bg-green-400"
		},
		{
			title: "Git",
			color: "bg-blue-400"
		}
	];


	const carouselRef = useRef (null);
	const [carouselWidth, setCarouselWidth] = useState (0);
	const controls = useAnimation ();

	// Dupliquer les éléments pour simuler le défilement infini
	const duplicatedTechs = [...techs, ...techs, ...techs];

	// Calculer la largeur du carrousel
	useEffect ( () => {
		if (carouselRef.current) {
			setCarouselWidth( carouselRef.current.scrollWidth / 2.5); // Ajuster la division pour la vitesse
		}
	}, []);

	// Démarrer l'animation
	useEffect ( () => {
		controls.start ({
			x: -carouselWidth,
			transition: {
				duration: 20,
				repeat: Infinity,
				repeatType: "loop",
				ease: "linear",
			},
		});
	}, [carouselWidth, controls]);

	return (
		<div className="overflow-hidden relative my-8">
			<motion.div
				ref={carouselRef}
				className="flex"
				animate={controls}
			>
				{duplicatedTechs.map(({ title, color }, index) => (
					<motion.div
						key={index}
						className={`${color} p-6 rounded-lg shadow-lg text-center hover:scale-110 transition-all duration-300 w-32 sm:w-64 flex-shrink-0 mx-4`}
					>
						<h3 className="text-xl font-semibold text-white">{title}</h3>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default TechCarousel;
