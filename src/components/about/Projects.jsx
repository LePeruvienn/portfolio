import techsColor from "../../assets/datas/techsColor.json"

function Projects () {

	const projects = [
		{
			title: "Jeu de cartes",
			description: "Petit jeu de cartes automatique développé en C/C++ sur Replit. Construisez votre deck parmi les nombreuses cartes disponibles et combattez contre un autre joueur ou contre des bots. Que le meilleur gagne !",
			imageUrl: "/portfolio/img/projets/cartes-1.png", // Replace with actual image URL
			badges: ["C/C++"],
			color: "text-teal-400"
		},
		{
			title: "FEURnite",
			description: "Un clone du jeu \"Fortnite\" avec des canards . Un jeu multijoueur battle royale qui prend place sur des îles volantes, attention à la chute des îles ! Développé avec Unity et Photon pour le multijoueur.",
			imageUrl: "/portfolio/img/projets/feurnite-1.png", // Replace with actual image URL
			badges: ["Unity", "C#", "Photon"],
			color: "text-indigo-400"
		},
		{
			title: "Plateformer 2D",
			description: "Petit jeu de plateforme 2D basique, développé en JavaScript Vanilla avec l'API Canvas. J'ai moi-même développé la gestion des animations, des collisions et de la caméra.",
			imageUrl: "/portfolio/img/projets/platformer-1.png", // Replace with actual image URL
			badges: ["JavaScript", "Canvas API"],
			color: "text-purple-400"
		},
	];

	return (
		<div className="space-y-8 p-8">
			<div className="flex justify-around gap-8 flex-wrap">
				{projects.map((project, index) => (
					<div
						key={index}
						className="flex flex-col items-center p-4 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition duration-300 group w-full sm:w-80"
					>
						{/* Project Image */}
						<div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
							<img
								src={project.imageUrl}
								alt={project.title}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							/>
						</div>

						{/* Title and Description */}
						<div className="text-center mb-4">
							<h3 className={`text-2xl font-semibold ${project.color} group-hover:scale-105 mb-2 transition`}>
								{project.title}
							</h3>
							<p className="text-gray-300">{project.description}</p>
						</div>

						{/* Technology Badges */}
						<div className="flex flex-wrap justify-center gap-2 mt-4">
							{project.badges.map((badge, badgeIndex) => (
								<span
									key={badgeIndex}
									className={`px-4 py-2 text-sm font-semibold text-white rounded-full ${techsColor[badge].bg}`}
								>
									{badge}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;
