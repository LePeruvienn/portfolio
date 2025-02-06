import { useState } from "react";
import { motion } from "framer-motion";

const languages = [
	{ 
		lang: "Français", 
		level: "Langue maternelle", 
		flag: "🇫🇷", 
		color: "text-blue-400"
	},
	{ 
		lang: "Espagnol", 
		level: "Langue maternelle", 
		flag: "🇪🇸", 
		color: "text-red-400"
	},
	{ 
		lang: "Anglais", 
		level: "C1", 
		flag: "🇬🇧", 
		color: "text-green-400"
	},
	{ 
		lang: "Allemand", 
		level: "A2", 
		flag: "🇩🇪", 
		color: "text-gray-400"
	},
];

function LanguageCarousel () {

	const [flippedCards, setFlippedCards] = useState (Array (languages.length).fill(false));

	const handleCardClick = (index) => {

		const newFlippedCards = [...flippedCards];

		newFlippedCards[index] = !newFlippedCards[index];

		setFlippedCards (newFlippedCards);
	};

	return (

		<div className="relative w-full max-w-6xl mx-auto text-center">

			{/* Carrousel de langues */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
				{languages.map((language, index) => (
					<div
						key={index}
						className="relative w-full h-48 cursor-pointer"
						onClick={() => handleCardClick(index)}
					>
						<motion.div
							className="absolute w-full h-full bg-gray-800 rounded-xl shadow-lg flex items-center justify-center"
							initial={false}
							animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
							transition={{ duration: 0.6 }}
							style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
						>
							<div
								className="absolute w-full h-full backface-hidden flex items-center justify-center"
								style={{
									backfaceVisibility: "hidden",
									transform: flippedCards[index] ? "rotateY(180deg)" : "none"
								}}
							>
								{!flippedCards[index] ? (
									<div className="text-5xl">❓</div> // Logo mystère
								) : (
									<div className="flex flex-col items-center">
										<div className="text-5xl mb-3">
											{language.flag}
										</div>
										<h3 className={`text-2xl font-bold ${language.color}`}>
											{language.lang}
										</h3>
										<p className="font-bold text-gray-400 text-md">{language.level}</p>
									</div>
								)}
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
}

export default LanguageCarousel;
