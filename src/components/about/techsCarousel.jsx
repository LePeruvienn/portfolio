import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TechCarousel = ({ techs }) => {

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
