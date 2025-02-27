import { useState } from 'react';
import Navbar from './general/Navbar.jsx';
import Footer from './general/Footer.jsx';
import Project from './projects/Project.jsx';
import projectsData from "../assets/datas/projects.json";
import { useTranslation } from 'react-i18next';
import techsColor from "../assets/datas/techsColor.json"

function Projects () {

	const { t } = useTranslation ("projects");
	const [selectedTechs, setSelectedTechs] = useState([]);

	const techs = [...new Set(projectsData.flatMap(project => project.tech))];

	const toggleTech = (tech) => {
		setSelectedTechs(prev => 
			prev.includes(tech) 
				? prev.filter(t => t !== tech) 
				: [...prev, tech]
		);
	};

	const filteredProjects = selectedTechs.length === 0
		? projectsData
		: projectsData.filter(project => selectedTechs.every(tech => project.tech.includes(tech)));

	return (
		<>
			<Navbar/>
			<div className="md-container">

				<h1 className="text-6xl text-white">
					{ t ("projectsTitle") }
				</h1>
				<p>
					{ t ("projectsDescription") }
				</p>

				{/* Filter Buttons */}
				<div className="flex flex-wrap gap-2 mb-6">
					{techs.map((tech, index) => (
						<button 
							key={index} 
							onClick={() => toggleTech(tech)}
							className={`px-4 py-2 rounded-lg text-white transition ${selectedTechs.includes(tech) ? `border-gray-400 border-2 ${techsColor[tech]?.bg}` : 'bg-gray-700'}`}
						>
							{tech}
						</button>
					))}
				</div>

				<div className="space-y-10">
					{filteredProjects.length > 0 ? (
						filteredProjects.map((project, index) => (
							<Project key={index} project={project} />
						))
					) : (
						<p className="text-white text-xl">
							{ t ("noProjectsFound") }
						</p>
					)}
				</div>

				<p className="mt-20">
					<strong
						dangerouslySetInnerHTML={{ __html: t ("githubLink") }}
					>
					</strong>
				</p>
			</div>

			<Footer/>
		</>
	);
}

export default Projects;
