import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import techsColor from "../../assets/datas/techsColor.json"

function Project ( { project } ) {

	const [currentImage, setCurrentImage] = useState(0);
	const [selectedSection, setSelectedSection] = useState("Description");

	const nextImage = () => {
		setCurrentImage((prev) => (prev + 1) % project.images.length);
	};

	const prevImage = () => {
		setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
	};

	return (
		<motion.div 
			className="flex flex-col md:flex-row bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6"
			whileHover={{ scale: 1.02 }}
		>
			{/* Carrousel d'images agrandi */}
			<div className="relative w-full md:w-2/5">
				<motion.img
					key={currentImage}
					src={project.images[currentImage]}
					alt={project.title}
					className="w-full h-80 object-cover rounded-lg"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				/>
				<button
					className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600 transition"
					onClick={prevImage}
				>
					<ChevronLeft size={24} />
				</button>
				<button
					className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600 transition"
					onClick={nextImage}
				>
					<ChevronRight size={24} />
				</button>

				{/* Petites bulles indicatrices */}
				<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
					{project.images.map((_, index) => (
						<div 
							key={index} 
							className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImage === index ? 'bg-white scale-110' : 'bg-gray-500'}`}
						/>
					))}
				</div>
			</div>

			{/* Contenu du projet avec sections cliquables */}
			<div className="p-6 md:w-3/5 flex flex-col">
				<h3 className={`text-3xl font-bold text-gray-200`}>{project.title}</h3>
				<p className="text-gray-400 font-semibold text-xl">{project.date}</p>

				{/* Navigation entre sections */}
				<div className="flex space-x-4 mt-4 border-b border-gray-600 pb-2">
					{Object.keys(project.sections).map((section) => (
						<button
							key={section}
							className={`text-lg font-semibold transition-colors duration-300 ${
								selectedSection === section ? `text-${project.color} border-b-2 border-${project.color}` : "text-gray-400"
							}`}
							onClick={() => setSelectedSection(section)}
						>
							{section}
						</button>
					))}
				</div>

				{/* Contenu dynamique */}
				<motion.p 
					key={selectedSection}
					className="text-gray-300 mt-4 text-lg"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					{project.sections[selectedSection]}
				</motion.p>

				{/* Technologies utilisées */}
				<div className="mt-6 flex flex-wrap gap-2">
					{project.tech.map((tech, index) => (
						<motion.span 
							key={index} 
							className={`px-4 py-2 text-sm font-semibold ${techsColor[tech]?.bg} text-gray-200 rounded-lg shadow-md`}
							whileHover={{ scale: 1.1 }}
						>
							{tech}
						</motion.span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default Project;
