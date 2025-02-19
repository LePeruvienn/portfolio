import { FaChess, FaGamepad } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";

function Hobbys() {
	const hobbies = [
		{
			title: "Échecs",
			description: "Petit joueur amateur se défend bien avec sa Caro-Kann :)",
			color: "teal-400",
			icon: <FaChess className="text-white" size={24} />,
		},
		{
			title: "Jeux vidéo",
			description: "De CS, LoL aux souls, j'ai toujours adorés les jeux vidéos.",
			color: "indigo-400",
			icon: <FaGamepad className="text-white" size={24} />,
		},
		{
			title: "Musique",
			description: "La musique c'est la vie ... J'aime beaucoup Nujabes.",
			color: "purple-400",
			icon: <FaMusic className="text-white" size={24} />,
		},
	];

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
			{hobbies.map((hobby, index) => (
				<div
					key={index}
					className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-6"
				>
					{/* Cercle avec icône */}
					<div className={`w-12 h-12 rounded-full flex flex-shrink-0 items-center justify-center bg-${hobby.color}`}>
						{hobby.icon}
					</div>

					{/* Texte */}
					<div>
						<h4 className={`text-xl font-semibold text-${hobby.color}`}>{hobby.title}</h4>
						<p className="text-gray-300">{hobby.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default Hobbys;
