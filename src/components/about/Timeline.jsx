
function Timeline () {

	// Datas
	const timelineData = [
		{
			"year": "2022",
			"title": "BUT Informatique",
			"context": "Université Paris-Saclay",
			"description": "Après un baccalauréat général et une année en Mesures Physiques, j'ai finalement décidé de me lancer dans l'informatique à l'IUT d'Orsay !",
			"color": "teal-400",
		},
		{
			"year": "2024 - 3 mois",
			"title": "Stage Développeur Gameplay",
			"context": "WebGames",
			"description": "Ma première expérience dans le jeu vidéo ! Ma mission était de développer un outil de création de jeux web en utilisant un moteur de jeu propriétaire.",
			"color": "indigo-400",
		},
		{
			"year": "2024",
			"title": "Développeur Freelance",
			"context": "WebGames",
			"description": "Suite à un stage très réussi, j'ai poursuivi ma collaboration avec l'entreprise en tant que prestataire indépendant.",
			"color": "purple-400",
		},
		{
			"year": "2025 - 4 mois",
			"title": "Stage Développeur Multijoueur",
			"context": "WebGames",
			"description": "Après une première expérience enrichissante, j’ai souhaité prendre davantage de responsabilités au sein de l’entreprise et approfondir mes connaissances sur le développement de jeux en ligne.",
			"color": "purple-500",
		}
	];

	// Color map, or else there will be bugs
	const colorMap = {
		"teal-400": "border-teal-400",
		"indigo-400": "border-indigo-400",
		"purple-400": "border-purple-400",
		"purple-500": "border-purple-500",
	};


	return (

		<div className="relative space-y-12 pb-12">
			<div className="absolute left-1/2 w-1 h-full bg-gray-700 transform -translate-x-1/2"></div>

			{timelineData.map((item, index) => (
				<div key={index} className={`relative flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
					<div className="md:w-5/12 p-6 bg-gray-800 rounded-lg shadow-lg text-center md:text-left">
					<h3 className={`mb-2 pb-1 text-xl font-bold border-b-2 ${`border-${item.color}`}`}>{item.title}</h3>
						<p className="text-gray-400 font-semibold">{item.context}</p>
						<p className="text-gray-400 italic">{item.year}</p>
						<p className="text-gray-300 mt-2">{item.description}</p>
					</div>
					<div className="hidden md:flex md:w-2/12 justify-center">
					<div className={`w-6 h-6 ${colorMap[item.color].replace("border-", "bg-")} rounded-full shadow-lg`}></div>
					</div>
					<div className="md:w-5/12"></div>
				</div>
			))}
		</div>
	)
}

export default Timeline;
