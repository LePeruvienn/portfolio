import { FaChess, FaGamepad } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";

function Hobbys() {
	const hobbies = [
		{
			title: "Échecs",
			description: "blablablabla blabla blablabla",
			color: "teal-400",
			icon: <FaChess className="text-white" size={24} />,
		},
		{
			title: "Jeux vidéo",
			description: "blablablabla blabla blablabla",
			color: "indigo-400",
			icon: <FaGamepad className="text-white" size={24} />,
		},
		{
			title: "Musique",
			description: "blablablabla blabla blablabla",
			color: "purple-400",
			icon: <FaMusic className="text-white" size={24} />,
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{hobbies.map((hobby, index) => (
				<div
					key={index}
					className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-6"
				>
					{/* Cercle avec icône */}
					<div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${hobby.color}`}>
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
