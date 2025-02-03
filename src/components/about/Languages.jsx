import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const languages = [
	{ 
		lang: "Français", 
		level: "Langue maternelle", 
		flag: "🇫🇷", 
		color: "blue-400"
	},
	{ 
		lang: "Espagnol", 
		level: "Langue maternelle", 
		flag: "🇪🇸", 
		color: "red-400"
	},
	{ 
		lang: "Anglais", 
		level: "Très à l'aise", 
		flag: "🇬🇧", 
		color: "green-400"
	},
	{ 
		lang: "Allemand", 
		level: "Très basique", 
		flag: "🇩🇪", 
		color: "gray-400"
	},
];

function LanguageCarousel() {

	return (
		<div className="relative w-full max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-8">
			{/* Carrousel de langues */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
				{languages.map((language, index) => (
					<div
						key={index}
						className={`flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out`}
					>
						<div className="text-5xl mb-3">
							{language.flag}
						</div>
						<h3 className={`text-2xl font-bold text-${language.color}`}>
							{language.lang}
						</h3>
						<p className="text-gray-300 text-md">{language.level}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default LanguageCarousel;
