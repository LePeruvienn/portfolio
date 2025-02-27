import { useTranslation } from "react-i18next";
import { FaChess, FaGamepad } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";

function Hobbys() {

	const { t } = useTranslation("about");

	const hobbiesAssets = [
		{
			color: "teal-400",
			icon: <FaChess className="text-white" size={24} />,
		},
		{
			color: "indigo-400",
			icon: <FaGamepad className="text-white" size={24} />,
		},
		{
			color: "purple-400",
			icon: <FaMusic className="text-white" size={24} />,
		},
	];

	const hobbiesData = t ("hobbies", { returnObjects: true });

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
			{hobbiesData.map((hobby, index) => (
				<div
					key={index}
					className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-6"
				>
					{/* Cercle avec icône */}
					<div className={`w-12 h-12 rounded-full flex flex-shrink-0 items-center justify-center bg-${hobbiesAssets[index].color}`}>
						{hobbiesAssets[index].icon}
					</div>

					{/* Texte */}
					<div>
						<h4 className={`text-xl font-semibold text-${hobbiesAssets[index].color}`}>{hobby.title}</h4>
						<p className="text-gray-300">{hobby.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default Hobbys;
