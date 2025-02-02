
function Projects() {

	const projects = [
		{
			title: 'Projet 1: Application Web',
			description: 'An application to manage tasks and track performance, built with React and Node.js.',
			imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
			badges: ['React', 'Node.js', 'API REST'],
			color: "text-teal-400"
		},
		{
			title: 'Projet 2: Jeu Vidéo 3D',
			description: 'A 3D video game with innovative mechanics and smooth UI, developed using Unity and C#.',
			imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
			badges: ['Unity', 'C#', '3D Graphics'],
			color: "text-indigo-400"
		},
		{
			title: 'Projet 3: Site e-Commerce',
			description: 'An e-commerce site with advanced filtering and dynamic shopping cart using Vue.js and Firebase.',
			imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
			badges: ['Vue.js', 'Firebase', 'e-Commerce'],
			color: "text-purple-400"
		},
	];

	// Define fixed colors for each technology
	const badgeColors = {
		"React": "bg-blue-500",
		"Node.js": "bg-green-500",
		"API REST": "bg-yellow-500",
		"Unity": "bg-gray-500",
		"C#": "bg-purple-500",
		"3D Graphics": "bg-indigo-500",
		"Vue.js": "bg-green-400",
		"Firebase": "bg-orange-500",
		"e-Commerce": "bg-pink-500"
	};

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
							<h3 className={`text-xl font-semibold ${project.color} group-hover:scale-105 mb-2 transition`}>
								{project.title}
							</h3>
							<p className="text-gray-300">{project.description}</p>
						</div>

						{/* Technology Badges */}
						<div className="flex flex-wrap justify-center gap-2 mt-4">
							{project.badges.map((badge, badgeIndex) => (
								<span
									key={badgeIndex}
									className={`px-4 py-2 text-sm font-semibold text-white rounded-full ${
										badgeColors[badge] || "bg-gray-600"
									}`}
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
