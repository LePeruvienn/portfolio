import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Using react-icons for icons

function DropdownList () {

	const [openIndex, setOpenIndex] = useState(null); // Track which hobby is open

	const hobbys = [
		{
			title: "Graphisme & Design",
			desc: "J'ai toujours déssiné, et je trouve ça encore plus cool sur PC !",
			color: "teal-400",
			image: "https://via.placeholder.com/150", // Placeholder image URL
			detailedDesc: "Detailed description about playing chess. Chess is a strategic board game that involves deep thinking and planning."
		},
		{
			title: "Edition Vidéo",
			desc: "J'aime bien la musique et les manga, pourquoi pas faire les deux ?",
			color: "indigo-400",
			image: "https://via.placeholder.com/150", // Placeholder image URL
			detailedDesc: "Detailed description about photography. Photography is the art of capturing light with a camera, typically via a digital sensor or film, to create an image."
		},
		{
			title: "Reading",
			desc: "Exploring new worlds through books.",
			color: "purple-400",
			image: "https://via.placeholder.com/150", // Placeholder image URL
			detailedDesc: "Detailed description about reading. Reading is a multifaceted process involving word recognition, comprehension, fluency, and motivation."
		},
	];

	const toggleDropdown = (index) => {
		setOpenIndex(openIndex === index ? null : index); // Toggle dropdown
	};

	return (
		<div>
			<ul className="space-y-4">
				{hobbys.map((hobby, index) => (
					<li 
						key={index}
						className={`flex flex-col items-start p-4 rounded-lg border-l-4 border-${hobby.color} pl-4 bg-gray-800 hover:bg-gray-700 transition duration-300`}
					>
						{/* Clickable Header */}
						<div 
							className="flex items-center justify-between w-full cursor-pointer"
							onClick={() => toggleDropdown(index)}
						>
							<div className="flex items-center gap-4">
								<div className={`flex flex-shrink-0 w-6 h-6 rounded-full bg-${hobby.color}`}></div>
								<div className="my-4">
									<h4 className={`font-semibold text-xl text-${hobby.color}`}>
										{hobby.title}
									</h4>
									<p className="text-gray-300">
										{hobby.desc}
									</p>
								</div>
							</div>
							{/* Arrow Icon */}
							<FaChevronUp className={`ml-2 flex flex-shrink-0 text-gray-400 ${openIndex === index ? "rotate-0" : "rotate-180"} transition`} size={20} />
						</div>

						{/* Dropdown Content with Animation */}
						<div
							className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"}`}
						>
							<div className="mt-4 flex flex-col md:flex-row items-start gap-4 w-full">
								<img src={hobby.image} alt={hobby.title} className="w-48 h-48 object-cover rounded-lg"/>
								<p className="text-gray-300 flex-1">
									{hobby.detailedDesc}
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default DropdownList;
